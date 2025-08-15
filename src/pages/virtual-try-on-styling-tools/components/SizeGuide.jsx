import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';


const SizeGuide = () => {
  const [activeCategory, setActiveCategory] = useState('rings');
  const [measurements, setMeasurements] = useState({
    ringSize: '',
    wristSize: '',
    neckSize: '',
    fingerCircumference: ''
  });
  const [recommendedSize, setRecommendedSize] = useState(null);

  const categories = [
    { id: 'rings', name: 'Rings', icon: 'Circle' },
    { id: 'bracelets', name: 'Bracelets', icon: 'Watch' },
    { id: 'necklaces', name: 'Necklaces', icon: 'Heart' },
    { id: 'earrings', name: 'Earrings', icon: 'Sparkles' }
  ];

  const ringSizeChart = [
    { us: '4', uk: 'H', eu: '47', circumference: '46.8mm' },
    { us: '4.5', uk: 'I', eu: '48', circumference: '48.0mm' },
    { us: '5', uk: 'J', eu: '49', circumference: '49.3mm' },
    { us: '5.5', uk: 'K', eu: '50', circumference: '50.6mm' },
    { us: '6', uk: 'L', eu: '51', circumference: '51.8mm' },
    { us: '6.5', uk: 'M', eu: '52', circumference: '53.1mm' },
    { us: '7', uk: 'N', eu: '54', circumference: '54.4mm' },
    { us: '7.5', uk: 'O', eu: '55', circumference: '55.7mm' },
    { us: '8', uk: 'P', eu: '56', circumference: '56.9mm' },
    { us: '8.5', uk: 'Q', eu: '57', circumference: '58.2mm' },
    { us: '9', uk: 'R', eu: '59', circumference: '59.5mm' },
    { us: '9.5', uk: 'S', eu: '60', circumference: '60.8mm' },
    { us: '10', uk: 'T', eu: '61', circumference: '62.1mm' }
  ];

  const comparisonObjects = [
    { name: 'Quarter (US)', size: '24.3mm', description: 'Standard US quarter coin' },
    { name: 'Penny (US)', size: '19.1mm', description: 'Standard US penny coin' },
    { name: 'Nickel (US)', size: '21.2mm', description: 'Standard US nickel coin' },
    { name: 'Dime (US)', size: '17.9mm', description: 'Standard US dime coin' },
    { name: 'Credit Card', size: '85.6mm x 53.9mm', description: 'Standard credit card dimensions' }
  ];

  const measurementMethods = {
    rings: [
      {
        title: "String Method",
        steps: [
          "Wrap a string around your finger where you\'d wear the ring",
          "Mark where the string overlaps",
          "Measure the string length with a ruler",
          "Use our size chart to find your size"
        ],
        icon: "Ruler"
      },
      {
        title: "Paper Strip Method",
        steps: [
          "Cut a strip of paper about 6 inches long",
          "Wrap it around your finger and mark the overlap",
          "Measure the marked length",
          "Compare with our size chart"
        ],
        icon: "FileText"
      },
      {
        title: "Existing Ring Method",
        steps: [
          "Find a ring that fits your finger well",
          "Measure the inner diameter",
          "Use our conversion chart",
          "Consider the width of the new ring"
        ],
        icon: "Circle"
      }
    ],
    bracelets: [
      {
        title: "Wrist Measurement",
        steps: [
          "Wrap a measuring tape around your wrist",
          "Add 0.5-1 inch for comfort",
          "Consider bracelet style (tight vs loose fit)",
          "Account for wrist bone prominence"
        ],
        icon: "Watch"
      }
    ],
    necklaces: [
      {
        title: "Neck Measurement",
        steps: [
          "Measure around your neck where you want the necklace to sit",
          "Add desired length for the style",
          "Consider pendant drop if applicable",
          "Think about layering with other necklaces"
        ],
        icon: "Heart"
      }
    ]
  };

  const calculateRingSize = () => {
    const circumference = parseFloat(measurements?.fingerCircumference);
    if (circumference) {
      const closestSize = ringSizeChart?.reduce((prev, curr) => {
        return Math.abs(parseFloat(curr?.circumference) - circumference) < 
               Math.abs(parseFloat(prev?.circumference) - circumference) ? curr : prev;
      });
      setRecommendedSize(closestSize);
    }
  };

  const sizeOptions = ringSizeChart?.map(size => ({
    value: size?.us,
    label: `US ${size?.us} (UK ${size?.uk})`,
    description: `${size?.circumference} circumference`
  }));

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Interactive Size Guide</h3>
            <p className="text-sm text-muted-foreground mt-1">Find your perfect fit with our measurement tools</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Ruler" size={24} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
            >
              {category?.name}
            </Button>
          ))}
        </div>

        {/* Ring Size Guide */}
        {activeCategory === 'rings' && (
          <div className="space-y-8">
            {/* Measurement Input */}
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Find Your Ring Size</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Finger Circumference (mm)"
                  type="number"
                  placeholder="Enter measurement in mm"
                  value={measurements?.fingerCircumference}
                  onChange={(e) => setMeasurements(prev => ({ ...prev, fingerCircumference: e?.target?.value }))}
                  description="Measure around your finger where you'll wear the ring"
                />
                <div className="flex flex-col justify-end">
                  <Button
                    variant="default"
                    onClick={calculateRingSize}
                    disabled={!measurements?.fingerCircumference}
                    iconName="Calculator"
                    iconPosition="left"
                  >
                    Calculate Size
                  </Button>
                </div>
              </div>
              
              {recommendedSize && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                    <div>
                      <h5 className="font-semibold text-foreground">Recommended Size</h5>
                      <p className="text-sm text-muted-foreground">
                        US Size {recommendedSize?.us} (UK {recommendedSize?.uk}, EU {recommendedSize?.eu})
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Measurement Methods */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">How to Measure</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {measurementMethods?.rings?.map((method, index) => (
                  <div key={index} className="bg-secondary rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={method?.icon} size={20} className="text-primary" />
                      </div>
                      <h5 className="font-semibold text-foreground">{method?.title}</h5>
                    </div>
                    <ol className="space-y-2">
                      {method?.steps?.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-primary font-medium">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Chart */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Ring Size Chart</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">US Size</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">UK Size</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">EU Size</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Circumference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ringSizeChart?.map((size, index) => (
                      <tr key={index} className="border-t border-border hover:bg-secondary/50">
                        <td className="px-4 py-3 text-sm text-foreground font-medium">{size?.us}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{size?.uk}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{size?.eu}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{size?.circumference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Bracelet Size Guide */}
        {activeCategory === 'bracelets' && (
          <div className="space-y-8">
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Find Your Bracelet Size</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Wrist Circumference (inches)"
                  type="number"
                  step="0.1"
                  placeholder="Enter wrist measurement"
                  value={measurements?.wristSize}
                  onChange={(e) => setMeasurements(prev => ({ ...prev, wristSize: e?.target?.value }))}
                  description="Measure around your wrist bone"
                />
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-2">Recommended Bracelet Sizes:</p>
                    <ul className="space-y-1">
                      <li>• Snug fit: +0.5 inches</li>
                      <li>• Comfortable fit: +0.75 inches</li>
                      <li>• Loose fit: +1 inch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {measurementMethods?.bracelets?.map((method, index) => (
                <div key={index} className="bg-secondary rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={method?.icon} size={20} className="text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground">{method?.title}</h5>
                  </div>
                  <ol className="space-y-2">
                    {method?.steps?.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary font-medium">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Necklace Size Guide */}
        {activeCategory === 'necklaces' && (
          <div className="space-y-8">
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Necklace Length Guide</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-foreground mb-4">Standard Lengths</h5>
                  <div className="space-y-3">
                    {[
                      { length: '14-16"', name: 'Choker', description: 'Sits at the base of neck' },
                      { length: '18"', name: 'Princess', description: 'Most popular, sits at collarbone' },
                      { length: '20-24"', name: 'Matinee', description: 'Falls between collarbone and bust' },
                      { length: '28-36"', name: 'Opera', description: 'Falls at or below bust line' },
                      { length: '36"+', name: 'Rope', description: 'Very long, can be doubled' }
                    ]?.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <div>
                          <span className="font-medium text-foreground">{item?.name}</span>
                          <p className="text-sm text-muted-foreground">{item?.description}</p>
                        </div>
                        <span className="text-primary font-semibold">{item?.length}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Input
                    label="Neck Circumference (inches)"
                    type="number"
                    step="0.1"
                    placeholder="Enter neck measurement"
                    value={measurements?.neckSize}
                    onChange={(e) => setMeasurements(prev => ({ ...prev, neckSize: e?.target?.value }))}
                    description="Measure around your neck where you want the necklace to sit"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Objects */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Size Comparison Objects</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {comparisonObjects?.map((object, index) => (
              <div key={index} className="bg-secondary rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Circle" size={24} className="text-primary" />
                </div>
                <h5 className="font-medium text-foreground text-sm">{object?.name}</h5>
                <p className="text-xs text-primary font-semibold mt-1">{object?.size}</p>
                <p className="text-xs text-muted-foreground mt-1">{object?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={24} className="text-primary mt-1" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Pro Tips for Accurate Measurements</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Measure at the end of the day when fingers are largest</li>
                <li>• Consider the width of the ring - wider bands need larger sizes</li>
                <li>• Account for knuckle size when measuring ring fingers</li>
                <li>• For bracelets, consider if you prefer snug or loose fits</li>
                <li>• When in doubt, size up rather than down for comfort</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;