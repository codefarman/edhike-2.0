import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  BounceIn,
  TextReveal,
} from "../Animation/Motion";
import {
  GRADIENT,
  CTA_PRIMARY,
  RED,
  PURPLE,
  SHADOW_SOFT,
} from "../../theme/brand";

const HeroSection = ({ hero }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 }, // Reduced vertical padding
        background: "#fafafa",
        minHeight: { xs: "85vh", md: "80vh" }, // Less tall overall
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fewer, larger subtle blobs for creative depth – no images */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -60, md: -120 },
          left: { xs: -100, md: -200 },
          width: { xs: 400, md: 800 },
          height: { xs: 400, md: 800 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PURPLE}22, transparent 65%)`,
          opacity: 0.35,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -100, md: -200 },
          right: { xs: -150, md: -300 },
          width: { xs: 500, md: 1000 },
          height: { xs: 500, md: 1000 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RED}20, transparent 70%)`,
          opacity: 0.4,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <StaggerContainer delayChildren={0.1}>
          <Stack spacing={{ xs: 2.5, md: 4 }} alignItems="center" textAlign="center"> {/* Tighter spacing */}

            {/* Compact tag */}
            <StaggerItem>
              <FadeInUp>
                <Chip
                  label="Find Your Perfect Program"
                  sx={{
                    background: `${RED}12`,
                    color: RED,
                    fontWeight: 600,
                    borderRadius: 50,
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1, md: 1.2 },
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                  }}
                />
              </FadeInUp>
            </StaggerItem>

            {/* Smaller headline with preserved impact */}
            <StaggerItem>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem", lg: "4.5rem" }, // Reduced sizes
                  fontWeight: 800,
                  lineHeight: { xs: 1.15, md: 1.1 },
                }}
              >
                <TextReveal delay={0.3}>
                  <Box component="span" sx={{ color: PURPLE }}>Discover the Right</Box>
                  <br />
                  <Box component="span" sx={{ color: RED }}>Program for Your Future</Box>
                </TextReveal>
              </Typography>
            </StaggerItem>

            {/* Shorter, smaller description */}
            <StaggerItem>
              <FadeInUp delay={0.4}>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    maxWidth: 700,
                    lineHeight: 1.6,
                  }}
                >
                  Earn Industry-recognized Degrees and Certifications Online — just as credible as Campus-Based Learning.
                </Typography>
              </FadeInUp>
            </StaggerItem>

            {/* Slightly smaller CTA */}
            <StaggerItem>
              <BounceIn delay={0.6}>
                <Button
                  size="large"
                  sx={{
                    ...CTA_PRIMARY,
                    px: { xs: 5, md: 6 },
                    py: { xs: 1.8, md: 2 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    borderRadius: 50,
                  }}
                >
                  Get Free Counselling
                </Button>
              </BounceIn>
            </StaggerItem>

            {/* Slimmer trust pills */}
            <StaggerItem>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 3 }}
                justifyContent="center"
              >
                {[
                  { title: "500+ Programs", subtitle: "UG, PG & Professional Courses" },
                  { title: "Personalized Matching", subtitle: "Based on profile & aspirations" },
                  { title: "95% Success Rate", subtitle: "Students placed in dream programs" },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      background: "#fff",
                      borderRadius: 6,
                      px: { xs: 3, md: 4 },
                      py: { xs: 2, md: 2.5 },
                      boxShadow: SHADOW_SOFT,
                      minWidth: { xs: 260, sm: 200 },
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </StaggerItem>

          </Stack>
        </StaggerContainer>
      </Container>
    </Box>
  );
};

export default HeroSection;