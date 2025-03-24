import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Button} from "@mui/material";
import React from "react";
import {strings} from "../../../config/strings.js";
import {ArrowForwardIconStyles, ContinueButtonStyles} from "./ContinueButtonStyles.js";

const ContinueButton = ({onNext}) => (
        <Button variant="contained"
                onClick={onNext}
                sx={ContinueButtonStyles}>
            {strings.continueButton}
            <ArrowForwardIcon sx={ArrowForwardIconStyles} />
        </Button>
)

export default ContinueButton;