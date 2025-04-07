# Image Optimization Pipeline

This document describes the image optimization pipeline implemented in the Follow Fuse landing site.

## Overview

The image optimization pipeline consists of several components:

1. **Build-time optimization**: Images are optimized during the build process using `vite-plugin-imagemin`.
2. **Runtime optimization**: A responsive image component that handles different screen sizes and optimizes image loading.
3. **Manual optimization**: A script to optimize existing images in the assets folder.

## Usage

### Responsive Image Component

The `ResponsiveImage` component is a wrapper around the standard `<img>` tag that provides:

- Automatic responsive image loading with `srcset` and `sizes` attributes
- Lazy loading for images below the fold
- Optimized image rendering with hardware acceleration
- Consistent styling across the application

```tsx
import ResponsiveImage from "@/components/ui/responsive-image";

// Basic usage
<ResponsiveImage 
  src={myImage} 
  alt="Description" 
  className="w-full h-auto" 
/>

// With custom sizes
<ResponsiveImage 
  src={myImage} 
  alt="Description" 
  className="w-full h-auto" 
  widths={[320, 640, 960, 1280]}
  sizes={['(max-width: 640px) 100vw', '(max-width: 960px) 50vw', '33vw']}
/>
```

### Optimizing Existing Images

To optimize all images in the `src/assets` folder:

```bash
npm run optimize-images
```

This will:
1. Create an `optimized` subfolder in the assets directory
2. Process all PNG, JPG, and WebP images
3. Apply appropriate optimizations based on file type
4. Report the size reduction achieved

## Best Practices

1. **Use the ResponsiveImage component** for all images in the application
2. **Optimize images before adding them** to the assets folder
3. **Use appropriate image formats**:
   - PNG for images with transparency or sharp edges
   - JPG for photographs and complex images
   - WebP for better compression (with fallbacks)
4. **Provide meaningful alt text** for accessibility
5. **Consider image dimensions** - don't use larger images than needed

## Troubleshooting

If images appear low quality:

1. Check if the source image is high resolution
2. Run the optimization script to improve quality
3. Ensure the ResponsiveImage component is being used correctly
4. Check browser console for any errors

## Future Improvements

- Implement automatic WebP conversion with fallbacks
- Add support for blur-up loading technique
- Integrate with a CDN for better delivery
- Add support for art-directed responsive images 