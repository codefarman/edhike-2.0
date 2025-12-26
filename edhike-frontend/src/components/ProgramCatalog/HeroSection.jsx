import { Box, Container, Typography, Button, Stack } from "@mui/material";
import {
  FadeInUp,
  TextReveal,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  BounceIn,
} from "../Animation/Motion"; 
import {
  GRADIENT,
  GRADIENT_LIGHT,
  CTA_PRIMARY,
  RED,
  PURPLE,
  SHADOW_MEDIUM,
} from "../../theme/brand";

const HeroSection = ({ hero }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "80vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        background: GRADIENT,
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RED}22, transparent 70%)`,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: { xs: 400, md: 800 },
          height: { xs: 400, md: 800 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PURPLE}18, transparent 70%)`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <StaggerContainer delayChildren={0.1}>
          <Stack spacing={{ xs: 3, md: 5 }} alignItems="flex-start" maxWidth={800}>
            {/* Main Heading with Cinematic Text Reveal */}
            <StaggerItem>
              <Typography
                variant="h1"
                fontWeight={800}
                sx={{
                  fontSize: { xs: "2.8rem", md: "4.5rem" },
                  lineHeight: { xs: 1.1, md: 1.05 },
                  color: "white",
                  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <TextReveal delay={0.3}>{hero.main_heading}</TextReveal>
              </Typography>
            </StaggerItem>

            {/* Subheading */}
            <StaggerItem>
              <FadeInUp delay={0.4}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{
                    color: "rgba(255,255,255,0.95)",
                    mb: 2,
                  }}
                >
                  {hero.subheading}
                </Typography>
              </FadeInUp>
            </StaggerItem>

            {/* Description */}
            <StaggerItem>
              <FadeInUp delay={0.6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: 600,
                    lineHeight: 1.7,
                  }}
                >
                  {hero.description}
                </Typography>
              </FadeInUp>
            </StaggerItem>

            {/* CTA Button with Bounce Entrance */}
            <StaggerItem>
              <BounceIn delay={0.8}>
                <Button
                  size="large"
                  sx={{
                    ...CTA_PRIMARY,
                    py: 1.8,
                    px: 5,
                    fontSize: "1.1rem",
                    background: GRADIENT,
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 6s ease infinite",
                    "@keyframes gradientShift": {
                      "0%": { backgroundPosition: "0% 50%" },
                      "50%": { backgroundPosition: "100% 50%" },
                      "100%": { backgroundPosition: "0% 50%" },
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: SHADOW_MEDIUM.replace("0.25", "0.4"),
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Free Counselling
                </Button>
              </BounceIn>
            </StaggerItem>

            {/* Trust Indicators (Optional but powerful for education sites) */}
            <StaggerItem>
              <FadeInUp delay={1}>
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  sx={{ mt: 4 }}
                >
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                    ⭐ Trusted by 50,000+ students
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                    •
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                    🎓 100+ Top Universities
                  </Typography>
                </Stack>
              </FadeInUp>
            </StaggerItem>
          </Stack>
        </StaggerContainer>
      </Container>
    </Box>
  );
};

export default HeroSection;