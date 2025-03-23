import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import { Grid, CircularProgress, Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CardList({ onNext, onBack }) {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [animationDirection, setAnimationDirection] = useState('up');

    useEffect(() => {
        const fetchSkips = async () => {
            try {
                const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
                setSkips(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchSkips();
    }, []);

    const handleCardSelect = (index) => {
        if (selectedCardIndex === index) {
            setAnimationDirection('down');
            setTimeout(() => setSelectedCardIndex(null), 300);
        } else {
            setAnimationDirection('up');
            setSelectedCardIndex(index);
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center" maxWidth="lg">
                {skips.map((skip, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SingleCard
                            image={skip.imageUrl}
                            size={skip.size}
                            hirePeriod={skip.hire_period_days}
                            price={skip.price_before_vat}
                            selected={selectedCardIndex === index}
                            onSelect={() => handleCardSelect(index)}
                            allowedOnRoad={skip.allowed_on_road}
                            allowsHeavyWaste={skip.allows_heavy_waste}
                        />
                    </Grid>
                ))}
            </Grid>
            {selectedCardIndex !== null && (
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
                            {skips[selectedCardIndex].size} Yard Skip -
                            <Typography component="span" sx={{ color: '#0037C1', fontWeight: 600, marginLeft: '0.25rem', fontSize: '1.75rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
                                £{(skips[selectedCardIndex].price_before_vat * (skips[selectedCardIndex].hire_period_days / 7)).toFixed(2)}
                            </Typography>
                            <Typography component="span" sx={{ fontSize: '1rem', marginLeft: '0.25rem', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
                                + VAT
                            </Typography>
                        </Typography>
                        <Box>
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
                                Continue
                                <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default CardList;