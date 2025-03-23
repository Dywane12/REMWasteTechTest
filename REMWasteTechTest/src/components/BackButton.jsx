import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button} from "@mui/material";
import React from "react";

const BackButton = ({onBack}) => (
    <Button variant="contained"
            onClick={onBack}
            sx={{
                backgroundColor: '#2A2A2A',
                marginX: '0.5rem',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#3A3A3A',
                },
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                fontSize: '1rem'
            }}>
        <ArrowBackIcon sx={{ marginRight: 1, fontSize: '1rem' }} />
        Back
    </Button>
)

export default BackButton;