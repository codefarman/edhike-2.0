// src/components/TrustSection.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const logos = [
  "/logos/Universities/Amity-univ-logo.jpeg",
"/logos/Universities/OP-Jindal-Univ-logo.jpeg",
 "/logos/Universities/galgotia-university-min.jpg",
 "/logos/Universities/parul-university.jpg",
"/logos/Universities/vgu-logo.png",
"/logos/Universities/golden-gate-uni_logo-min.png",
"/logos/Universities/uttranchal-univ-logo.png",
"/logos/Universities/mmu-univ-logo_11zon.png",
"/logos/Universities/GLA-univ-11zon.png",
"/logos/Universities/jain-univ-logo.png",
"/logos/Universities/manipal-univ-logo-min.png",
"/logos/Universities/kurukshetra-univ-logo.png",
"/logos/Universities/shoolini-univ-img-min.png",
 "/logos/Universities/sharda-univ-img-min.png",
"/logos/Universities/DPU-univ-logo-min.png",
"/logos/Universities/chandigarh-univ-logo.webp",
 "/logos/Universities/DYP-univ-navi-mumbai-logo.png", 
 "/logos/Universities/liverpool-john-moores-univ-img.webp",
"/logos/Universities/LPU-univ-logo.png" 
];




const scrollingLogos = [...logos, ...logos, ...logos];

export default function TrustSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "white",
        borderTop: "1px solid #eee",
        overflow: "hidden",
        pb: { xs: 2, md: 4, lg: 1 },
      }}
    >
      <Container maxWidth="xl">
        {/* Heading — Elegant staggered + text reveal */}
        <FadeInUp delay={0.1}>
          <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3, lg: 4 } }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: { xs: "0.7rem", md: "0.875rem", lg: "0.6rem" },
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: RED,
                textTransform: "uppercase",
                display: "block",
                mb: { xs: 0, md: 1, lg: -1 },
              }}
            >
              <FadeInUp delay={0.1}>
                Trusted by India’s Top Institutions
              </FadeInUp>
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
                fontWeight: 900,
                mt: 1.5,
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              <TextReveal delay={0.1}>Learn from the Best</TextReveal>
            </Typography>
          </Box>
        </FadeInUp>

        {/* Scrolling Logos — Staggered wave entrance */}
        <StaggerContainer delayChildren={0.05}>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            {/* Fade edges */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: { xs: 40, md: 80 },
                bgcolor: "linear-gradient(to right, white 30%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: { xs: 40, md: 80 },
                bgcolor: "linear-gradient(to left, white 30%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: { xs: 3, md: 4 },
                animation: "scroll 25s linear infinite",
                "&:hover": { animationPlayState: "paused" },
              }}
            >
              {scrollingLogos.map((logo, i) => (
                <StaggerItem key={i}>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: { xs: 120, sm: 140, md: 160 },
                      height: { xs: 70, md: 80 },
                      bgcolor: "white",
                      border: "1px solid #eee",
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: RED,
                        boxShadow: "0 8px 25px rgba(227,30,36,0.12)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={logo}
                      alt="University Logo"
                      sx={{
                        maxHeight: { xs: 28, md: 34 },
                        maxWidth: "90%",
                        objectFit: "contain",
                        
                        transition: "filter 0.4s",
                        "&:hover": { filter: "grayscale(0%)" },
                      }}
                    />
                  </Box>
                </StaggerItem>
              ))}
            </Box>
          </Box>
        </StaggerContainer>
      </Container>
    </Box>
  );
}