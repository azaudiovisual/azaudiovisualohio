const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define paths
const inputDir = path.join(__dirname, '..', 'pics');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'portfolio');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get list of HEIC files
const files = fs.readdirSync(inputDir).filter(file => 
  file.toLowerCase().endsWith('.heic')
);

console.log(`Found ${files.length} HEIC files to convert`);

// Process each file
const processFiles = async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFilename = path.basename(file, path.extname(file)) + '.jpg';
    const outputPath = path.join(outputDir, outputFilename);
    
    console.log(`Converting ${file} to ${outputFilename}...`);
    
    try {
      // Read HEIC file
      const buffer = fs.readFileSync(inputPath);
      
      // Convert to JPG and resize to a reasonable size for web
      await sharp(buffer)
        .resize(1200, null, { withoutEnlargement: true }) // Resize width to 1200px, maintain aspect ratio
        .jpeg({ quality: 85 }) // Good balance between quality and file size
        .toFile(outputPath);
      
      console.log(`Successfully converted ${file} to ${outputFilename}`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error.message);
    }
  }
  
  console.log('Conversion complete!');
};

processFiles().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
