// src/components/ComparisonTool.jsx
import React from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";
import { FadeInUp, ScaleIn } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function ComparisonTool() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "white", mt:-12, mb: -5 }}>
      <Container maxWidth="sm">
        {/* Compact Heading */}
        <FadeInUp >
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: RED,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: { xs: "0.7rem", md: "0.875rem" },
              }}
            >
              Smart Decision Tool
            </Typography>

            <FadeInUp delay={0.2}>
            <Typography
              variant="h4"
              sx={{
                mt: { xs: 1, md: 1.5 },
                mb: { xs: 1.5, md: 2 },
                fontWeight: 900,
                fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
                lineHeight: 1.2,
              }}
            >
              
              <Box component="span" sx={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
               Compare Programs Head-to-Head
              </Box>
            </Typography>
            </FadeInUp>

            <FadeInUp delay={0.2}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.7rem", md: "1rem" },
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Find the perfect program in seconds.
            </Typography>
            </FadeInUp>
          </Box>
        </FadeInUp>

        {/* Very Small Card */}
        <FadeInUp delay={0.2}>
          <ScaleIn delay={0.2}>
            <Box sx={{ maxWidth: { xs: 200, md: 250, lg:300 }, mx: "auto" }}>
              <Card
                component="a"
                href="https://edhike-form.vercel.app/"
                rel="noopener noreferrer"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  bgcolor: "white",
                  borderRadius: 4,
                  p: { xs: 1, md: 2.5 }, 
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                  border: "2px solid #eee",
                  textAlign: "center",
                  transition: "all 0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 60px rgba(88,41,167,0.15)",
                    borderColor: PURPLE,
                  },
                }}
              >
                <CompareArrows
                  sx={{
                    fontSize: { xs: 40, md: 50 },
                    color: RED,
                    mb: 1,
                    transition: "color 0.4s",
                    "&:hover": { color: PURPLE },
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    color: "#111",
                  }}
                >
                  Launch Comparison Tool
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    display: "block",
                    mb: 2,
                    fontSize: { xs: "0.6rem", md: "0.875rem" },
                  }}
                >
                  Fees • Duration • Placement • Mode
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundImage: GRADIENT,
                    bgcolor: "transparent",
                    color: "white",
                    px: { xs: 3, md: 5 },
                    py: { xs: 1.2, md: 1.5 },
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: { xs: "0.7rem", md: "1.05rem" },
                    boxShadow: "0 10px 30px rgba(227,30,36,0.3)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 18px 45px rgba(227,30,36,0.4)",
                    },
                  }}
                >
                  Compare Now
                </Button>
              </Card>
            </Box>
          </ScaleIn>
        </FadeInUp>
      </Container>
    </Box>
  );
}