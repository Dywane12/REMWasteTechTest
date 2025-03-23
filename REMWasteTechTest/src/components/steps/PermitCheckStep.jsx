import React from 'react';
import StepTemplate from "../StepTemplate.jsx";


function PermitCheckStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName="Permit Check" onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PermitCheckStep;