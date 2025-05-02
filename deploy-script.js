import ghpages from 'gh-pages';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run build first
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
      email: 'benmotrade@gmail.com' // Using the email from the original script
    },
    cname: 'www.premium-chauffeur.com'
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment complete!');
  }
);