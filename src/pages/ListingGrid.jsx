import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ListingCard from '../components/ListingCard';
import FiltersPanel from '../components/FiltersPanel';
import BottomCategories from '../components/BottomCategories';
import base from '../data/data'; // Mock data

export default function ListingGrid({ location }) {
  const [stateFilter, setStateFilter] = useState(location==='Jharkhand' || location=== "Delhi" || location==="Chennai" ? location.region : 'All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [page, setPage] = useState(1);

  // Filter logic
  let items = base.filter(item => {
    const matchState = stateFilter === 'All' || item.area === stateFilter;
    const matchCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchState && matchCategory;
  });

  const pageSize = 9;
  const paged = items.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Container sx={{ py: 2 }}>
      {/* Title */}
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1,color:"#fc05f8" }}>
        Explore Collections
      </Typography>

      {/* Filters */}
      <Box
        sx={{
          mb: 5,
          p: 2,
          display: 'flex',
          gap: 3,
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'end' },
          width: '98%',
          bgcolor: "rgba(0,0,0,.4)",
          borderRadius:"5px"
        }}
      >
        <BottomCategories
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <FiltersPanel
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
        />
      </Box>

      {/* Grid Items */}
      <Grid container spacing={3}>
        {paged.length > 0 ? (
          paged.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <ListingCard item={item} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mx: 'auto', my: 5 }}
          >
            No results found. Try changing filters.
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.max(1, Math.ceil(items.length / pageSize))}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
      </Stack>
    </Container>
  );
}
