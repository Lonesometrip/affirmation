require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Middleware
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(express.json());

// Add request logging middleware with error handling
app.use((req, res, next) => {
    // Add CORS headers for all responses
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    
    console.log('Incoming request:', {
        method: req.method,
        path: req.path,
        headers: req.headers,
        body: req.body
    });
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// MongoDB Connection with better error handling
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/baraka', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit if we can't connect to the database
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plannerData: { type: Object, default: {} },
    deepWorkData: { type: Object, default: {} },
    quranGoals: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Add this after the User schema
const CalendarEventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        enum: ['prayer', 'quran', 'deep-work', 'other'],
        default: 'other'
    },
    backgroundColor: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CalendarEvent = mongoose.model('CalendarEvent', CalendarEventSchema);

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Routes
app.post('/api/register', async (req, res) => {
    console.log('Register attempt:', req.body);
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            console.log('Missing required fields:', { username: !!username, email: !!email, password: !!password });
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            console.log('User already exists:', { email, username });
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();
        console.log('User created successfully:', { username, email });

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        res.status(201).json({ 
            token, 
            user: { 
                id: user._id, 
                username, 
                email 
            } 
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Error creating user', 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

app.post('/api/login', async (req, res) => {
    console.log('Login attempt:', req.body);
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('User logged in successfully:', { email });

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        res.json({ 
            token, 
            user: { 
                id: user._id, 
                username: user.username, 
                email: user.email 
            } 
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

// Protected routes
app.get('/api/user/data', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            plannerData: user.plannerData,
            deepWorkData: user.deepWorkData,
            quranGoals: user.quranGoals
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Error fetching user data', error: error.message });
    }
});

app.put('/api/user/data', authenticateToken, async (req, res) => {
    try {
        const { plannerData, deepWorkData, quranGoals } = req.body;
        
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            { plannerData, deepWorkData, quranGoals },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ message: 'Error updating user data', error: error.message });
    }
});

// Calendar Entry Schema
const calendarEntrySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    type: { type: String, enum: ['task', 'deep_work', 'quran_goal', 'prayer'], required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const CalendarEntry = mongoose.model('CalendarEntry', calendarEntrySchema);

// Calendar Routes
app.get('/api/calendar', authenticateToken, async (req, res) => {
    try {
        const entries = await CalendarEntry.find({ userId: req.user.userId })
            .sort({ date: 1 });
        res.json(entries);
    } catch (error) {
        console.error('Error fetching calendar entries:', error);
        res.status(500).json({ message: 'Error fetching calendar entries' });
    }
});

app.post('/api/calendar', authenticateToken, async (req, res) => {
    try {
        const { title, description, date, type } = req.body;
        const entry = new CalendarEntry({
            userId: req.user.userId,
            title,
            description,
            date,
            type
        });
        await entry.save();
        res.status(201).json(entry);
    } catch (error) {
        console.error('Error creating calendar entry:', error);
        res.status(500).json({ message: 'Error creating calendar entry' });
    }
});

app.put('/api/calendar/:id', authenticateToken, async (req, res) => {
    try {
        const entry = await CalendarEntry.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            { $set: req.body },
            { new: true }
        );
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json(entry);
    } catch (error) {
        console.error('Error updating calendar entry:', error);
        res.status(500).json({ message: 'Error updating calendar entry' });
    }
});

app.delete('/api/calendar/:id', authenticateToken, async (req, res) => {
    try {
        const entry = await CalendarEntry.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId
        });
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting calendar entry:', error);
        res.status(500).json({ message: 'Error deleting calendar entry' });
    }
});

// Add these routes after the existing routes
app.post('/api/events', authenticateToken, async (req, res) => {
    try {
        const { title, description, start, end, type } = req.body;
        
        // Set background color based on event type
        let backgroundColor;
        switch(type) {
            case 'prayer':
                backgroundColor = '#3b82f6'; // blue
                break;
            case 'quran':
                backgroundColor = '#8b5cf6'; // purple
                break;
            case 'deep-work':
                backgroundColor = '#22c55e'; // green
                break;
            default:
                backgroundColor = '#eab308'; // yellow
        }

        const event = new CalendarEvent({
            userId: req.user.id,
            title,
            description,
            start,
            end,
            type,
            backgroundColor
        });

        await event.save();
        res.status(201).json(event);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Error creating event' });
    }
});

app.get('/api/events', authenticateToken, async (req, res) => {
    try {
        const { start, end } = req.query;
        const query = { userId: req.user.id };
        
        if (start && end) {
            query.start = { $gte: new Date(start) };
            query.end = { $lte: new Date(end) };
        }

        const events = await CalendarEvent.find(query);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Error fetching events' });
    }
});

app.put('/api/events/:id', authenticateToken, async (req, res) => {
    try {
        const event = await CalendarEvent.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        Object.assign(event, req.body);
        await event.save();
        res.json(event);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Error updating event' });
    }
});

app.delete('/api/events/:id', authenticateToken, async (req, res) => {
    try {
        const result = await CalendarEvent.deleteOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Error deleting event' });
    }
});

// Test route to verify server is working
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 