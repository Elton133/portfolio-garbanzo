import { useState } from 'react';
import '../style.css'; // Make sure styles are pulled in

export default function ImageLoader({ src, alt, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`img-loader-container ${className}`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Skeleton overlay that hides once the image loads */}
      <div
        className={`skeleton-loader ${isLoaded ? 'hidden' : ''}`}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--eerie-black-1) 25%, var(--jet) 50%, var(--eerie-black-1) 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite linear',
          zIndex: 1,
          transition: 'opacity 0.3s ease',
          opacity: isLoaded ? 0 : 1,
          pointerEvents: 'none'
        }}
      />

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
}
