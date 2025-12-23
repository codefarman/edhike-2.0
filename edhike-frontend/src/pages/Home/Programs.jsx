// src/components/Programs.jsx
import React, { useRef } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, ButtonBase } from "@mui/material";
import {
  School,
  BarChart,
  SmartToy,
  Campaign,
  Groups,
  LaptopMac,
  Public,
} from "@mui/icons-material";

import { useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "../../components/Animation/Motion";


const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const PROGRAMS = [
  {
    title: "Data Science & Analytics",
    duration: "6–12 months",
    format: "100% Online + Live Projects",
    roles: "Data Analyst, Business Analyst, Data Scientist",
    description:
      "Uncover the power of data. Learn Python, SQL, machine learning, data visualization, and real-world analytics tools used by top companies.",
    icon: BarChart,
    color: PURPLE,
    url: "https://www.edhike.in/data-science-analytics",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    duration: "9–12 months",
    format: "Instructor-led + Self-paced",
    roles: "ML Engineer, AI Researcher, Computer Vision Engineer",
    description:
      "Dive deep into AI, Neural Networks, Deep Learning, and NLP with real-time industry projects and mentorship from top faculty.",
    icon: SmartToy,
    color: RED,
    url: "https://www.edhike.in/best-online-programs/machine-learning-ai",
    highlight: true,
  },
  {
    title: "MBA (Master of Business Administration)",
    duration: "12–24 months",
    format: "Online + Optional Campus Immersion",
    roles: "Manager, Consultant, Strategist, Entrepreneur",
    description:
      "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing, HR, Analytics, and more.",
    icon: School,
    color: PURPLE,
    url: "https://www.edhike.in/online-mba",
  },
  {
    title: "Software & Technology",
    duration: "3–12 months",
    format: "Tools: Git, Docker, AWS, React, Node.js",
    roles: "Software Developer, DevOps Engineer, Cloud Engineer",
    description:
      "Become a full-stack developer, master DevOps, or get certified in Cloud, Cybersecurity, or Web3 — without quitting your job.",
    icon: LaptopMac,
    color: RED,
    url: "https://www.edhike.in/software-technology",
  },
  {
    title: "Digital Marketing & Growth",
    duration: "4–6 months",
    format: "Projects: Campaign Building, Analytics Tracking",
    roles: "Digital Marketer, Growth Manager, PPC Specialist",
    description:
      "Learn SEO, SEM, Social Media Marketing, Performance Ads, and Content Strategy from real marketers working in top agencies and startups.",
    icon: Campaign,
    color: PURPLE,
    url: "https://www.edhike.in/digital-marketing",
  },
  {
    title: "Management & Leadership",
    duration: "6–12 months",
    format: "Harvard-style case studies, Leadership Labs",
    roles: "Operations Manager, Team Lead, Founder",
    description:
      "Gain practical management skills in strategy, operations, HR, or entrepreneurship. Perfect for team leads and aspiring founders.",
    icon: Groups,
    color: RED,
    url: "https://www.edhike.in/management-leadership",
    highlight: true,
  },
  {
    title: "Master’s Program (Global MBA)",
    duration: "1.5–3 years",
    format: "Expert Faculty, Mentorship, Dissertation",
    roles: "Business, Tech, Healthcare, Data Science",
    description:
      "Elevate your career with a specialized online Master’s program offering advanced knowledge and practical skills designed by industry leaders.",
    icon: Public,
    color: PURPLE,
    url: "https://www.edhike.in/global-mba",
  },
];




export default function Programs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const swiperRef = useRef(null);


  return (
    <Box id="programs" component="section" sx={{ py: { xs: 3, md: 5 }, mb: { xs: 4 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <FadeInUp delay={0.1}>
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
            <Typography
              variant="subtitle2"
              sx={{ color: RED, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "0.7rem", md: "0.875rem" }, mb: -2 }}
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
                    fontSize: { xs: "1rem", md: "1.6rem", lg: "2rem" },
                  }}
                >
                  Accelerate Your Career with the Right Program
                </Box>
              </FadeInUp>
            </Typography>
            <FadeInUp delay={0.3}>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: { xs: "0.7rem", md: "1rem" }, mt: -1 }}>
                Industry-aligned programs designed for working professionals ready to lead and innovate.
              </Typography>
            </FadeInUp>
          </Box>
        </FadeInUp>

        {/* Responsive Cards */}
        <FadeInUp>
          <StaggerContainer delayChildren={0.1}>
            <Box sx={{ position: "relative" }}>

              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -75,
                  transform: "translateY(-50%)",
                  bgcolor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 30,
                  "&:hover": {
                    bgcolor: "#fff",
                    transform: "translateY(-50%) scale(1.08)",
                  },
                }}
              >
                <ChevronLeft sx={{ fontSize: 28, color: PURPLE }} />
              </IconButton>

               <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -75,
                  transform: "translateY(-50%)",
                  bgcolor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 10,
                  "&:hover": {
                    bgcolor: "#fff",
                    transform: "translateY(-50%) scale(1.08)",
                  },
                }}
              >
                <ChevronRight sx={{ fontSize: 28, color: PURPLE }} />
              </IconButton>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination]}
                spaceBetween={24}
                loop
                grabCursor
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1.1 },
                  600: { slidesPerView: 1.5 },
                  900: { slidesPerView: 2.5 },
                  1200: { slidesPerView: 4 },
                }}
                style={{ paddingBottom: 50 }}
              >
                {PROGRAMS.map((prog, i) => (
                  <SwiperSlide key={i}>
                    <StaggerItem>
                      <ScaleIn delay={i * 0.05}>
                        <ProgramCard prog={prog} />
                      </ScaleIn>
                    </StaggerItem>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </Box>
          </StaggerContainer>
        </FadeInUp>
      </Container>
    </Box>
  );
}

function ProgramCard({ prog }) {
  const Icon = prog.icon;

  return (
    <Card
      sx={{
        width: 280,
        height: 310, // 🔥 reduced height
        borderRadius: 4,
        bgcolor: "#fff",
        border: "1px solid #eee",
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 18px 38px rgba(88,41,167,0.18)",
        },
      }}
    >
      {/* ICON */}
      <Box
        sx={{
          height: 70, // 🔥 reduced icon section
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: `${prog.color}10`,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <Icon
          sx={{
            fontSize: 40,
            color: prog.color, // 🔥 red / purple mix
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          px: 2,
          pt: 1.4,
          pb: 1.2,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* TITLE */}
        <Typography
          fontWeight={700}
          sx={{
            fontSize: "0.9rem",
            mb: 0.6,
            color: RED, // 🔥 title always red
          }}
        >
          {prog.title}
        </Typography>

        {/* META */}
        <Typography sx={{ fontSize: "0.7rem", mb: 0.3 }}>
          <Box component="span" sx={{ color: PURPLE, fontWeight: 600 }}>
            Duration:
          </Box>{" "}
          <Box component="span" sx={{ color: "text.secondary" }}>
            {prog.duration}
          </Box>
        </Typography>


        <Typography sx={{ fontSize: "0.7rem", mb: 0.3 }}>
          <Box component="span" sx={{ color: PURPLE, fontWeight: 600 }}>
            Format:
          </Box>{" "}
          <Box component="span" sx={{ color: "text.secondary" }}>
            {prog.format}
          </Box>
        </Typography>


        <Typography sx={{ fontSize: "0.7rem", mb: 0.6 }}>
          <Box component="span" sx={{ color: PURPLE, fontWeight: 600 }}>
            Career Roles:
          </Box>{" "}
          <Box component="span" sx={{ color: "text.secondary" }}>
            {prog.roles}
          </Box>
        </Typography>


        {/* DESCRIPTION */}
        <Typography
          sx={{
            fontSize: "0.72rem",
            color: "text.secondary",
            lineHeight: 1.45,
            display: "-webkit-box",
            WebkitLineClamp: 3, // 🔥 reduced lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 2, // 🔥 FIXED bottom spacing
          }}
        >
          {prog.description}
        </Typography>

        {/* LEARN MORE BUTTON */}
        <Box>
          <Box
            component="button"
            onClick={() => window.open(prog.url, "_self")}
            sx={{
              background: GRADIENT, // 🔥 gradient by default
              color: "#fff",
              border: "none",
              borderRadius: 50,
              px: 2.2,
              py: 0.55,
              fontSize: "0.7rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "transform 0.25s ease",
              "&:hover": {
                transform: "scale(1.06)", // 🔥 only scale
              },
            }}
          >
            Learn more
          </Box>
        </Box>
      </Box>
    </Card>
  );
}



