import React from 'react';
import StepTemplate from "../StepTemplate.jsx";
import {strings} from "../../strings/strings.js";


function ChooseDateStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.chooseDateLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default ChooseDateStep;