import React from 'react';
import StepTemplate from "../StepTemplate.jsx";


function PaymentStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName="Payment" onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PaymentStep;