import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const VirtualTryOn = ({ product }) => {
  const [isActive, setIsActive] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]?.value || '');
  const [lighting, setLighting] = useState('natural');
  const [skinTone, setSkinTone] = useState('medium');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const lightingOptions = [
    { value: 'natural', label: 'Natural Light' },
    { value: 'warm', label: 'Warm Indoor' },
    { value: 'cool', label: 'Cool Indoor' },
    { value: 'bright', label: 'Bright Studio' }
  ];

  const skinToneOptions = [
    { value: 'fair', label: 'Fair' },
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Medium' },
    { value: 'tan', label: 'Tan' },
    { value: 'deep', label: 'Deep' }
  ];

  const startTryOn = async () => {
    try {
      const stream = await navigator.mediaDevices?.getUserMedia({ 
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        } 
      });
      
      if (videoRef?.current) {
        videoRef.current.srcObject = stream;
        videoRef?.current?.play();
      }
      
      setCameraPermission(true);
      setIsActive(true);
    } catch (error) {
      console.error('Camera access denied:', error);
      setCameraPermission(false);
    }
  };

  const stopTryOn = () => {
    if (videoRef?.current && videoRef?.current?.srcObject) {
      const tracks = videoRef?.current?.srcObject?.getTracks();
      tracks?.forEach(track => track?.stop());
      videoRef.current.srcObject = null;
    }
    setIsActive(false);
  };

  const capturePhoto = () => {
    if (videoRef?.current && canvasRef?.current) {
      const canvas = canvasRef?.current;
      const video = videoRef?.current;
      const context = canvas?.getContext('2d');
      
      canvas.width = video?.videoWidth;
      canvas.height = video?.videoHeight;
      context?.drawImage(video, 0, 0);
      
      // Simulate jewelry overlay
      context.fillStyle = 'rgba(212, 175, 55, 0.8)';
      context?.fillRect(canvas?.width * 0.4, canvas?.height * 0.3, canvas?.width * 0.2, canvas?.height * 0.1);
      
      const dataURL = canvas?.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${product?.name}-try-on.png`;
      link.href = dataURL;
      link?.click();
    }
  };

  useEffect(() => {
    return () => {
      if (videoRef?.current && videoRef?.current?.srcObject) {
        const tracks = videoRef?.current?.srcObject?.getTracks();
        tracks?.forEach(track => track?.stop());
      }
    };
  }, []);

  if (!isActive) {
    return (
      <div className="bg-card rounded-2xl p-6 luxury-shadow">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Icon name="Camera" size={32} color="var(--color-primary)" />
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
              Virtual Try-On
            </h3>
            <p className="text-muted-foreground">
              See how this {product?.category?.toLowerCase()} looks on you with our AR technology
            </p>
          </div>

          {product?.sizes && (
            <div className="max-w-xs mx-auto">
              <Select
                label="Select Size"
                options={product?.sizes}
                value={selectedSize}
                onChange={setSelectedSize}
                className="mb-4"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <Select
              label="Lighting"
              options={lightingOptions}
              value={lighting}
              onChange={setLighting}
            />
            <Select
              label="Skin Tone"
              options={skinToneOptions}
              value={skinTone}
              onChange={setSkinTone}
            />
          </div>

          <Button
            variant="default"
            size="lg"
            onClick={startTryOn}
            iconName="Camera"
            iconPosition="left"
            className="w-full max-w-xs"
          >
            Start Virtual Try-On
          </Button>

          {cameraPermission === false && (
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 text-sm">
              <div className="flex items-center space-x-2 text-warning">
                <Icon name="AlertTriangle" size={16} />
                <span className="font-medium">Camera Access Required</span>
              </div>
              <p className="text-warning/80 mt-1">
                Please allow camera access to use the virtual try-on feature
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
            <div className="flex flex-col items-center space-y-1">
              <Icon name="Smartphone" size={20} />
              <span>Mobile Optimized</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Icon name="Zap" size={20} />
              <span>Real-time AR</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Icon name="Download" size={20} />
              <span>Save Photos</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl overflow-hidden luxury-shadow">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-80 object-cover bg-black"
          autoPlay
          muted
          playsInline
        />
        
        <canvas ref={canvasRef} className="hidden" />
        
        {/* AR Overlay Simulation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-8 bg-primary/60 rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={stopTryOn}
            iconName="X"
            className="bg-white/90 hover:bg-white"
          >
          </Button>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={capturePhoto}
              iconName="Camera"
              className="bg-white/90 hover:bg-white"
            >
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="RotateCcw"
              className="bg-white/90 hover:bg-white"
            >
            </Button>
          </div>
        </div>

        {/* Size Indicator */}
        {selectedSize && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Size: {selectedSize}
          </div>
        )}
      </div>
      <div className="p-4 bg-muted/30">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-muted-foreground">
              <Icon name="Sun" size={16} />
              <span>{lightingOptions?.find(l => l?.value === lighting)?.label}</span>
            </span>
            <span className="flex items-center space-x-1 text-muted-foreground">
              <Icon name="User" size={16} />
              <span>{skinToneOptions?.find(s => s?.value === skinTone)?.label}</span>
            </span>
          </div>
          
          <Button variant="ghost" size="sm" iconName="Settings" iconPosition="left">
            Adjust
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;