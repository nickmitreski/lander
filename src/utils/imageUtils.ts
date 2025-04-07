/**
 * Image utility functions for handling responsive images
 */

/**
 * Generates srcset attribute for responsive images
 * @param src - Base image path
 * @param widths - Array of widths to generate srcset for
 * @returns srcset string
 */
export const generateSrcSet = (src: string, widths: number[] = [320, 640, 960, 1280]): string => {
  return widths
    .map(width => `${src}?w=${width} ${width}w`)
    .join(', ');
};

/**
 * Generates sizes attribute for responsive images
 * @param sizes - Array of size breakpoints
 * @returns sizes string
 */
export const generateSizes = (sizes: string[] = [
  '(max-width: 640px) 100vw',
  '(max-width: 960px) 50vw',
  '33vw'
]): string => {
  return sizes.join(', ');
};

/**
 * Creates a responsive image component props object
 * @param src - Base image path
 * @param alt - Alt text
 * @param className - CSS classes
 * @param widths - Array of widths for srcset
 * @param sizes - Array of size breakpoints
 * @returns Props object for img element
 */
export const createResponsiveImageProps = (
  src: string,
  alt: string,
  className: string = '',
  widths: number[] = [320, 640, 960, 1280],
  sizes: string[] = ['(max-width: 640px) 100vw', '(max-width: 960px) 50vw', '33vw']
) => {
  return {
    src,
    alt,
    className,
    srcSet: generateSrcSet(src, widths),
    sizes: generateSizes(sizes),
    loading: 'lazy' as const,
    style: {
      imageRendering: '-webkit-optimize-contrast',
      backfaceVisibility: 'hidden' as const,
      WebkitFontSmoothing: 'antialiased',
      transform: 'translateZ(0)',
      willChange: 'transform'
    }
  };
}; 