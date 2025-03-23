import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import {strings} from "../strings/strings.js";

const SelectSkipButton = ({isDisabled, selected}) => (
    <Button
        variant="contained"
        fullWidth
        sx={{
            marginTop: 2,
            padding: '0.75rem',
            fontSize: '1rem',
            backgroundColor: selected ? '#0037C1' : '#333',
            color: isDisabled ? '#888' : '#fff',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: selected ? '#002DA1' : '#444',
            },
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500
        }}
    >
        {selected ? strings.selected : strings.selectThisSkip}
        {!selected && <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />}
    </Button>
)

export default SelectSkipButton;