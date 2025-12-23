// src/components/Programs.jsx
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, ButtonBase } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  ScaleIn,
  TextReveal 
} from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const PROGRAMS = [
  {
    title: "MBA & Management",
    desc: "Leadership, strategy, and business mastery for aspiring executives.",
    tag: "Leadership Track",
    accent: RED,
    icon: "https://www.creativefabrica.com/wp-content/uploads/2020/10/16/SVG-Business-Work-Bag-Flat-Icon-Vector-Graphics-6104987-2-580x435.png", // Briefcase
  },
  {
    title: "Data Science & Analytics",
    desc: "Python, ML, visualization — transform data into insights.",
    tag: "Most Popular",
    accent: RED,
    icon: "https://www.shutterstock.com/image-vector/minimalist-bar-chart-icon-vector-260nw-2610161463.jpg", // Bar chart
  },
  {
    title: "AI & Machine Learning",
    desc: "Deep learning, neural networks, generative AI mastery.",
    tag: "Future-Proof",
    accent: PURPLE,
    icon: "https://static.vecteezy.com/system/resources/thumbnails/061/851/286/small/minimalist-icon-of-a-brain-merging-with-a-circuit-board-symbolizes-artificial-intelligence-machine-learning-and-the-future-of-technology-use-for-presentations-websites-and-reports-vector.jpg", // Brain circuit
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads, content strategy — drive measurable growth.",
    tag: "High Demand",
    accent: PURPLE,
    icon: "https://www.shutterstock.com/image-vector/digital-marketing-icon-outline-illustration-260nw-2685670427.jpg", 
  },
];

export default function Programs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); 

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 5 }, mb: {xs: 4}, bgcolor: "white" }}>
      <Container maxWidth="xl">
{/* Heading */}
<FadeInUp delay={0.1}>
  <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
    <Typography
      variant="subtitle2"
      sx={{ color: RED, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "0.7rem", md: "0.875rem" }, mb:-2 }}
    >
      Explore Programs
    </Typography>

<Typography
  variant="h3"
  sx={{
    mt: { xs: 1, md: 2 },
    mb: { xs: 2, md: 3 },
    fontWeight: 600,
    fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
    lineHeight: { xs: 1.2, md: 1.3 },
  }}
>
  <FadeInUp delay={0.2}>
    {''}
    <Box
      component="span"
      sx={{
        background: GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize:{ xs: "1rem", md: "1.6rem", lg: "2rem"},
      }}
    >
      Accelerate Your Career with the Right Program
    </Box>
  </FadeInUp>
</Typography>
     <FadeInUp delay={0.3}>
    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: { xs: "0.7rem", md: "1rem" }, mt:-1 }}>
      Industry-aligned programs designed for working professionals ready to lead and innovate.
    </Typography>
    </FadeInUp>
  </Box>
</FadeInUp>

        {/* Responsive Cards */}
        <StaggerContainer delayChildren={0.08}>
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.25}
              centeredSlides={true}
              pagination={{ clickable: true }}
              style={{ padding: "10px 0 40px" }}
            >
              {PROGRAMS.map((prog, i) => (
                <SwiperSlide key={i}>
                  <StaggerItem>
                    <ScaleIn delay={i * 0.06}>
                      <ProgramCard prog={prog} isMobile />
                    </ScaleIn>
                  </StaggerItem>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Grid container spacing={1} justifyContent="center">
              {PROGRAMS.map((prog, i) => (
                <Grid item key={i}>
                  <StaggerItem>
                    <ScaleIn delay={i * 0.06}>
                      <ProgramCard prog={prog} />
                    </ScaleIn>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          )}
        </StaggerContainer>
      </Container>
    </Box>
  );
}

function ProgramCard({ prog, isMobile = false }) {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        borderRadius: 4,
        transition: "all 0.4s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(88,41,167,0.15)",
        },
      }}
    >
      <Card
        sx={{
          width: { xs: 280, sm: 300, md: 280 }, 
          height: { xs: 260, md: 300 }, 
          bgcolor: "white",
          borderRadius: 4,
          p: { xs: 2.5, md: 3 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 0.4s",
          "&:hover": { borderColor: prog.accent },
        }}
      >
        <CardContent sx={{ p: 0 }}>
<Box
  sx={{
    display: "flex",
    justifyContent: "center", 
    mb: 2.5,
  }}
>
  <Box
    sx={{
      width: { xs: 56, md: 64 },
      height: { xs: 56, md: 64 },
      borderRadius: 3,
      bgcolor: `${prog.accent}15`,
      display: "grid",
      placeItems: "center",
    }}
  >
    <Box
      component="img"
      src={prog.icon}
      alt={prog.title}
      sx={{ width: "70%", height: "70%", objectFit: "contain", display: "block" }}
    />
  </Box>
</Box>


          <Typography
            variant="caption"
            sx={{
              color: prog.accent,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              fontSize: "0.75rem",
              mb: 1.5,
            }}
          >
            {prog.tag}
          </Typography>

          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              mb: 2,
              color: "#111",
              lineHeight: 1.3,
            }}
          >
            {prog.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.7rem", md: "0.9rem" },
              lineHeight: 1.5,
              flexGrow: 1,
            }}
          >
            {prog.desc}
          </Typography>
        </CardContent>

        <Box sx={{ mt: 2.5 }}>
          <Typography
            variant="body1"
            fontWeight={700}
            sx={{
              color: prog.accent,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "0.8rem", md: "0.95rem" },
            }}
          >
            Explore Programs
            <Box component="svg" sx={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </Box>
          </Typography>
        </Box>
      </Card>
    </ButtonBase>
  );
}