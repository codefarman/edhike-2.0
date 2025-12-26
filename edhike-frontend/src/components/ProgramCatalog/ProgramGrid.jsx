import {
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { StaggerContainer, StaggerItem, FadeInUp } from "../Animation/Motion";
import ProgramCard from "./ProgramCard";

const ProgramGrid = ({ programs = [] }) => {
  if (!programs || programs.length === 0) {
    return (
      <Box
        sx={{
          minHeight: { xs: 300, md: 400 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
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
    <Container maxWidth="xl">
      <StaggerContainer delayChildren={0.08} viewport={{ once: true, margin: "-100px" }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={program.id || index}>
              <StaggerItem>
                <FadeInUp delay={index * 0.05}>
                  <ProgramCard program={program} />
                </FadeInUp>
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Container>
  );
};

export default ProgramGrid;