import React from 'react';
import StepTemplate from "../../templates/stepTemplate/StepTemplate.jsx";
import {strings} from "../../../config/strings.js";


function PaymentStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.paymentLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PaymentStep;