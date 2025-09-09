import React from 'react';
import Header from '../../components/Header';
import ListingGrid from '../ListingGrid';
import { Box, Stack } from '@mui/material';
import Footer from '../../components/Footer';
import Blur from '../../components/Blur';


export default function Home({ location }) {
    return (
        <div style={{}}>
            <Header />

            <Stack width={"100%"} height={"100%"} sx={{ position: "relative", bgcolor: "rgba(0,0,0,.6)" }} >
                <Stack width={{ md: "85%", xs: "93%" }} direction={"row"} justifyContent={"center"} alignItems={"center"} margin={"auto"} marginTop={2} marginBottom={2}>
                    <video style={{ borderRadius: "8px" }} src="http://chennai.shreenandini.in/web-assets/images/nandini.mp4" controls autoPlay muted loop width={"100%"} height={"100%"}></video>
                </Stack>

                <ListingGrid location={location} />

                <Box
                    position="fixed" // 
                    top={0}
                    left={0}
                    width="100vw"
                    height="100vh"
                    zIndex={-1}
                    sx={{
                        filter: "blur(50px)", // बहुत smooth blur
                        overflow: "hidden",
                    }}
                >
                    <Blur />
                </Box>

            </Stack>

            <Footer />
        </div>
    );
}