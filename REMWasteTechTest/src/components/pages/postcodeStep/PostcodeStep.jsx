import React from 'react';
import StepTemplate from "../../templates/stepTemplate/StepTemplate.jsx";
import {strings} from "../../../config/strings.js";


function PostcodeStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.postcodeLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PostcodeStep;