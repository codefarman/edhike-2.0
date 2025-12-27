import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT, SHADOW_SOFT, PURPLE } from "../../theme/brand";

const CareerOutcomes = ({ roles = [], salaryRange, companies = [] }) => {
  return (
    <Box id="career-outcomes" sx={{ py: { xs: 6, md: 8 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <FadeInUp>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              mb: 1,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Career Outcomes
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
            Real roles learners move into after completing this program.
          </Typography>
        </FadeInUp>

        <Grid container spacing={4}>
          {/* Roles */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 4, boxShadow: SHADOW_SOFT }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <WorkOutlineIcon color="primary" />
                <Typography fontWeight={700}>Top Job Roles</Typography>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {roles.map((role, i) => (
                  <Chip key={i} label={role} />
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Salary */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 4, boxShadow: SHADOW_SOFT }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <TrendingUpIcon sx={{ color: PURPLE }} />
                <Typography fontWeight={700}>Salary Outcome</Typography>
              </Stack>

              <Typography fontSize="1.8rem" fontWeight={800}>
                {salaryRange}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Based on industry & alumni data
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Companies */}
        {companies.length > 0 && (
          <Box mt={5}>
            <Typography fontWeight={700} mb={2}>
              Hiring Companies
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {companies.map((c, i) => (
                <Chip key={i} label={c} variant="outlined" />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CareerOutcomes;
