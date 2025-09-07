import React from 'react';
import Header from '../../components/Header';
import ListingGrid from '../ListingGrid';
import { Stack } from '@mui/material';
import Footer from '../../components/Footer';


export default function Home({ location }) {
    return (
        <div style={{}}>
            <Header />

            <Stack width={"100%"} height={"100%"} sx={{background:"linear-gradient(135deg, #1E3A8A 0%, #9333EA 100%)"}} >
                <Stack  width={{ md: "85%", xs: "93%" }} direction={"row"} justifyContent={"center"} alignItems={"center"} margin={"auto"} marginTop={2} marginBottom={2}>
                    <video style={{borderRadius:"8px"}} src="http://chennai.shreenandini.in/web-assets/images/nandini.mp4" controls autoPlay muted loop width={"100%"} height={"100%"}></video>
                </Stack>

                <ListingGrid location={location} />


            </Stack>

            <Footer />
        </div>
    );
}