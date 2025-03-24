import React, {useState} from 'react';
import Navbar from "../../ui/stepper/Navbar.jsx";
import {Box, Typography} from "@mui/material";
import {strings} from "../../../config/strings.js";
import CardList from "../../ui/cardList/CardList.jsx";
import {SelectSkipBoxStyles, SubtitleStyles, TitleStyles} from "./SelectSkipStepStyles.js";



function SelectSkipStep({ onNext, onBack }) {

    return (
        <Box sx={SelectSkipBoxStyles}>
            <Typography variant='h5' sx={TitleStyles}>
                {strings.title}
            </Typography>
            <Typography variant='subtitle1' sx={SubtitleStyles}>
                {strings.subtitle}
            </Typography>
            <CardList onNext={onNext} onBack={onBack} />
        </Box>
    );
}

export default SelectSkipStep;