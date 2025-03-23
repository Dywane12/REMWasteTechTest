import React from 'react';
import StepTemplate from "../StepTemplate.jsx";
import {strings} from "../../strings/strings.js";


function PaymentStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.paymentLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PaymentStep;