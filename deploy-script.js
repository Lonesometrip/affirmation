const ghpages = require('gh-pages');
const path = require('path');

// Run build first
const { execSync } = require('child_process');
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Then deploy
console.log('Deploying to GitHub Pages...');
ghpages.publish(
  path.join(process.cwd(), 'dist'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Lonesometrip/affirmation.git',
    user: {
      name: 'Lonesometrip',
      email: 'benmotrade@gmail.com'
    }
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment complete!');
  }
);