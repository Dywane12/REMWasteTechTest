import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button} from "@mui/material";
import React from "react";
import {strings} from "../../../config/strings.js";
import {ArrowBackwardIconStyles, BackButtonStyles} from "./BackButtonStyles.js";

const BackButton = ({onBack}) => (
    <Button variant="contained"
            onClick={onBack}
            sx={BackButtonStyles}>
        <ArrowBackIcon sx={ArrowBackwardIconStyles} />
        {strings.backButton}
    </Button>
)

export default BackButton;