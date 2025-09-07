import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../DB/firebase";

export default function Header({ user }) {
    const [toggle, setToggle] = useState(false);
    const nav = useNavigate();

    // Common menu items
    const commonMenu = [
        { label: "Home", path: "/", icon: <HomeIcon /> },
        { label: "About", path: "/about", icon: <InfoIcon /> },
    ];

    // Menu for logged-in user
    const userMenu = [
        { label: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
        { label: "My Bookings", path: "/bookings", icon: <BookOnlineIcon /> },
    ];

    const NavLogo = (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: "linear-gradient(135deg,#fb7185,#60a5fa)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                }}
            >
                HL
            </Box>
            <Typography
                sx={{ fontWeight: 800, color: "#fc05f8" }}
                variant="h6"
            >
                HeartLink
            </Typography>
        </Box>
    )

    return (
        <>
            <AppBar
                position="sticky"
                elevation={1}
                sx={{
                    background: "linear-gradient(135deg, #1E3A8A 0%, #9333EA 100%)",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ display: "flex", gap: 2 }}>
                    {/* Logo */}

{NavLogo}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Buttons */}
                    {user ? (
                        <Button
                            variant="contained"
                            sx={{ display: { xs: "none", md: "flex" } }}
                            startIcon={<LogoutIcon />}
                            onClick={() => signOut(auth)}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            sx={{ display: { xs: "none", md: "flex" } }}
                            startIcon={<LoginIcon />}
                            onClick={() => nav("/login")}
                        >
                            Login
                        </Button>
                    )}

                    {/* Mobile Toggle Button */}
                    <IconButton
                        onClick={() => setToggle(true)}
                        edge="start"
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon sx={{ color: "orange" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer (Top) */}
            <Drawer
                anchor="top"
                open={toggle}
                onClose={() => setToggle(false)}
                PaperProps={{
                    sx: {
                        background: "linear-gradient(180deg, #1E3A8A 0%, #9333EA 100%)",
                        color: "white",
                    },
                }}
            >
                <Box sx={{ width: "100vw", p: 2 }}>
                    {/* Header inside drawer */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        {NavLogo}
                        <IconButton onClick={() => setToggle(false)}>
                            <CloseIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                    {/* Common Menu */}
                    <List>
                        {commonMenu.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        nav(item.path);
                                        setToggle(false);
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "white" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    {/* User-specific menu */}
                    {user && (
                        <>
                            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
                            <List>
                                {userMenu.map((item) => (
                                    <ListItem key={item.label} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                nav(item.path);
                                                setToggle(false);
                                            }}
                                        >
                                            <ListItemIcon sx={{ color: "white" }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.label} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}

                    {/* Auth Button */}
                    <Box sx={{ mt: 2 }}>
                        {user ? (
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<LogoutIcon />}
                                onClick={() => {
                                    signOut(auth);
                                    setToggle(false);
                                }}
                                sx={{ backgroundColor: "#ef4444" }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<LoginIcon />}
                                onClick={() => {
                                    nav("/login");
                                    setToggle(false);
                                }}
                                sx={{
                                    backgroundColor: "#22c55e",
                                    "&:hover": { backgroundColor: "#16a34a" },
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
