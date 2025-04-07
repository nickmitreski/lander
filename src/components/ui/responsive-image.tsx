import React from 'react';
import { createResponsiveImageProps } from '@/utils/imageUtils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  widths?: number[];
  sizes?: string[];
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * A responsive image component that automatically handles different screen sizes
 * and optimizes image loading and rendering.
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  widths = [90, 180],
  sizes = ['90px'],
  style = {},
  onLoad,
  onError,
}) => {
  // Create base responsive image props
  const responsiveProps = createResponsiveImageProps(src, alt, className, widths, sizes);
  
  // Merge custom style with responsive image style and ensure size constraints
  const mergedStyle = {
    ...responsiveProps.style,
    ...style,
    maxHeight: style.maxHeight || style.height || 'auto',
    height: style.height || 'auto',
  } as React.CSSProperties;
  
  return (
    <img
      {...responsiveProps}
      style={mergedStyle}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default ResponsiveImage; 