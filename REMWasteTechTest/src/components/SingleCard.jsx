import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import SelectSkipButton from "./SelectSkipButton.jsx";
import HeavyWasteError from "./HeavyWasteError.jsx";
import AllowedOnRoadWarning from "./AllowedOnRoadWarning.jsx";
import {strings} from "../strings/strings.js";

function SingleCard({ size, hirePeriod, price, selected, onSelect, allowedOnRoad, allowsHeavyWaste }) {
    const isDisabled = !allowsHeavyWaste;

    return (
        <Card
            sx={{
                maxWidth: 400,
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                borderRadius: 2,
                boxShadow: 3,
                border: selected ? '2px solid #0037C1' : '2px solid #555',
                padding: 2,
                position: 'relative',
                '&:hover': {
                    borderColor: isDisabled ? '#555' : '#0037C1',
                    transition: '0.3s',
                },
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.6 : 1,
            }}
            onClick={!isDisabled ? onSelect : undefined}
        >
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={strings.imageURL}
                    alt="Container Yard"
                />
                <Chip
                    label={`${size} Yards`}
                    sx={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        backgroundColor: '#0037C1',
                        color: '#FFFFFF',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: 500,
                        fontSize: '1rem'
                    }}
                />
                {!allowedOnRoad ? <AllowedOnRoadWarning allowsHeavyWaste={allowsHeavyWaste}/> : null}
                {!allowsHeavyWaste ? <HeavyWasteError /> : null}
            </Box>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500}}>{`${size} ${strings.yardSkip}`}</Typography>
                <Typography variant="body2" color="gray" sx={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500}}>{`${hirePeriod} ${strings.dayHirePeriod}`}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', marginTop: 1 }}>
                    <Typography variant="h4" color="#0037C1" sx={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500}}>{`${strings.currency}${price}`}</Typography>
                    <Typography variant="body1" color="gray" sx={{ marginLeft: 1, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>{strings.perWeek}</Typography>
                </Box>
                <SelectSkipButton isDisabled={isDisabled} selected={selected} />
            </CardContent>
        </Card>
    );
}

export default SingleCard;