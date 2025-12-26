import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Stack,
    Chip,
} from "@mui/material";
import {
    CheckCircle,
    Cancel,
    Recommend,
} from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const FEATURES = [
    { label: "UGC / AICTE Recognition", online: true, distance: true, regular: true },
    { label: "Flexible Learning", online: true, distance: true, regular: false },
    { label: "Live + Recorded Classes", online: true, distance: false, regular: false },
    { label: "Work While Studying", online: true, distance: true, regular: false },
    { label: "Placement Support", online: true, distance: false, regular: true },
    { label: "Industry-Relevant Curriculum", online: true, distance: false, regular: true },
    { label: "Global Exposure", online: true, distance: false, regular: true },
    { label: "Cost Effective", online: true, distance: true, regular: false },
];

const CARDS = [
    { key: "online", title: "Online MBA", highlight: true },
    { key: "distance", title: "Distance MBA" },
    { key: "regular", title: "Regular MBA" },
];

const Icon = ({ value, small }) =>
    value ? (
        <CheckCircle sx={{ color: "#16a34a", fontSize: small ? 22 : 26 }} />
    ) : (
        <Cancel sx={{ color: "#dc2626", fontSize: small ? 22 : 26 }} />
    );

export default function Comparison() {
    return (
        <Box component="section" sx={{ py: { xs: 4, md: 5, lg: 6 }, mt: {xs: -2, md: -3, lg: -4}, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                {/* TITLE */}
                <FadeInUp>
                    <Typography
                        align="center"
                        sx={{
                            fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" },
                            fontWeight: 900,
                            mb: 0,
                            background: GRADIENT,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Online vs Distance vs Regular MBA
                    </Typography>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: { xs: 2, md: 4, lg: 5 },
                            fontSize: { xs: "0.85rem", md: "1rem",  lg: "1rem" },
                            maxWidth: 820,
                            mx: "auto",
                        }}
                    >
                        Compare learning formats and discover why Online MBA is the smartest
                        choice for ambitious working professionals.
                    </Typography>
                </FadeInUp>

                {/* ================= DESKTOP ================= */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignItems="stretch"
                    >

                        {CARDS.map((type) => (
                            <Grid item md={4} key={type.key}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 6,
                                        overflow: "hidden",
                                        position: "relative",
                                        boxShadow: type.highlight
                                            ? "0 20px 45px rgba(227,30,36,0.25)"
                                            : "0 10px 30px rgba(0,0,0,0.08)",
                                        transition: "0.35s ease",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow: "0 25px 55px rgba(227,30,36,0.28)",
                                        },
                                    }}
                                >
                                    {/* STICKY RIBBON */}
                                    {type.highlight && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 14,
                                                right: -36,
                                                transform: "rotate(45deg)",
                                                bgcolor: RED,
                                                color: "#fff",
                                                px: 6,
                                                py: 0.8,
                                                fontSize: "0.5rem",
                                                fontWeight: 800,
                                                zIndex: 2,
                                            }}
                                        >
                                            RECOMMENDED
                                        </Box>
                                    )}

                                    {/* HEADER */}
                                    <Box
                                        sx={{
                                            px: 3,
                                            py: 3,
                                            fontSize: { xs: "1rem", md: "1rem", lg: "1.1rem" },
                                            fontWeight: 900,
                                            color: type.highlight ? "#fff" : "#111",
                                            background: type.highlight ? GRADIENT : "#f4f4f6",
                                        }}
                                    >
                                        {type.title}
                                    </Box>

                                    {/* BODY */}
                                    <Stack spacing={2} sx={{ p: 2 }}>
                                        {FEATURES.map((row) => (
                                            <Stack
                                                key={row.label}
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Typography sx={{ fontSize: "0.9rem" }}>
                                                    {row.label}
                                                </Typography>
                                                <Icon value={row[type.key]} />
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ================= MOBILE SLIDER ================= */}
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            overflowX: "auto",
                            scrollSnapType: "x mandatory",
                            px: 1,
                            pb: 1,
                            "&::-webkit-scrollbar": { display: "none" },
                        }}
                    >
                        {CARDS.map((type) => (
                            <Card
                                key={type.key}
                                sx={{
                                    minWidth: "85%",
                                    scrollSnapAlign: "center",
                                    borderRadius: 5,
                                    position: "relative",
                                    flexShrink: 0,
                                    boxShadow: type.highlight
                                        ? "0 12px 30px rgba(227,30,36,0.25)"
                                        : "0 6px 18px rgba(0,0,0,0.12)",
                                }}
                            >
                                {/* STICKY RIBBON */}
                                {type.highlight && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 10,
                                            right: -30,
                                            transform: "rotate(45deg)",
                                            bgcolor: RED,
                                            color: "#fff",
                                            px: 4,
                                            py: 0.6,
                                            fontSize: "0.65rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        BEST
                                    </Box>
                                )}

                                {/* MOBILE HEADER */}
                                <Box
                                    sx={{
                                        px: 2.5,
                                        py: 2,
                                        fontWeight: 900,
                                        fontSize: "1rem",
                                        color: type.highlight ? RED : PURPLE,
                                    }}
                                >
                                    {type.title}
                                </Box>

                                {/* MOBILE BODY */}
                                <Stack spacing={1.2} sx={{ px: 2.2, pb: 2 }}>
                                    {FEATURES.map((row) => (
                                        <Stack
                                            key={row.label}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Typography sx={{ fontSize: "0.75rem" }}>
                                                {row.label}
                                            </Typography>
                                            <Icon value={row[type.key]} small />
                                        </Stack>
                                    ))}
                                </Stack>
                            </Card>
                        ))}
                    </Box>

                    <Typography
                        align="center"
                        sx={{ fontSize: "0.75rem", color: "text.secondary", mt: 1 }}
                    >
                        Swipe to compare →
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
