import React from "react";
import { Box, Container, Grid, Stack, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#111827",
        color: "#f9fafb",
        pt: 6,
        py: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              CallConnect
            </Typography>
            <Typography variant="body2" sx={{ color: "#d1d5db" }}>
              Explore premium, local & elite profiles across Delhi, Chennai and Jharkhand.  
              Choose your collection with trust and comfort.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Quick Links
            </Typography>
            <Stack spacing={0.7}>
              <Link href="#" color="inherit" underline="hover">
                Explore Collections
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Desi Girls
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Russian Models
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Elite Profiles
              </Link>
            </Stack>
          </Grid>

          {/* Contact / Social */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid #374151",
            mt: 3,
            pt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <CopyrightIcon fontSize="small" />
            <Typography variant="body2">
              {new Date().getFullYear()} CallConnect. All rights reserved.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: { xs: 1, sm: 0 } }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms & Conditions
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
