// src/components/WhyEdhike.jsx
import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../../components/Animation/Motion";
import { useLeadPopup } from "../../context/LeadPopupContext";


gsap.registerPlugin(ScrollTrigger);

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const PANEL_HEIGHT = "80vh";

const AnalyticsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="10" width="4" height="11" rx="1" fill="#ffffff" />
    <rect x="10" y="6" width="4" height="15" rx="1" fill="#ffffff" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#ffffff" />
  </svg>
);

const PANEL_DATA = [
  {
    bg: "#0b0b0b",
    title: "Master skills with expert learning paths",
    subtitle: "Build confidence with structured lessons created by industry professionals.",
    stats: [{ value: "60+", label: "Hours of guided learning" }, { value: "82%", label: "Success improvement" }],
    cta: "Start your learning journey",
    mainImage: "https://www.justinmind.com/wp-content/uploads/2018/12/6-best-practices-for-Dashboard-Design-Justinmind-header.png",
    cards: [
      {
        icon: "URL_1",
        position: "top",
      },
      {
        icon: "URL_2",
        position: "bottom",
      },
    ],


  },
  {
    bg: "#6b0f0f",
    title: "Enhance your skills with hands-on experience",
    subtitle: "Work on practical tasks that prepare you for real-world challenges.",
    stats: [{ value: "500+", label: "Project simulations" }, { value: "200+", label: "Industry mentors" }],
    cta: "Build real experience",
    mainImage: "https://cdn.prod.website-files.com/60ffdd9e3c66d71b667eba0b/6685065bf0f6ca75f5d0ce48_eb2e0339-b724-446c-89e1-258be95dfc44.png",
    cards: [
      {
        icon: "URL_1",
        position: "top",
      },
      {
        icon: "URL_2",
        position: "bottom",
      },
    ],


  },
  {
    bg: "#184e9b",
    title: "Earn recognition that elevates your career",
    subtitle: "Showcase your expertise with credentials respected by employers.",
    stats: [{ value: "91%", label: "Positive career growth" }, { value: "4.7/5", label: "Career readiness rating" }],
    cta: "Become career-ready",
    mainImage: "https://res.cloudinary.com/certifier/image/upload/v1706547868/Free_Digital_Badging_Templates_4fff531296.png",
    cards: [
      {
        icon: "URL_1",
        position: "top",
      },
      {
        icon: "URL_2",
        position: "bottom",
      },
    ],


  },
  {
    bg: "#0e5130",
    title: "Achieve your next big career milestone",
    subtitle: "Move forward with learning pathways designed for ambitious professionals.",
    stats: [{ value: "120K+", label: "Learners empowered" }, { value: "70+", label: "Specialized tracks" }],
    cta: "Start your transformation",
    mainImage: "https://images.academyocean.com/webflow/features/analytics_and_reporting/Dashboard.webp",
    cards: [
      {
        icon: "URL_1",
        position: "top",
      },
      {
        icon: "URL_2",
        position: "bottom",
      },
    ],


  },
];

