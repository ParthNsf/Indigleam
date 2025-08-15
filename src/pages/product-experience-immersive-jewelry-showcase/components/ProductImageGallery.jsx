import React, { useState, useRef, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductImageGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [is360View, setIs360View] = useState(false);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const images = [
    product?.mainImage,
    ...product?.galleryImages,
    ...product?.lifestyleImages
  ];

  const handleMouseMove = (e) => {
    if (!isZoomed || !imageRef?.current) return;
    
    const rect = imageRef?.current?.getBoundingClientRect();
    const x = ((e?.clientX - rect?.left) / rect?.width) * 100;
    const y = ((e?.clientY - rect?.top) / rect?.height) * 100;
    
    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handle360Drag = (e) => {
    if (!isDragging?.current) return;
    
    const deltaX = e?.clientX - lastX?.current;
    setRotation(prev => (prev + deltaX * 0.5) % 360);
    lastX.current = e?.clientX;
  };

  const start360Drag = (e) => {
    isDragging.current = true;
    lastX.current = e?.clientX;
  };

  const stop360Drag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (is360View) {
      document.addEventListener('mousemove', handle360Drag);
      document.addEventListener('mouseup', stop360Drag);
      return () => {
        document.removeEventListener('mousemove', handle360Drag);
        document.removeEventListener('mouseup', stop360Drag);
      };
    }
  }, [is360View]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images?.length) % images?.length);
    setIsZoomed(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-champagne rounded-2xl overflow-hidden luxury-shadow">
        <div className="aspect-square relative">
          {is360View ? (
            <div 
              className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
              onMouseDown={start360Drag}
              style={{
                background: `conic-gradient(from ${rotation}deg, #D4AF37, #C9A96E, #D4AF37)`
              }}
            >
              <div 
                className="w-80 h-80 bg-white rounded-full flex items-center justify-center luxury-shadow"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <Image
                  src={product?.mainImage}
                  alt={product?.name}
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          ) : (
            <div
              ref={imageRef}
              className={`w-full h-full relative overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={images?.[currentImageIndex]}
                alt={`${product?.name} - View ${currentImageIndex + 1}`}
                className={`w-full h-full object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={isZoomed ? {
                  transformOrigin: `${zoomPosition?.x}% ${zoomPosition?.y}%`
                } : {}}
              />
            </div>
          )}

          {/* Navigation Arrows */}
          {!is360View && images?.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center luxury-shadow transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center luxury-shadow transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronRight" size={20} color="var(--color-foreground)" />
              </button>
            </>
          )}

          {/* View Controls */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant={is360View ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setIs360View(!is360View);
                setIsZoomed(false);
              }}
              iconName="RotateCw"
              iconPosition="left"
            >
              360°
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Maximize"
              onClick={() => setIsZoomed(!isZoomed)}
            >
            </Button>
          </div>

          {/* Image Counter */}
          {!is360View && (
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images?.length}
            </div>
          )}
        </div>
      </div>
      {/* Thumbnail Gallery */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setIs360View(false);
              setIsZoomed(false);
            }}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              currentImageIndex === index && !is360View
                ? 'border-primary luxury-shadow'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Image
              src={image}
              alt={`${product?.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        
        {/* 360 View Thumbnail */}
        <button
          onClick={() => {
            setIs360View(true);
            setIsZoomed(false);
          }}
          className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
            is360View
              ? 'border-primary luxury-shadow bg-primary/10'
              : 'border-border hover:border-primary/50 bg-muted'
          }`}
        >
          <Icon name="RotateCw" size={16} color="var(--color-primary)" />
        </button>
      </div>
      {/* View Options */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Icon name="ZoomIn" size={16} />
            <span>Click to zoom</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="RotateCw" size={16} />
            <span>360° view available</span>
          </span>
        </div>
        <Button variant="ghost" size="sm" iconName="Share2" iconPosition="left">
          Share
        </Button>
      </div>
    </div>
  );
};

export default ProductImageGallery;