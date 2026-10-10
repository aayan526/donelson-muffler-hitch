import React, { useState } from 'react';

interface AutoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  backupSrc: string;
  alt: string;
  className?: string;
}

export const AutoImage: React.FC<AutoImageProps> = ({
  src,
  backupSrc,
  alt,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailedOnce, setHasFailedOnce] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasFailedOnce && backupSrc) {
      setHasFailedOnce(true);
      setCurrentSrc(backupSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#17171A] ${className}`}>
      <img
        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#17171A] animate-pulse" />
      )}
    </div>
  );
};
