/**
 * Image optimization script
 * 
 * This script optimizes all images in the src/assets folder
 * using sharp for better quality and smaller file sizes.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const OUTPUT_DIR = path.resolve(__dirname, '../src/assets/optimized');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Process all images in the assets directory
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Get all files in the assets directory
  const files = fs.readdirSync(ASSETS_DIR);
  
  // Filter for image files
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });
  
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  // Process each image
  for (const file of imageFiles) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    
    try {
      // Skip if it's already an optimized image
      if (file.includes('optimized')) {
        console.log(`Skipping already optimized image: ${file}`);
        continue;
      }
      
      console.log(`Optimizing: ${file}`);
      
      // Get image metadata
      const metadata = await sharp(inputPath).metadata();
      
      // Optimize based on file type
      if (file.endsWith('.png')) {
        // PNG optimization
        await sharp(inputPath)
          .png({ 
            quality: 90,
            compressionLevel: 9,
            palette: true
          })
          .toFile(outputPath);
      } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        // JPEG optimization
        await sharp(inputPath)
          .jpeg({ 
            quality: 85,
            mozjpeg: true
          })
          .toFile(outputPath);
      } else {
        // Default optimization
        await sharp(inputPath)
          .toFile(outputPath);
      }
      
      // Get file sizes
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`  ✓ Optimized: ${file} (${savings}% smaller)`);
    } catch (error) {
      console.error(`  ✗ Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(console.error); 