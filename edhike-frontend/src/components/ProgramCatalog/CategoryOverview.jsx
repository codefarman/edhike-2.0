import {
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LaptopIcon from "@mui/icons-material/LaptopChromebook";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { FadeInUp, StaggerContainer, StaggerItem } from "../Animation/Motion";
import { PURPLE, RED, GRADIENT, SHADOW_SOFT } from "../../theme/brand";

const CategoryOverview = ({ category }) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 6 },
        mb: 6,
        borderRadius: 4,
        background: `linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)`,
        boxShadow: SHADOW_SOFT,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle gradient accent bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 6,
          background: GRADIENT,
        }}
      />

      <FadeInUp viewport={{ once: true, margin: "-100px" }}>
        <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{
            fontSize: { xs: "2.2rem", md: "3rem" },
            background: GRADIENT,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: 1.2,
          }}
        >
          {category.category}
        </Typography>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            lineHeight: 1.7,
            mb: 4,
            maxWidth: 800,
          }}
        >
          {category.description}
        </Typography>
      </FadeInUp>

      {/* Metadata with icons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ mb: 4 }}
      >
        <FadeInUp delay={0.3}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <AccessTimeIcon sx={{ color: PURPLE }} />
            <Typography variant="body1">
              <strong>Duration:</strong> {category.duration}
            </Typography>
          </Stack>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <LaptopIcon sx={{ color: PURPLE }} />
            <Typography variant="body1">
              <strong>Format:</strong> {category.format}
            </Typography>
          </Stack>
        </FadeInUp>

        <FadeInUp delay={0.5}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <WorkOutlineIcon sx={{ color: PURPLE }} />
            <Typography variant="body1">
              <strong>Career Roles:</strong> {category.career_roles.join(", ")}
            </Typography>
          </Stack>
        </FadeInUp>
      </Stack>

      {/* Highlights chips with stagger animation */}
      <StaggerContainer delayChildren={0.08}>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1.5}>
          {category.highlights.map((item, idx) => (
            <StaggerItem key={idx}>
              <Chip
                label={item}
                sx={{
                  backgroundColor: idx % 2 === 0 ? `${PURPLE}12` : `${RED}12`,
                  color: idx % 2 === 0 ? PURPLE : RED,
                  fontWeight: 600,
                  border: `1px solid ${idx % 2 === 0 ? PURPLE : RED}`,
                  borderRadius: 50,
                  px: 2,
                  py: 2.5,
                }}
              />
            </StaggerItem>
          ))}
        </Stack>
      </StaggerContainer>
    </Box>
  );
};

export default CategoryOverview;