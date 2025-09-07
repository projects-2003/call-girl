import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Chip,
  CardActions,
  Button,
  Divider,
  Box,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ListingCard({ item }) {
  return (
    <Card
      sx={{
    borderRadius: 3,
    boxShadow: 6,
    bgcolor: "transparent",
    overflow: "hidden",
    transition: "0.3s",
    width: { xs: "100%", md: 360 }, 
    mx: "auto",                     
    "&:hover": { transform: "translateY(-6px)", boxShadow: 12 },
  }}
    >
      {/* Image with Hover Zoom */}
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="350px"
          width={"300px"}
          image={item.img}
          alt={item.name}
          sx={{
            objectFit: "cover",
            transition: "0.5s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      </Box>

      <CardContent>
        {/* Top Row: Avatar + Name + Price */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={item.img} sx={{ width: 50, height: 50 }} />
            <div>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" ,color:"#fc05f8"}}>
                {item.name}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={0.5}>
                <RoomIcon sx={{ fontSize: 16, color: "gray" }} />
                <Typography variant="body2" color="white">
                  {item.area}
                </Typography>
              </Stack>

            </div>
          </Stack>
          <Chip
            label={`₹${item.price}`}
            sx={{
              fontWeight: 600,
              fontSize: "0.9rem",
              bgcolor: "linear-gradient(135deg, #2563EB, #9333EA)",
              color: "#fff",
            }}
          />
        </Stack>

        {/* Rating + Duration */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon sx={{ color: "#16fc05" }} />
            <StarIcon sx={{ color: "#16fc05" }} />
            <Typography color="white" variant="body2" fontWeight={"700"}>{item.rating}.0</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <AccessTimeIcon sx={{ fontSize: 16, color: "gray" }} />
            <Typography variant="body2" color="orange">
              {item.duration
                ? ` ${item.duration} hours`
                : "1 Hours"}
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 1.5,bgcolor:"white" }} />

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.5,color:"white" }}
        >
          {item.description ||
            "No description available. Add more details about this listing here."}
        </Typography>
      </CardContent>

      {/* Buttons */}
      <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
        <Button
        href={`tel:${882513396}`}
          sx={{
            fontSize: ".8rem",
            borderRadius: 2,
            background: "linear-gradient(135deg, #2563EB, #9333EA)",
            color: "#fff",
            "&:hover": { opacity: 0.9 },
          }}
          startIcon={<PhoneIcon />}
          fullWidth
        >
          Call
        </Button>
        <Button
         href={`https://wa.me/${8825133961}`} 
          sx={{
            fontSize: ".8rem",
            borderRadius: 2,
            background: "linear-gradient(135deg, #10B981, #14B8A6)",
            color: "#fff",
            "&:hover": { opacity: 0.9 },
          }}
          startIcon={<WhatsAppIcon />}
          fullWidth
        >
          WhatsApp
        </Button>
        <Button variant="text" color="error" startIcon={<FavoriteBorderIcon />} />
      </CardActions>
    </Card>
  );
}
