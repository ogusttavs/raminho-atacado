import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';

const publicDir = path.join(process.cwd(), 'public');

// Downloads an image and saves it locally
async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      const stream = fs.createWriteStream(dest);
      response.pipe(stream);
      stream.on('finish', () => resolve());
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));
  
  console.log(`Found ${pngFiles.length} PNG files. Converting to WebP...`);
  
  for (const file of pngFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace(/\.png$/i, '.webp'));
    
    // Resize favicon separately as it needs to be small
    if (file.toLowerCase() === 'favicon.png') {
        await sharp(inputPath).resize(64, 64).webp({ quality: 90 }).toFile(outputPath);
        console.log(`Converted and resized ${file} to ${outputPath}`);
    } else {
        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
        console.log(`Converted ${file} to WebP`);
    }
  }

  // Download the About image
  const aboutImageUrl = 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop';
  const aboutImageDest = path.join(publicDir, 'mercadao-about.jpg');
  const aboutImageWebp = path.join(publicDir, 'mercadao-about.webp');
  
  console.log('Downloading About section image...');
  await downloadImage(aboutImageUrl, aboutImageDest);
  
  console.log('Converting About image to WebP...');
  await sharp(aboutImageDest)
    .resize(800) // Resize down to 800px width
    .webp({ quality: 80 })
    .toFile(aboutImageWebp);
    
  console.log('Images optimized successfully.');
}

optimizeImages().catch(console.error);
