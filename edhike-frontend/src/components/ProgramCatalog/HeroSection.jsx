import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
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
import { useLeadPopup } from "../../context/LeadPopupContext";

const HeroSection = ({ hero }) => {
  const { openLeadPopup } = useLeadPopup();
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 4 },
        background: "#fafafa",
        minHeight: { xs: "85vh", md: "60vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background blobs */}
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
          <Stack spacing={{ xs: 2.5, md: 4 }} alignItems="center" textAlign="center">

            {/* Headline */}
            <StaggerItem>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem", lg: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: { xs: 1.15, md: 1.1 },
                }}
              >
                <TextReveal delay={0.3}>
                  <Box component="span" sx={{background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
                    Discover the Right
                  </Box>
                  <br />
                  <Box component="span" sx={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
                    Program for Your Future
                  </Box>
                </TextReveal>
              </Typography>
            </StaggerItem>

            {/* Persona targeting line (NEW) */}
            <StaggerItem>
              <FadeInUp delay={0.35}>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    fontWeight: 600,
                    color: PURPLE,
                  }}
                >
                  For working professionals with 1–15 years of experience
                </Typography>
              </FadeInUp>
            </StaggerItem>

            {/* Improved sub-copy */}
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
                  Earn industry-recognized degrees and certifications online — without
                  quitting your job.
                </Typography>
              </FadeInUp>
            </StaggerItem>

            {/* CTA buttons (Primary + Secondary) */}
            <StaggerItem>
              <BounceIn delay={0.6}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                  onClick={openLeadPopup}
                    sx={{
                      ...CTA_PRIMARY,
                      px: { xs: 3.5, md: 8 },
                      py: { xs: 1.2, md: 1.3 },
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      borderRadius: 50,
                    }}
                  >
                    Talk to an Expert 
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      px: { xs: 3.5, md: 5 },
                      py: { xs: 1.2, md: 1.3 },
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      borderRadius: 50,
                      borderColor: PURPLE,
                      color: PURPLE,
                      fontWeight: 600,
                    }}
                    onClick={() =>
                      document
                        .getElementById("programs-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Programs
                  </Button>
                </Stack>
              </BounceIn>
            </StaggerItem>

            {/* Trust indicators */}
            <StaggerItem>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 3 }}
                justifyContent="center"
              >
                {[
                  { title: "120+ Programs", subtitle: "UG, PG & Professional Courses" },
                  { title: "Personalized Counselling", subtitle: "Based on profile & goals" },
                  { title: "95% Success Rate", subtitle: "Students placed in top programs" },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      background: "#fff",
                      borderRadius: 6,
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      boxShadow: SHADOW_SOFT,
                      minWidth: { xs: 240, sm: 200 },
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
