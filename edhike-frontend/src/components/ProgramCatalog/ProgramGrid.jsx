import {
  Grid,
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";
import { StaggerContainer, StaggerItem, FadeInUp } from "../Animation/Motion";
import ProgramCard from "./ProgramCard";
import { GRADIENT, SHADOW_SOFT } from "../../theme/brand";
import { useLeadPopup } from "../../context/LeadPopupContext";

const ProgramGrid = ({ programs = [] }) => {
  const { openLeadPopup } = useLeadPopup();
  if (!programs || programs.length === 0) {
    return (
      <Box
        sx={{
          minHeight: { xs: 300, md: 400 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 4,
        }}
      >
        <FadeInUp>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            Programs coming soon. Stay tuned!
          </Typography>
        </FadeInUp>
      </Box>
    );
  }

  return (
    <Box>
      {/* PROGRAM GRID */}
      <Container maxWidth="xl">
        <StaggerContainer delayChildren={0.08} viewport={{ once: true }}>
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center"
          >

            {programs.map((program, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={program.id || index}

              >
                <StaggerItem style={{ width: "100%" }}>
                  <FadeInUp delay={index * 0.05}>
                    <ProgramCard program={program} />
                  </FadeInUp>
                </StaggerItem>
              </Grid>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>

      {/* 🔥 BIG CTA BELOW GRID */}
      <FadeInUp>
        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            py: { xs: 5, md: 6 },
            px: 2,
            background: "#fafafa",
            borderTop: "1px solid #eee",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
                background: "#fff",
                borderRadius: 4,
                boxShadow: SHADOW_SOFT,
                p: { xs: 3, md: 4 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  fontSize: { xs: "1.4rem", md: "2rem" },
                  mb: 1,
                }}
              >
                Not sure which program fits your goals?
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1.05rem" },
                  mb: 3,
                }}
              >
                Get expert guidance based on your experience, budget, and career goals.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                {/* PRIMARY CTA */}
                <Button
                  variant="contained"
                  onClick={openLeadPopup}
                  sx={{
                    background: GRADIENT,
                    px: 2,
                    py: 1.2,
                    fontWeight: 400,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    borderRadius: 50,
                    "&:hover": { background: GRADIENT },
                  }}
                >
                  Get Personalized Program Recommendation
                </Button>

                {/* SECONDARY CTA */}
                {/* <Button
                  variant="text"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  Compare Programs →
                </Button> */}
              </Stack>

              {/* MICRO TRUST LINE */}
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 2,
                  color: "text.secondary",
                }}
              >
                Free guidance
              </Typography>
            </Box>
          </Container>
        </Box>
      </FadeInUp>
    </Box>
  );
};

export default ProgramGrid;
