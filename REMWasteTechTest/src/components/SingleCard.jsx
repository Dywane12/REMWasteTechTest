import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SingleCard({ size, hirePeriod, price }) {
    const [selected, setSelected] = useState(false);

    const handleCardClick = () => {
        setSelected(!selected);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                borderRadius: 2,
                boxShadow: 3,
                border: selected ? '2px solid #1976d2' : '2px solid #555',
                padding: 2,
                position: 'relative',
                '&:hover': {
                    borderColor: '#1976d2',
                },
                cursor: 'pointer',
            }}
            onClick={handleCardClick}
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
                        right: '1.5rem',
                        top: '1.5rem',
                        backgroundColor: '#1976d2',
                        color: '#FFFFFF',
                    }}
                />
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
                        backgroundColor: selected ? '#1976d2' : '#333',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: selected ? '#1976d2' : '#444',
                        },
                    }}
                >
                    {selected ? 'Selected' : 'Select This Skip'}
                    {!selected && <ArrowForwardIcon sx={{ marginLeft: 1 }} />}
                </Button>
            </CardContent>
        </Card>
    );
}

export default SingleCard;