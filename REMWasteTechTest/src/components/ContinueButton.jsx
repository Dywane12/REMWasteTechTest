import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Button} from "@mui/material";
import React from "react";
import {strings} from "../strings/strings.js";

const ContinueButton = ({onNext}) => (
        <Button variant="contained"
                onClick={onNext}
                sx={{
                    backgroundColor: '#0037C1',
                    marginX: '0.5rem',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#002DA1',
                    },
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '1rem',
                }}>
            {strings.continueButton}
            <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />
        </Button>
)

export default ContinueButton;