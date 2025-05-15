import ghpages from 'gh-pages';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy .htaccess and web.config to dist folder
try {
  fs.copyFileSync(
    path.join(__dirname, '../public/.htaccess'),
    path.join(__dirname, '../dist/.htaccess')
  );
  console.log('✅ Copied .htaccess to dist folder');
} catch (error) {
  console.error('❌ Error copying .htaccess:', error);
}

try {
  fs.copyFileSync(
    path.join(__dirname, '../public/web.config'),
    path.join(__dirname, '../dist/web.config')
  );
  console.log('✅ Copied web.config to dist folder');
} catch (error) {
  console.error('❌ Error copying web.config:', error);
}

// Fix paths in index.html
try {
  const indexPath = path.join(__dirname, '../dist/index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Replace absolute paths with relative paths
  indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
  indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');

  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Fixed paths in index.html');
} catch (error) {
  console.error('❌ Error fixing paths in index.html:', error);
}

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
