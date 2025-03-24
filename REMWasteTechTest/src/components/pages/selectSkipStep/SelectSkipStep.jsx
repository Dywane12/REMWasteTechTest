import React, {useState} from 'react';
import Navbar from "../../ui/stepper/Navbar.jsx";
import {Typography} from "@mui/material";
import {strings} from "../../../config/strings.js";
import CardList from "../../ui/cardList/CardList.jsx";
import {SubtitleStyles, TitleStyles} from "./SelectSkipStepStyles.js";



function SelectSkipStep({ onNext, onBack }) {

    return (
        <>
            <Typography variant='h5' sx={TitleStyles}>
                {strings.title}
            </Typography>
            <Typography variant='subtitle1' sx={SubtitleStyles}>
                {strings.subtitle}
            </Typography>
            <CardList onNext={onNext} onBack={onBack} />
        </>
    );
}

export default SelectSkipStep;