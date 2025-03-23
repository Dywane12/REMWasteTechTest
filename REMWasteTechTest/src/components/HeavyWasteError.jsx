import {Box, Typography} from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import React from "react";
import {strings} from "../strings/strings.js";

const HeavyWasteError = () => (
    <Box
        sx={{
            width: '60%',
            position: 'absolute',
            left: '1rem',
            bottom: '0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '0.5rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <WarningAmberOutlinedIcon sx={{ color: '#E84242', marginRight: '0.5rem', fontSize: '1rem' }} />
        <Typography variant="body2" color="#E84242" sx={{ fontSize: '0.75rem', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
            {strings.heavyWasteError}
        </Typography>
    </Box>
)

export default HeavyWasteError;