export default function WhyEdhike() {
  const { openLeadPopup } = useLeadPopup();
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel-content");

    panels.forEach((content) => {
      gsap.fromTo(
        content,
        {
          autoAlpha: 0,
          y: 60,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // floating cards – very light
    gsap.utils.toArray(".floating-card").forEach((card, i) => {
      gsap.to(card, {
        y: 10,
        duration: 3 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    ScrollTrigger.refresh();
  }, []);



  return (
    <Box sx={{ position: "relative", overflow: "hidden", mt: { xs: -1 } }}>
      <Box sx={{ textAlign: "center", py: { xs: 1, md: 5, lg: 8 }, bgcolor: "#fafafa" }}>
        <FadeInUp>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
            }}
          >
            Your Journey to Career Growth Begins with EdHike
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Typography variant="body1" sx={{ mt: 2, color: "text.secondary", px: { xs: 3, md: 0 }, fontSize: { xs: "0.7rem", md: "1rem" } }}>
            Experience learning designed for real outcomes.
          </Typography>
        </FadeInUp>
      </Box>


      {PANEL_DATA.map((panel, i) => {
        return (

          <Box
            key={i}
            className="panel"
            sx={{
              height: PANEL_HEIGHT,
              bgcolor: panel.bg,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              className="panel-content"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* INNER WRAPPER → controls content width */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "1400px",
                  px: { xs: 3, md: 6 },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: { xs: 6, md: 8 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {/* ================= LEFT CONTENT ================= */}
                <Box sx={{ maxWidth: { xs: "100%", md: "50%" }, zIndex: 2, color: "#ffffff" }}>
                  <FadeInLeft>
                    <Typography
                      variant="h3"
                      fontWeight={900}
                      sx={{
                        fontSize: { xs: "1.7rem", sm: "2rem", md: "2.8rem" },
                        color: "#ffffff",
                      }}
                    >
                      {panel.title}
                    </Typography>


                  </FadeInLeft>

                  <FadeInLeft delay={0.15}>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 2,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {panel.subtitle}
                    </Typography>

                  </FadeInLeft>

                  <StaggerContainer delayChildren={0.3}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        gap: { xs: 4, md: 6 },
                        mt: 4,
                        flexWrap: "wrap",
                      }}
                    >
                      {panel.stats.map((stat, idx) => (
                        <StaggerItem key={idx}>
                          <Box sx={{ textAlign: "center" }}>
                            <Typography
                              variant="h4"
                              fontWeight={800}
                              sx={{ color: "#ffffff" }}
                            >
                              {stat.value}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{ color: "rgba(255,255,255,0.75)" }}
                            >
                              {stat.label}
                            </Typography>

                          </Box>
                        </StaggerItem>
                      ))}
                    </Box>
                  </StaggerContainer>

                  <FadeInUp delay={0.5}>
                    <Button
                      onClick={openLeadPopup}   // 🔥 THIS IS THE KEY
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 5,
                        bgcolor: "white",
                        color: "#111",
                        px: { xs: 4, md: 5 },
                        py: 1.5,
                        borderRadius: "50px",
                        fontWeight: 700,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        textTransform: "none",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        "&:hover": { bgcolor: "#f0f0f0" },
                      }}
                    >
                      {panel.cta}
                    </Button>

                  </FadeInUp>
                </Box>

                {/* ================= RIGHT IMAGE (DESKTOP ONLY) ================= */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    position: "relative",
                    width: "50%",
                    justifyContent: "center",
                    overflow: "visible", // 🔥 VERY IMPORTANT
                  }}
                >

                  <FadeInRight delay={0.2}>
                    <Box
                      component="img"
                      src={panel.mainImage}
                      alt={panel.title}
                      sx={{
                        width: "100%",
                        maxWidth: { md: 480, lg: 520 },
                        borderRadius: "20px",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                      }}
                    />
                  </FadeInRight>

                  {/* Floating cards */}
                  {panel.cards.map((card, idx) => {
                    const isTop = card.position === "top";

                    return (
                      <Box
                        key={idx}
                        className="floating-card"
                        sx={{
                          position: "absolute",

                          // 🔥 EXACT POSITIONING (screenshot matched)
                          top: isTop ? "-6%" : "auto",
                          bottom: isTop ? "auto" : "6%",
                          right: isTop ? "-8%" : "4%",

                          width: isTop ? 110 : "auto",
                          height: isTop ? 110 : "auto",
                          px: isTop ? 0 : 2,
                          py: isTop ? 0 : 0.6,

                          borderRadius: isTop ? "18px" : "999px",

                          background: isTop
                            ? "linear-gradient(135deg, #3aa9ff, #6dd5fa)"
                            : "rgba(0,0,0,0.75)",

                          backdropFilter: "blur(14px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,

                          zIndex: 3,
                        }}
                      >
                        <Box
                          component="img"
                          src={card.icon}
                          alt=""
                          sx={{
                            width: isTop ? "70%" : 18,
                            height: isTop ? "70%" : 18,
                            objectFit: "contain",
                            filter: isTop ? "none" : "brightness(0) invert(1)",
                          }}
                        />

                        {!isTop && (
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "#fff",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Live & recorded
                          </Typography>
                        )}
                      </Box>
                    );
                  })}

                </Box>
              </Box>
            </Box>

          </Box>
        )
      })}
    </Box>
  );
}