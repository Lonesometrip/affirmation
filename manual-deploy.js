import ghpages from 'gh-pages';

console.log('Deploying to GitHub Pages...');
ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Lonesometrip/affirmation.git',
    user: {
      name: 'Lonesometrip',
      email: 'benmotrade@gmail.com'
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
