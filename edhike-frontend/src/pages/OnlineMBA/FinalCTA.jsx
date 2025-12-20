// src/pages/OnlineMBA/FinalCTA.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Phone, ArrowRightAlt } from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";
import { useLeadPopup } from "../../context/LeadPopupContext";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function FinalCTA() {
      const { openLeadPopup } = useLeadPopup();
  const handleCTA = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3.5, md: 5 }, // 🔥 very compact
        background: GRADIENT,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <FadeInUp>
          <Box
            sx={{
              textAlign: "center",
              px: { xs: 1.5, md: 3 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.15rem", md: "1.6rem" },
                fontWeight: 900,
                lineHeight: 1.2,
                mb: 0.8,
              }}
            >
              Upgrade Your Career with an Online MBA
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "0.95rem" },
                opacity: 0.9,
                maxWidth: 520,
                mx: "auto",
                mb: 2,
              }}
            >
              Compare top universities, ROI & specializations — free expert guidance.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.4}
              justifyContent="center"
            >
              <Button
                onClick={openLeadPopup}
                startIcon={<Phone />}
                sx={{
                  px: 3,
                  py: 1.1,
                  borderRadius: 50,
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  textTransform: "none",
                  bgcolor: "#fff",
                  color: PURPLE,
                  minHeight: 40,
                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
              >
                Talk to Expert
              </Button>

              <Button
                variant="outlined"
                onClick={openLeadPopup}
                endIcon={<ArrowRightAlt />}
                sx={{
                  px: 3,
                  py: 1.1,
                  borderRadius: 50,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.6)",
                  minHeight: 40,
                  "&:hover": {
                    borderColor: "#fff",
                    background: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Free Guidance
              </Button>
            </Stack>
          </Box>
        </FadeInUp>
      </Container>
    </Box>
  );
}
