import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "../Animation/Motion"; // Your Motion.jsx path
import {
  PURPLE,
  RED,
  SHADOW_SOFT,
} from "../../theme/brand";

const TrustStrip = ({ highlights = [] }) => {
  // Default highlights (you can override by passing props)
  const defaultHighlights = [
    "UGC-Entitled Online Degrees",
    "Valid as Regular Campus Programs",
    "Industry-Recognized Certifications",
    "Guided by Education Experts",
  ];

  const items = highlights.length > 0 ? highlights : defaultHighlights;

  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
        borderY: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <StaggerContainer delayChildren={0.1} viewport={{ once: true, margin: "-100px" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 5 }}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{
                    minWidth: { xs: "100%", sm: "auto" },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  {/* Subtle scale-in on icon for a gentle "approval" feel */}
                  <ScaleIn delay={index * 0.08}>
                    <CheckCircleOutlineIcon
                      sx={{
                        color: index % 2 === 0 ? PURPLE : RED,
                        fontSize: { xs: 28, md: 32 },
                        flexShrink: 0,
                      }}
                    />
                  </ScaleIn>

                  {/* FadeInUp text for smooth reveal */}
                  <FadeInUp delay={index * 0.1}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        color: "text.primary",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </Typography>
                  </FadeInUp>
                </Stack>
              </StaggerItem>
            ))}
          </Stack>
        </StaggerContainer>
      </Container>
    </Box>
  );
};

export default TrustStrip;