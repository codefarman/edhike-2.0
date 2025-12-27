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
} from "../Animation/Motion";
import {
  PURPLE,
  RED,
} from "../../theme/brand";

const TrustStrip = ({ highlights = [] }) => {
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
        py: { xs: 2, md: 0 },
        background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
        borderY: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <StaggerContainer delayChildren={0.1} viewport={{ once: true }}>
          {/* OUTER STACK */}
          <Stack
            direction={{ xs: "column", sm: "row" }}   // mobile vs desktop
            spacing={{ xs: 2.5, sm: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              flexWrap: "nowrap",          // 🔥 KEY FIX
            }}
          >
            {items.map((item, index) => (
              <StaggerItem key={index}>
                {/* EACH ITEM */}
                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    px: { xs: 2, sm: 0 },
                    whiteSpace: "nowrap",    // 🔥 text never wraps
                  }}
                >
                  {/* ICON */}
                  <CheckCircleOutlineIcon
                    sx={{
                      color: index % 2 === 0 ? PURPLE : RED,
                      fontSize: { xs: 26, md: 30 },
                      flexShrink: 0,
                    }}
                  />

                  {/* TEXT */}
                  <FadeInUp delay={index * 0.08}>
                    <Typography
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        color: "text.primary",
                        lineHeight: 1.4,
                        whiteSpace: "nowrap", // 🔥 absolutely no wrapping
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
