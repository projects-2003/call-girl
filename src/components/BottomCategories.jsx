import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PublicIcon from '@mui/icons-material/Public';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function BottomCategories({ categoryFilter, setCategoryFilter }) {
  return (
    <Box sx={{ borderRadius: 2, width: "100%" }}>
      <Container>
        <Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <Button
              variant={categoryFilter === 'russian' ? 'contained' : 'outlined'}
              color={categoryFilter === 'russian' ? 'primary' : 'inherit'}
              startIcon={<PublicIcon />}
              sx={{
                flex: 1,
                borderColor: categoryFilter === 'russian' ? 'primary.main' : '#fc05f8', // border change
                color: categoryFilter === 'russian' ? 'white' : 'white',               // text color change
                '&:hover': {
                  borderColor: 'primary.main',
                  color: categoryFilter === 'russian' ? 'white' : 'primary.main'
                }
              }}
              onClick={() => setCategoryFilter('russian')}
            >
              Russian Girl
            </Button>

            <Button
              color={categoryFilter === 'desi' ? 'primary' : ''}
              variant={categoryFilter === 'desi' ? 'contained' : 'outlined'}
              startIcon={<EmojiPeopleIcon />}
              sx={{
                flex: 1,
                borderColor: categoryFilter === 'desi' ? 'primary.main' : '#fc05f8', // border change
                color: categoryFilter === 'desi' ? 'white' : 'white',               // text color change
                '&:hover': {
                  borderColor: 'primary.main',
                  color: categoryFilter === 'desi' ? 'white' : '#fc05f8'
                }
              }}
              onClick={() => setCategoryFilter('desi')}
            >
              Desi Girl
            </Button>
            <Button
              color={categoryFilter === 'elite' ? 'primary' : 'white'}
              variant={categoryFilter === 'elite' ? 'contained' : 'outlined'}
              startIcon={<StarBorderIcon />}
              sx={{
                flex: 1,
                borderColor: categoryFilter === 'elite' ? 'primary.main' : '#fc05f8', // border change
                color: categoryFilter === 'elite' ? 'white' : 'white',               // text color change
                '&:hover': {
                  borderColor: 'primary.main',
                  color: categoryFilter === 'elite' ? 'white' : 'primary.main'
                }
              }}
              onClick={() => setCategoryFilter('elite')}
            >
              High Profile
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
