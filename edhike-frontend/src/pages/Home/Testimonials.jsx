// src/components/Testimonials.jsx
import React from "react";
import { Box, Container, Typography, Button, Card, CardContent, Stack, Grid } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { FadeInUp, TextReveal } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

// Updated with shorter quotes and compact layout
const BASE_TESTIMONIALS = [
  {
    name: "Amit Patel",
    role: "Data Analyst → Senior Data Scientist",
    quote: "Practical projects and mentor guidance helped me secure a role with 80% hike.",
    before: "₹8 LPA",
    after: "₹14.5 LPA",
    avatar: "/Images/Testimonials/amit.jpg"
  },
  {
    name: "Sneha Rao",
    role: "Marketing Executive → Digital Lead",
    quote: "Real campaigns and interview prep transformed my career trajectory.",
    before: "₹5.5 LPA",
    after: "₹10 LPA",
    avatar: "/Images/Testimonials/sneha.jpg"
  },
  {
    name: "Karan Mehta",
    role: "Developer → Tech Lead",
    quote: "Peer reviews and portfolio building gave me the edge in interviews.",
    before: "₹9 LPA",
    after: "₹18 LPA",
    avatar: "/Images/Testimonials/karan.jpg"
  },
  {
    name: "Riya Gupta",
    role: "Business Analyst → Strategy Consultant",
    quote: "Top-tier case studies shifted my thinking — now consulting globally.",
    before: "₹7 LPA",
    after: "₹16 LPA",
    avatar: "/Images/Testimonials/riya.jpg"
  },
  {
    name: "Arjun Singh",
    role: "HR Specialist → VP People Ops",
    quote: "Leadership modules accelerated my growth beyond expectations.",
    before: "₹11 LPA",
    after: "₹24 LPA",
    avatar: "/Images/Testimonials/arjun.jpg"
  },
];

const TESTIMONIALS = [...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS];

export default function Testimonials() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8, lg: 12 }, bgcolor: "white", overflow: "hidden" }}>
      <Container maxWidth="xl">
        {/* Heading */}
        <FadeInUp delay={0.1}>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 10 } }}>
            <Typography variant="subtitle1" sx={{ color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "0.7rem", md: "0.875rem" } }}>
              Success Stories
            </Typography>
            <FadeInUp delay={0.2}>
            <Typography
              variant="h2"
              sx={{
                mt: 1,
                fontWeight: 800,
                fontSize: { xs: "1.2rem", md: "1.8rem", lg: "2rem" },
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real People.<br />
              Real Growth.
            </Typography>
            </FadeInUp>
            <FadeInUp delay={0.3}>
            <Typography variant="h6" sx={{ mt: 1, color: "text.secondary", maxWidth: 800, mx: "auto", fontSize: { xs: "0.7rem", md: "1rem" } }}>
              Working professionals who leveled up their careers with EdHike.
            </Typography>
            </FadeInUp>
          </Box>
        </FadeInUp>

        {/* Compact Infinite Carousel */}
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, bgcolor: "linear-gradient(to right, white, transparent)", zIndex: 10, pointerEvents: "none" }} />
          <Box sx={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, bgcolor: "linear-gradient(to left, white, transparent)", zIndex: 10, pointerEvents: "none" }} />

          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                animation: "scroll 20s linear infinite",
                "&:hover": { animationPlayState: "paused" },
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <Box
                  key={`${t.name}-${i}`}
                  sx={{
                    flexShrink: 0,
                    width: { xs: 250, sm: 320 },
                  }}
                >
                  <Card
                    sx={{
                      height: "360",
                      bgcolor: "Lightgray",
                      borderRadius: 4,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                      border: "1px solid #eee",
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.4s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(88,41,167,0.12)",
                        borderColor: PURPLE,
                      },
                    }}
                  >
                    <CardContent sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      pb: 1,
                    }}>
                      <Box sx={{ mb: 1 }}>
                        {/* Avatar centered in card */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center", // ✅ center avatar horizontally
                            mb: 1,
                          }}
                        >
                          <Box
                            component="img"
                            src={t.avatar}
                            alt={t.name}
                            sx={{
                              width: 64,
                              height: 64,
                              borderRadius: "50%",
                              objectFit: "cover",
                              display: "block",
                              border: "3px solid white",
                            }}
                          />

                        </Box>

                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{
                            textAlign: "center",
                            mt: 1,
                            color: PURPLE,
                            fontSize: "1rem",
                          }}
                        >
                          {t.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textAlign: "center",
                            fontSize: "0.7rem",
                          }}
                        >
                          {t.role}
                        </Typography>
                      </Box>


                      <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6, textAlign: "center", fontSize: "0.8rem" }}>
                        "{t.quote}"
                      </Typography>
                    </CardContent>

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                      <Box textAlign="center">
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.7rem" }}>Before</Typography>
                        <Typography variant="h6" fontWeight={600} color="#666">
                          {t.before}
                        </Typography>
                      </Box>
                      <ArrowRight sx={{ color: RED, fontSize: 24 }} />
                      <Box textAlign="center">
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.7rem" }}>After</Typography>
                        <Typography variant="h6" fontWeight={700} sx={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          {t.after}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}