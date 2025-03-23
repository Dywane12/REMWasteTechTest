import React from 'react';
import StepTemplate from "../StepTemplate.jsx";


function PostcodeStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName="Postcode" onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PostcodeStep;