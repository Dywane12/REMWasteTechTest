import React, {useState} from 'react';
import Navbar from "../Navbar.jsx";
import {Typography} from "@mui/material";
import {strings} from "../../strings/strings.js";
import CardList from "../CardList.jsx";



function SelectSkipStep({ onNext, onBack }) {

    return (
        <>
            <Typography variant='h5' sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 'bold' }}>
                {strings.title}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, color: '#969CA8', padding: '1rem', fontSize: '1rem' }}>
                {strings.subtitle}
            </Typography>
            <CardList onNext={onNext} onBack={onBack} />
        </>
    );
}

export default SelectSkipStep;