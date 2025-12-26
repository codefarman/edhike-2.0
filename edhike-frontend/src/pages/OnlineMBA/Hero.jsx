// src/pages/OnlineMBA/Hero.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Grid,
  Button
} from "@mui/material";
import { TrendingUp, School, CurrencyRupee } from "@mui/icons-material";
import {
  FadeInUp,
  FadeInRight,
  ScaleIn,
} from "../../components/Animation/Motion";
import { useLeadPopup } from "../../context/LeadPopupContext";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function Hero() {
      const { openLeadPopup } = useLeadPopup();
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 6, md: 16, lg: 18 },
        pb: { xs: 4, md: 6 , lg: 8 },
        mb: { xs: -6, md: -10 },
        bgcolor: "#fafafa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4,md: 6, lg: 10 }} alignItems="center" mt={{ xs: 2, md: 1, lg: -10 }}>
          {/* LEFT CONTENT */}
          <Grid item xs={12} lg={7} pl={{ lg: 5 }}>
            <FadeInUp delay={0.1}>
              <Chip
                label="Online MBA for Working Professionals"
                sx={{
                  bgcolor: RED + "10",
                  color: RED,
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  py: 1.5,
                  borderRadius: 8,
                }}
              />
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.2rem", md: "2rem", lg: "3rem" },
                  fontWeight: 900,
                  lineHeight: 1.05,
                  mt: 3,
                  mb: 3,
                  color: PURPLE,
                  letterSpacing: "-0.03em",
                }}
              >
                Choose the Right Online MBA —
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    background: GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "1.2rem", md: "2rem", lg: "3rem" },
                  }}
                >
                  Not Just Any MBA
                </Box>
              </Typography>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.75rem", md: "0.9rem", lg: "1rem" },
                  color: "gray",
                  maxWidth: 660,
                  lineHeight: 1.6,
                  fontWeight: 300,
                  mb: 6,
                  mt: { xs: -2, md: 2, lg: 3 },
                }}
              >
                We help working professionals identify the most suitable UGC-approved Online MBA by comparing universities, specializations, fees, and ROI — so your career move is strategic, not guesswork.
              </Typography>
            </FadeInUp>
            {/* MOBILE ONLY TINY CTA */}
            <FadeInUp delay={0.35}>
              <Box
                sx={{
 
                  mb: 2,
                }}
              >
                <Button
                  size="small"
                  onClick={openLeadPopup}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.7rem",
                    px: 2,
                    py: 0.6,
                    mt: -8,
                    borderRadius: 99,
                    fontWeight: 400,
                    background: GRADIENT,
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(88,41,167,0.35)",
                    "&:hover": {
                      background: GRADIENT,
                      boxShadow: "0 10px 24px rgba(88,41,167,0.45)",
                    },
                  }}
                >
                  Get Free MBA Guidance
                </Button>
              </Box>
            </FadeInUp>


            {/* STATS */}
            <FadeInUp delay={0.2}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                sx={{ mt: -2 }}
              >
                <ScaleIn delay={0.18}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                      bgcolor: "white",
                      px: 2,
                      py: 1.5,
                      borderRadius: 3,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: `1px solid ${PURPLE}15`,
                      minWidth: 150,
                    }}
                  >
                    <TrendingUp sx={{ color: RED, fontSize: 22 }} />
                    <Box>
                      <Typography
                        fontWeight={700}
                        sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.7rem", lg: "0.85rem" }, color: PURPLE }}
                      >
                        Career-Aligned MBA Options
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#666", fontSize: "0.68rem" }}
                      >
                        Based on role, goals & industry
                      </Typography>
                    </Box>
                  </Box>
                </ScaleIn>

                <ScaleIn delay={0.25}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                      bgcolor: "white",
                      px: 2,
                      py: 1.5,
                      borderRadius: 3,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: `1px solid ${PURPLE}15`,
                      minWidth: 150,
                    }}
                  >
                    <School sx={{ color: PURPLE, fontSize: 22 }} />
                    <Box>
                      <Typography
                        fontWeight={700}
                        sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.7rem", lg: "0.85rem" }, color: PURPLE }}
                      >
                        50+ UGC-Approved Universities
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#666", fontSize: "0.68rem" }}
                      >
                        Top Online MBA programs in India
                      </Typography>
                    </Box>
                  </Box>
                </ScaleIn>

                <ScaleIn delay={0.30}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                      bgcolor: "white",
                      px: 2,
                      py: 1.5,
                      borderRadius: 3,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: `1px solid ${PURPLE}15`,
                      minWidth: 150,
                    }}
                  >
                    <CurrencyRupee sx={{ color: RED, fontSize: 22 }} />
                    <Box>
                      <Typography
                        fontWeight={700}
                        sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.7rem", lg: "0.85rem" }, color: PURPLE }}
                      >
                        ROI-Focused Guidance
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#666", fontSize: "0.68rem" }}
                      >
                        Fees, outcomes & long-term value
                      </Typography>
                    </Box>
                  </Box>
                </ScaleIn>
              </Stack>
            </FadeInUp>
          </Grid>


          {/* RIGHT IMAGE */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >

            <FadeInRight delay={0.2}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 560,
                  mx: "auto",
                }}
              >
                {/* Gradient Glow */}
                <Box
                  // sx={{
                  //   position: "absolute",
                  //   inset: "-12%",
                  //   background: GRADIENT,
                  //   opacity: 0.10,
                  //   // filter: "blur(50px)",
                  //   zIndex: 0,
                  // }}
                />

                {/* Image Card */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow:
                      "0 20px 80px rgba(0,0,0,0.25), 0 10px 30px rgba(88,41,167,0.25)",
                    background: "#fff",
                  }}
                >
                  <Box
                    component="img"
                    src="Images/OnlineMBA_Hero.jpg"
                    alt="Online MBA Illustration"
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      transform: "scale(1.03)",
                    }}
                  />

                  {/* Soft highlight overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 40%)",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
            </FadeInRight>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
