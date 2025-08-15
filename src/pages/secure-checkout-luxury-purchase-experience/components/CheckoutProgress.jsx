import React from 'react';
import Icon from '../../../components/AppIcon';

const CheckoutProgress = ({ currentStep, steps }) => {
  return (
    <div className="w-full bg-card rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                index < currentStep 
                  ? 'bg-primary text-primary-foreground' 
                  : index === currentStep 
                    ? 'bg-primary/20 text-primary border-2 border-primary' :'bg-muted text-muted-foreground'
              }`}>
                {index < currentStep ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-2 font-medium ${
                index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step?.name}
              </span>
            </div>
            {index < steps?.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                index < currentStep ? 'bg-primary' : 'bg-muted'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;