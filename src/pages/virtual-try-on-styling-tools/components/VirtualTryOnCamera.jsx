import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VirtualTryOnCamera = ({ selectedProduct, onProductSelect }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [currentView, setCurrentView] = useState('front');
  const [lighting, setLighting] = useState(50);
  const [skinTone, setSkinTone] = useState('medium');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const jewelryCategories = [
    { id: 'rings', name: 'Rings', icon: 'Circle', count: 24 },
    { id: 'earrings', name: 'Earrings', icon: 'Sparkles', count: 18 },
    { id: 'necklaces', name: 'Necklaces', icon: 'Heart', count: 15 },
    { id: 'bracelets', name: 'Bracelets', icon: 'Watch', count: 12 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Eternal Solitaire Ring",
      category: "rings",
      price: 2850,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Diamond Drop Earrings",
      category: "earrings", 
      price: 1950,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Pearl Strand Necklace",
      category: "necklaces",
      price: 3200,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Gold Tennis Bracelet",
      category: "bracelets",
      price: 2400,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop"
    }
  ];

  const skinTones = [
    { id: 'fair', name: 'Fair', color: '#F7E7CE' },
    { id: 'light', name: 'Light', color: '#F1C27D' },
    { id: 'medium', name: 'Medium', color: '#E0AC69' },
    { id: 'tan', name: 'Tan', color: '#C68642' },
    { id: 'deep', name: 'Deep', color: '#8D5524' }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices?.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      if (videoRef?.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Camera access denied:', error);
    }
  };

  const stopCamera = () => {
    if (videoRef?.current && videoRef?.current?.srcObject) {
      const tracks = videoRef?.current?.srcObject?.getTracks();
      tracks?.forEach(track => track?.stop());
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef?.current && canvasRef?.current) {
      const canvas = canvasRef?.current;
      const video = videoRef?.current;
      const context = canvas?.getContext('2d');
      
      canvas.width = video?.videoWidth;
      canvas.height = video?.videoHeight;
      context?.drawImage(video, 0, 0);
      
      // Here you would add AR overlay logic
      return canvas?.toDataURL('image/png');
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Virtual Try-On</h3>
            <p className="text-sm text-muted-foreground mt-1">See how jewelry looks on you with AR technology</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={currentView === 'front' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentView('front')}
            >
              Front
            </Button>
            <Button
              variant={currentView === 'side' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentView('side')}
            >
              Side
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Camera View */}
        <div className="relative bg-secondary rounded-xl overflow-hidden mb-6" style={{ height: '400px' }}>
          {!isCameraActive ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Camera" size={32} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Start Virtual Try-On</h4>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Allow camera access to see how jewelry looks on you with our AR technology
              </p>
              <Button
                variant="default"
                onClick={startCamera}
                iconName="Camera"
                iconPosition="left"
              >
                Enable Camera
              </Button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {/* AR Overlay Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={capturePhoto}
                  className="bg-background/80 backdrop-blur-sm"
                >
                  <Icon name="Camera" size={20} />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={stopCamera}
                  className="bg-background/80 backdrop-blur-sm"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>

              {/* Selected Product Overlay */}
              {selectedProduct && (
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedProduct?.image}
                      alt={selectedProduct?.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="font-semibold text-sm text-foreground">{selectedProduct?.name}</h5>
                      <p className="text-primary font-medium">${selectedProduct?.price?.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lighting Control */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Lighting Adjustment
            </label>
            <div className="flex items-center space-x-4">
              <Icon name="Sun" size={20} className="text-muted-foreground" />
              <input
                type="range"
                min="0"
                max="100"
                value={lighting}
                onChange={(e) => setLighting(e?.target?.value)}
                className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-muted-foreground w-12">{lighting}%</span>
            </div>
          </div>

          {/* Skin Tone Calibration */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Skin Tone Calibration
            </label>
            <div className="flex items-center space-x-2">
              {skinTones?.map((tone) => (
                <button
                  key={tone?.id}
                  onClick={() => setSkinTone(tone?.id)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    skinTone === tone?.id ? 'border-primary scale-110' : 'border-border'
                  }`}
                  style={{ backgroundColor: tone?.color }}
                  title={tone?.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Choose Jewelry Category</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jewelryCategories?.map((category) => (
              <button
                key={category?.id}
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-200 text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon name={category?.icon} size={24} className="text-primary" />
                </div>
                <h5 className="font-medium text-foreground">{category?.name}</h5>
                <p className="text-sm text-muted-foreground">{category?.count} items</p>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Try These Popular Items</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts?.map((product) => (
              <button
                key={product?.id}
                onClick={() => onProductSelect(product)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedProduct?.id === product?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-card'
                }`}
              >
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h5 className="font-medium text-foreground text-sm mb-1">{product?.name}</h5>
                <p className="text-primary font-semibold text-sm">${product?.price?.toLocaleString()}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOnCamera;