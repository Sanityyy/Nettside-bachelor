import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import astroConfig from './astro.config.mjs';

const PUBLIC_DIR = astroConfig.dist || "dist";
const argvs = process.argv.slice(2);

if ((argvs[0] === '--p' || argvs[0] === '-path') && argvs[1]) {
  console.error('Unexpected path argument. This script replaces links with relative paths within the project.');
  process.exit(1);
} else {
  let files = [];
  const extensions = ['.html', '.css', '.js', '.json'];

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));

  const replaceUrlsInFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        replaceUrlsInFiles(fullPath, arrayOfFiles);
      } else {
        if (extensions.includes(path.extname(file))) {
          if (fs.existsSync(fullPath)) { // Check if file exists before reading
            let content = fs.readFileSync(fullPath, 'utf8');

            content = content.replace(/src="\/(.*?)"/g, 'src="./$1"');
            content = content.replace(/href="\/(.*?)"/g, 'href="./$1"');
            content = content.replace(/url\(\'\/(.*?)\'\)/g, 'url("./$1")');
            content = content.replace(/url\(\"\/\/(.*?)\"\)/g, 'url("./$1")');

            fs.writeFileSync(fullPath, content);
          } else {
            console.error(`File not found: ${fullPath}`);
          }
        }
      }
    });
  };

  replaceUrlsInFiles(path.join(scriptDir, PUBLIC_DIR), files);
  console.log('Successfully replaced links with relative paths.');
}
