import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  AccessTime,
  TrendingUp,
  School,
  Public,
  Work,
  Psychology,
  Verified,
  Insights,
  People,
  MonetizationOn,
  ArrowUpward,
} from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const FEATURES = [
  { icon: <AccessTime />, title: "Flexible Learning", desc: "Study anytime, anywhere without career breaks." },
  { icon: <TrendingUp />, title: "High ROI", desc: "Salary hikes up to 77% with fast career growth." },
  { icon: <School />, title: "Top Faculty", desc: "Learn from industry leaders & expert faculty." },
  { icon: <Public />, title: "Global Exposure", desc: "International curriculum & global peers." },
];

const ENSURE = [
  { icon: <Work />, title: "Placement Support", desc: "Career services & hiring partners." },
  { icon: <Psychology />, title: "1:1 Mentorship", desc: "Personal mentor & advisor guidance." },
  { icon: <Verified />, title: "Verified Universities", desc: "UGC & NAAC accredited institutions." },
];

export default function WhyOnlineMBA() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: "#fff", mt: {lg:-15, xs: -10} }}>
      <Container maxWidth="lg">

        {/* TITLE */}
        <FadeInUp>
          <Typography
            sx={{
              fontSize:{ xs: "1.2rem", md: "1.6rem", lg: "2rem"},
              fontWeight: 900,
              textAlign: "center",
              mb: 1,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose an Online MBA?
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 4, fontSize: { xs: "0.85rem", md: "1rem" } }}
          >
            A strategic degree designed for working professionals to accelerate growth,
            leadership skills, and earning potential.
          </Typography>

          {/* COMPACT FEATURE CARDS */}
          <Grid container spacing={1.5} justifyContent="center">
            {FEATURES.map((item, i) => (
              <Grid item xs={6} md={3} key={item.title}>
                <FadeInUp delay={0.05 * i}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      textAlign: "center",
                      p: 1,
                      height: "100%",
                      border: "1px solid #eee",
                      transition: "0.25s",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          mx: "auto",
                          mb: 1,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: GRADIENT,
                          color: "#fff",
                          fontSize: { xs: 15, md: 20, lg: 25 },
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography fontWeight={800} sx={{ fontSize: { xs: "0.85rem", md: "0.9rem", lg: "1rem" }, color: PURPLE }}>
                        {item.title}
                      </Typography>

                      <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.8rem", lg: "0.8rem" }, color: "text.secondary", mt: 0.5 }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </FadeInUp>
              </Grid>
            ))}
          </Grid>

          {/* COMPACT BENEFIT LIST */}
            <FadeInUp delay={0.3}>
                  <Stack spacing={2} mt={4}>
                      {[
                          { icon: <Insights />, title: "Industry Expertise & Business Acumen", desc: "Gain comprehensive knowledge of business operations across diverse industries and develop cross-functional understanding of organizational dynamics" },
                          { icon: <Psychology />, title: "Entrepreneurial & Leadership Development", desc: "Build essential entrepreneurial skills through practical insights, proven methodologies, and valuable business tools for launching or scaling ventures" },
                          { icon: <People />, title: "Professional Network Expansion", desc: "Access exclusive networking opportunities with accomplished alumni and industry leaders across various sectors and geographical locations" },
                          { icon: <TrendingUp />, title: "Personal & Professional Growth", desc: "Foster holistic personal development alongside professional skill enhancement while building confidence, communication abilities, and strategic thinking capabilities" },
                          { icon: <MonetizationOn />, title: "Enhanced Earning Potential", desc: "Significantly increase your salary prospects with an MBA credential and specialized expertise, positioning yourself for higher compensation packages and performance-based incentives" },
                          { icon: <ArrowUpward />, title: "Career Advancement Opportunities", desc: "Unlock pathways to senior leadership roles, executive management positions, C-suite opportunities, and strategic decision-making responsibilities" },
                      ].map((item) => (
                          <Stack key={item.title} direction="row" spacing={3} alignItems="flex-start">
                              <Box sx={{ color: RED, mt: 0.5, fontSize: { xs: 12, md: 15 } }}>{item.icon}</Box>
                              <Box>
                                  <Typography fontWeight={800} sx={{ mb: 0, color: PURPLE, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                                      ▸ {item.title}
                                  </Typography>
                                  <Typography color="text.secondary" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
                                      {item.desc}
                                  </Typography>
                              </Box>
                          </Stack>
                      ))}
                  </Stack>
              </FadeInUp>
        </FadeInUp>

        {/* WHAT WE ENSURE - COMPACT CARDS */}
        <FadeInUp>
          <Box sx={{ mt: 5 }}>
            <Typography
              align="center"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" }, fontWeight: 900, mb: 2, background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              What We Ensure
            </Typography>

            <Grid container spacing={1.5} justifyContent="center">
              {ENSURE.map((item) => (
                <Grid item xs={12} sm={4} key={item.title}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 1.5,
                      textAlign: "center",
                      borderRadius: 3,
                      border: "1px solid #eee",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ color: RED, fontSize: { xs: 15, md: 24 }, mb: 0 }}>
                      {item.icon}
                    </Box>
                    <Typography fontWeight={800} sx={{ fontSize: { xs: "0.85rem", md: "0.875rem", lg: "0.9rem"  }, mb: 0.2, color: PURPLE }}>
                      {item.title}
                    </Typography>
                    <Typography fontSize={{ xs: "0.75rem", md: "0.8rem", lg: "0.8rem" }} color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeInUp>

      </Container>
    </Box>
  );
}

