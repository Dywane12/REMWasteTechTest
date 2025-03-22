import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard'; // Make sure the path is correct
import { Grid, CircularProgress, Box } from '@mui/material';

function CardList() {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
            <Grid container spacing={3} justifyContent="center" maxWidth="lg">
                {skips.map((skip, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <SingleCard
                            image={skip.imageUrl} // Assuming the API provides an image URL
                            size={skip.size} // Assuming the API provides the size
                            hirePeriod={skip.hire_period_days} // Assuming the API provides the hire period
                            price={skip.price_before_vat} // Assuming the API provides the price
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CardList;