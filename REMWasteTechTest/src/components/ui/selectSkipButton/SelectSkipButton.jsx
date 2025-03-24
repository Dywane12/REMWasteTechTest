import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import {strings} from "../../../config/strings.js";
import {ArrowForwardIconStyles, SelectSkipButtonStyles} from "./SelectSkipButtonStyles.js";

const SelectSkipButton = ({isDisabled, selected}) => (
    <Button
        variant="contained"
        fullWidth
        sx={SelectSkipButtonStyles(selected, isDisabled)}
    >
        {selected ? strings.selected : strings.selectThisSkip}
        {!selected && <ArrowForwardIcon sx={ArrowForwardIconStyles} />}
    </Button>
)

export default SelectSkipButton;