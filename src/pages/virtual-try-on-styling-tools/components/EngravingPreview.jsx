import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EngravingPreview = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [engravingText, setEngravingText] = useState('');
  const [selectedFont, setSelectedFont] = useState('classic');
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [engravingPosition, setEngravingPosition] = useState('center');
  const [previewMode, setPreviewMode] = useState('text');

  const engravableProducts = [
    {
      id: 1,
      name: "Classic Wedding Band",
      category: "rings",
      price: 850,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      engravingArea: "Inside band",
      maxCharacters: 25
    },
    {
      id: 2,
      name: "Pendant Necklace",
      category: "necklaces",
      price: 680,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      engravingArea: "Back of pendant",
      maxCharacters: 15
    },
    {
      id: 3,
      name: "Signet Ring",
      category: "rings",
      price: 1200,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      engravingArea: "Ring face",
      maxCharacters: 8
    },
    {
      id: 4,
      name: "ID Bracelet",
      category: "bracelets",
      price: 450,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
      engravingArea: "Plate surface",
      maxCharacters: 20
    },
    {
      id: 5,
      name: "Locket Necklace",
      category: "necklaces",
      price: 920,
      image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?w=300&h=300&fit=crop",
      engravingArea: "Locket exterior",
      maxCharacters: 12
    },
    {
      id: 6,
      name: "Cufflinks",
      category: "accessories",
      price: 380,
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/jewelry-2564394_1280.jpg?w=300&h=300&fit=crop",
      engravingArea: "Face of cufflink",
      maxCharacters: 6
    }
  ];

  const fontOptions = [
    { value: 'classic', label: 'Classic Serif', preview: 'Aa', description: 'Traditional, elegant serif font' },
    { value: 'modern', label: 'Modern Sans', preview: 'Aa', description: 'Clean, contemporary sans-serif' },
    { value: 'script', label: 'Elegant Script', preview: 'Aa', description: 'Flowing, handwritten style' },
    { value: 'block', label: 'Bold Block', preview: 'Aa', description: 'Strong, impactful lettering' },
    { value: 'italic', label: 'Classic Italic', preview: 'Aa', description: 'Slanted, sophisticated style' },
    { value: 'monogram', label: 'Monogram Style', preview: 'Aa', description: 'Perfect for initials' }
  ];

  const symbolOptions = [
    { value: 'heart', label: '♥', name: 'Heart', category: 'love' },
    { value: 'infinity', label: '∞', name: 'Infinity', category: 'love' },
    { value: 'star', label: '★', name: 'Star', category: 'celestial' },
    { value: 'moon', label: '☽', name: 'Moon', category: 'celestial' },
    { value: 'sun', label: '☀', name: 'Sun', category: 'celestial' },
    { value: 'diamond', label: '♦', name: 'Diamond', category: 'shapes' },
    { value: 'cross', label: '✝', name: 'Cross', category: 'spiritual' },
    { value: 'anchor', label: '⚓', name: 'Anchor', category: 'nautical' },
    { value: 'flower', label: '❀', name: 'Flower', category: 'nature' },
    { value: 'butterfly', label: '🦋', name: 'Butterfly', category: 'nature' }
  ];

  const positionOptions = [
    { value: 'center', label: 'Center', description: 'Centered alignment' },
    { value: 'left', label: 'Left', description: 'Left-aligned text' },
    { value: 'right', label: 'Right', description: 'Right-aligned text' },
    { value: 'top', label: 'Top', description: 'Top placement' },
    { value: 'bottom', label: 'Bottom', description: 'Bottom placement' }
  ];

  const popularMessages = [
    { text: "Forever & Always", category: "romantic" },
    { text: "Love You More", category: "romantic" },
    { text: "My Heart is Yours", category: "romantic" },
    { text: "Together Forever", category: "romantic" },
    { text: "Always & Forever", category: "romantic" },
    { text: "Best Mom Ever", category: "family" },
    { text: "Dad\'s Little Girl", category: "family" },
    { text: "Family First", category: "family" },
    { text: "Blessed", category: "inspirational" },
    { text: "Dream Big", category: "inspirational" },
    { text: "Stay Strong", category: "inspirational" },
    { text: "Never Give Up", category: "inspirational" }
  ];

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setEngravingText('');
    setSelectedSymbol('');
  };

  const handleQuickMessage = (message) => {
    setEngravingText(message);
  };

  const getPreviewText = () => {
    if (previewMode === 'symbol' && selectedSymbol) {
      const symbol = symbolOptions?.find(s => s?.value === selectedSymbol);
      return symbol ? symbol?.label : '';
    }
    return engravingText || 'Preview Text';
  };

  const getRemainingCharacters = () => {
    if (!selectedProduct) return 0;
    return selectedProduct?.maxCharacters - engravingText?.length;
  };

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Custom Engraving Preview</h3>
            <p className="text-sm text-muted-foreground mt-1">Personalize your jewelry with custom engraving</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={previewMode === 'text' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('text')}
            >
              Text
            </Button>
            <Button
              variant={previewMode === 'symbol' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('symbol')}
            >
              Symbols
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Product Selection */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Choose Product to Engrave</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {engravableProducts?.map((product) => (
              <button
                key={product?.id}
                onClick={() => handleProductSelect(product)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedProduct?.id === product?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-secondary'
                }`}
              >
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-16 object-cover rounded-lg mb-2"
                />
                <h5 className="font-medium text-foreground text-xs mb-1">{product?.name}</h5>
                <p className="text-xs text-muted-foreground">{product?.engravingArea}</p>
                <p className="text-xs text-primary font-semibold mt-1">${product?.price}</p>
              </button>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <>
            {/* Preview Section */}
            <div className="bg-secondary rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Live Preview</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image with Preview */}
                <div className="relative">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                      <div className={`text-center font-${selectedFont} text-lg text-foreground`}>
                        {getPreviewText()}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {selectedProduct?.engravingArea}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Engraving Options */}
                <div className="space-y-6">
                  {previewMode === 'text' ? (
                    <>
                      <Input
                        label="Engraving Text"
                        type="text"
                        placeholder="Enter your message"
                        value={engravingText}
                        onChange={(e) => setEngravingText(e?.target?.value)}
                        maxLength={selectedProduct?.maxCharacters}
                        description={`${getRemainingCharacters()} characters remaining`}
                      />

                      <Select
                        label="Font Style"
                        options={fontOptions}
                        value={selectedFont}
                        onChange={setSelectedFont}
                        placeholder="Choose font"
                      />

                      <Select
                        label="Text Position"
                        options={positionOptions}
                        value={engravingPosition}
                        onChange={setEngravingPosition}
                        placeholder="Choose position"
                      />
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Choose Symbol
                        </label>
                        <div className="grid grid-cols-5 gap-2">
                          {symbolOptions?.map((symbol) => (
                            <button
                              key={symbol?.value}
                              onClick={() => setSelectedSymbol(symbol?.value)}
                              className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                                selectedSymbol === symbol?.value
                                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                              }`}
                              title={symbol?.name}
                            >
                              <span className="text-2xl">{symbol?.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <Select
                        label="Symbol Position"
                        options={positionOptions}
                        value={engravingPosition}
                        onChange={setEngravingPosition}
                        placeholder="Choose position"
                      />
                    </>
                  )}

                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Info" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Engraving Details</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Location: {selectedProduct?.engravingArea}</li>
                      <li>• Max characters: {selectedProduct?.maxCharacters}</li>
                      <li>• Processing time: 3-5 business days</li>
                      <li>• Additional cost: $25</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Messages */}
            {previewMode === 'text' && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Popular Messages</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {popularMessages?.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickMessage(message?.text)}
                      className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg text-left transition-all duration-200 group"
                    >
                      <p className="text-sm font-medium text-foreground group-hover:text-primary">
                        "{message?.text}"
                      </p>
                      <p className="text-xs text-muted-foreground capitalize mt-1">{message?.category}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Font Preview */}
            {previewMode === 'text' && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Font Styles</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fontOptions?.map((font) => (
                    <button
                      key={font?.value}
                      onClick={() => setSelectedFont(font?.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedFont === font?.value
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-secondary'
                      }`}
                    >
                      <div className="text-2xl mb-2">{font?.preview}</div>
                      <h5 className="font-medium text-foreground text-sm">{font?.label}</h5>
                      <p className="text-xs text-muted-foreground">{font?.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                iconName="ShoppingBag"
                iconPosition="left"
                disabled={!engravingText && !selectedSymbol}
              >
                Add to Cart with Engraving
              </Button>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                disabled={!engravingText && !selectedSymbol}
              >
                Save Preview
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
                disabled={!engravingText && !selectedSymbol}
              >
                Share Design
              </Button>
            </div>

            {/* Care Instructions */}
            <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={24} className="text-accent mt-1" />
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Engraving Care & Information</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All engravings are permanent and cannot be removed</li>
                    <li>• Engraved items are final sale and cannot be returned</li>
                    <li>• Deep engravings may affect the structural integrity of thin pieces</li>
                    <li>• Clean engraved areas gently with a soft brush and mild soap</li>
                    <li>• Avoid harsh chemicals that may damage the engraving</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EngravingPreview;