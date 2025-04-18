# Portfolio Images

This directory contains optimized images for the portfolio section of the website.

## Image Preparation Instructions

For optimal website performance and compatibility, follow these steps to prepare your HEIC images:

1. **Convert HEIC to JPG/WebP**: Use one of these methods:
   - **Mac**: Right-click each image, select "Quick Actions" → "Convert Image" → select JPG/PNG format
   - **Windows**: Install "CopyTrans HEIC for Windows" or use online converters like HEICtoJPG.com
   - **Image editing software**: Adobe Photoshop, Lightroom, or GIMP can open and convert HEIC files

2. **Optimize for web**:
   - Resize images to maximum dimensions of 1200px width (preserving aspect ratio)
   - Compress JPG images to 80-85% quality for good balance between quality and file size
   - Consider WebP format for better compression with maintained quality

3. **Name files descriptively**:
   - Use lowercase letters with hyphens between words
   - Include event type or location in the filename
   - Examples: `corporate-conference.jpg`, `music-festival-stage.jpg`

4. **Place converted files in this directory**:
   - After converting and optimizing, place the JPG/WebP files here
   - Update the portfolio data in the Portfolio.tsx file to reference these images

## Image Dimensions

- Portfolio thumbnails: 600px × 400px (3:2 ratio)
- Modal/detail view: 1200px max width (maintain aspect ratio)
