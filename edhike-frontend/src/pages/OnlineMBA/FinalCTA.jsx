// src/pages/OnlineMBA/FinalCTA.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Phone, ArrowRightAlt } from "@mui/icons-material";
import { FadeInUp, ScaleIn } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function FinalCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCTA = () => {
    // hook your lead form / modal / scroll / redirect here
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* FINAL CTA SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          background: GRADIENT,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blur */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <FadeInUp>
            <Typography
              align="center"
              sx={{
                fontSize: { xs: "2rem", md: "3.2rem" },
                fontWeight: 900,
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Ready to Upgrade Your Career with an Online MBA?
            </Typography>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <Typography
              align="center"
              sx={{
                maxWidth: 780,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.2rem" },
                opacity: 0.95,
                mb: 6,
              }}
            >
              Speak to our expert counsellors, compare top UGC-approved
              universities, understand ROI, and choose the right specialization
              — all at zero cost.
            </Typography>
          </FadeInUp>

          <ScaleIn delay={0.6}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                size="large"
                onClick={handleCTA}
                startIcon={<Phone />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 50,
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  textTransform: "none",
                  bgcolor: "#fff",
                  color: PURPLE,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                  "&:hover": {
                    bgcolor: "#fff",
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  },
                }}
              >
                Talk to an Expert
              </Button>

              <Button
                size="large"
                variant="outlined"
                onClick={handleCTA}
                endIcon={<ArrowRightAlt />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 50,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.6)",
                  "&:hover": {
                    borderColor: "#fff",
                    background: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Get Free Guidance
              </Button>
            </Stack>
          </ScaleIn>
        </Container>
      </Box>

      {/* STICKY MOBILE CTA */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            background: GRADIENT,
            p: 1.2,
            boxShadow: "0 -6px 20px rgba(0,0,0,0.25)",
          }}
        >
          <Button
            fullWidth
            onClick={handleCTA}
            startIcon={<Phone />}
            sx={{
              height: 52,
              borderRadius: 50,
              fontSize: "1rem",
              fontWeight: 800,
              textTransform: "none",
              bgcolor: "#fff",
              color: PURPLE,
              "&:hover": {
                bgcolor: "#fff",
              },
            }}
          >
            Free Counselling • Talk to Expert
          </Button>
        </Box>
      )}
    </>
  );
}
