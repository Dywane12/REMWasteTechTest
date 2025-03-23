import {Box, Typography} from "@mui/material";
import React from "react";
import BackButton from "./BackButton.jsx";
import ContinueButton from "./ContinueButton.jsx";
import {strings} from "../strings/strings.js";

const Popup = ({ skip, animationDirection, onNext, onBack }) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                padding: 2,
                boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
                animation: `${animationDirection === 'up' ? 'slideUp' : 'slideDown'} 0.3s ease-out`,
                '@keyframes slideUp': {
                    from: { transform: 'translateY(100%)' },
                    to: { transform: 'translateY(0)' },
                },
                '@keyframes slideDown': {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(100%)' },
                },

            }}
        >
            <Box
                sx={{
                    maxWidth: '75rem',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingX: 4,
                    '@media (max-width: 1024px)': {
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        paddingX: 2,
                        '& > div': {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 1,
                        },
                        '& button': {
                            flex: 1,
                            marginX: 1,
                        },
                    },
                }}
            >
                <Typography variant="h6" component="span" sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
                    {skip.size} {strings.yardSkipPopup}
                    <Typography component="span" sx={{ color: '#0037C1', fontWeight: 600,marginLeft: '0.25rem', fontSize: '1.75rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {strings.currency}{(skip.price_before_vat * (skip.hire_period_days / 7)).toFixed(2)}
                    </Typography>
                    <Typography component="span" sx={{ fontSize: '1rem', marginLeft: '0.25rem', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
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