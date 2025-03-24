import {Box, Typography} from "@mui/material";
import React from "react";
import BackButton from "../backButton/BackButton.jsx";
import ContinueButton from "../continueButton/ContinueButton.jsx";
import {strings} from "../../../config/strings.js";
import {
    BluePriceTypographyStyles,
    PlusVATTypographyStyles,
    PopupBoxAnimationStyles,
    PopupBoxStyles,
    YardSizeTypographyStyles
} from "./PopupStyles.js";

const Popup = ({ skip, animationDirection, onNext, onBack }) => {
    return (
        <Box sx={PopupBoxAnimationStyles(animationDirection)}>
            <Box sx={PopupBoxStyles}>
                <Typography variant="h6" component="span" sx={YardSizeTypographyStyles}>
                    {skip.size} {strings.yardSkipPopup}
                    <Typography component="span" sx={BluePriceTypographyStyles}>
                        {strings.currency}{(skip.price_before_vat * (skip.hire_period_days / 7)).toFixed(2)}
                    </Typography>
                    <Typography component="span" sx={PlusVATTypographyStyles}>
                        {strings.plusVAT}
                    </Typography>
                </Typography>
                <Box>
                    <BackButton onBack={onBack} />
                    <ContinueButton onNext={onNext} />
                </Box>
            </Box>
        </Box>
    )
}

export default Popup;