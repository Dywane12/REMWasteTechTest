import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

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
                    image='https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800'
                    alt="Container Yard"
                />
                <Chip
                    label={`${size} Yards`}
                    sx={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        backgroundColor: '#0037C1',
                        fontWeight: 600,
                        color: '#FFFFFF',
                    }}
                />
                {!allowedOnRoad && (
                    <Box
                        sx={{
                            width: '60%',
                            position: 'absolute',
                            left: '1rem',
                            bottom: allowsHeavyWaste ? '0.75rem' : '3.25rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <WarningAmberOutlinedIcon sx={{ color: '#E4AF07', marginRight: '0.5rem', fontSize: '1rem' }} />
                        <Typography variant="body2" color="#E4AF07" sx={{ fontSize: '0.75rem' }}>
                            Private Property Only
                        </Typography>
                    </Box>
                )}
                {!allowsHeavyWaste && (
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
                        <Typography variant="body2" color="#E84242" sx={{ fontSize: '0.75rem' }}>
                            Not Suitable for Heavy Waste
                        </Typography>
                    </Box>
                )}
            </Box>
            <CardContent>
                <Typography variant="h6" gutterBottom>{`${size} Yard Skip`}</Typography>
                <Typography variant="body2" color="gray">{`${hirePeriod} day hire period`}</Typography>
                <Typography variant="h5" color="#1976d2" sx={{ marginTop: 1 }}>{`£${price} per week`}</Typography>
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
                    }}
                >
                    {selected ? 'Selected' : 'Select This Skip'}
                    {!selected && <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />}
                </Button>
            </CardContent>
        </Card>
    );
}

export default SingleCard;