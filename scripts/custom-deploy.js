import ghpages from 'gh-pages';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy server configuration files to dist folder
const configFiles = [
  '.htaccess',
  'web.config',
  '_headers',
  'netlify.toml',
  '404.html'
];

configFiles.forEach(file => {
  try {
    fs.copyFileSync(
      path.join(__dirname, `../public/${file}`),
      path.join(__dirname, `../dist/${file}`)
    );
    console.log(`✅ Copied ${file} to dist folder`);
  } catch (error) {
    console.error(`❌ Error copying ${file}:`, error);
  }
});

// Ensure CNAME file exists
try {
  fs.copyFileSync(
    path.join(__dirname, '../public/CNAME'),
    path.join(__dirname, '../dist/CNAME')
  );
  console.log('✅ Copied CNAME file to dist folder');
} catch (error) {
  console.error('❌ Error copying CNAME file:', error);

  // If CNAME doesn't exist, create it
  try {
    fs.writeFileSync(
      path.join(__dirname, '../dist/CNAME'),
      'www.premium-chauffeur.com'
    );
    console.log('✅ Created CNAME file in dist folder');
  } catch (createError) {
    console.error('❌ Error creating CNAME file:', createError);
  }
}

// Fix paths in index.html
try {
  const indexPath = path.join(__dirname, '../dist/index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Replace absolute paths with relative paths
  indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
  indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');

  // Fix favicon paths
  indexContent = indexContent.replace(/href="\/favicon\.svg"/g, 'href="./favicon.svg"');
  indexContent = indexContent.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');

  // Fix paths with /webpage/ prefix
  indexContent = indexContent.replace(/src="\/webpage\/assets\//g, 'src="./assets/');
  indexContent = indexContent.replace(/href="\/webpage\/assets\//g, 'href="./assets/');
  indexContent = indexContent.replace(/href="\/webpage\/favicon\.svg"/g, 'href="./favicon.svg"');
  indexContent = indexContent.replace(/href="\/webpage\/favicon\.ico"/g, 'href="./favicon.ico"');

  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Fixed paths in index.html');
} catch (error) {
  console.error('❌ Error fixing paths in index.html:', error);
}

// Deploy to GitHub Pages
ghpages.publish('dist', {
  branch: 'gh-pages',
  message: 'Deploy website with server configuration files',
  // Add this to ensure custom domain is preserved
  add: true
}, (err) => {
  if (err) {
    console.error('❌ Deployment failed:', err);
    return;
  }
  console.log('✅ Successfully deployed to GitHub Pages');
});
