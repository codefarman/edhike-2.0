import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
} from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";
import { useLeadPopup } from "../../context/LeadPopupContext";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;



const UNIVERSITIES = [
  { name: "Amity University", emi: "₹8291*", approvals: "UGC, AICTE", logo: "/logos/Universities/Amity-univ-logo.jpeg" },
  { name: "OP Jindal University", emi: "₹7500*", approvals: "UGC", logo: "/logos/Universities/OP-Jindal-Univ-logo.jpeg" },
  { name: "Galgotias University", emi: "₹3200*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/galgotia-university-min.jpg" },
  { name: "Parul University", emi: "₹5400*", approvals: "UGC, NAAC A++", logo: "/logos/Universities/parul-university.jpg" },
  { name: "VGU University", emi: "₹4500*", approvals: "UGC", logo: "/logos/Universities/vgu-logo.png" },
  { name: "Golden Gate University", emi: "₹9800*", approvals: "WES, International", logo: "/logos/Universities/golden-gate-uni_logo-min.png" },
  { name: "Uttranchal University", emi: "₹4800*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/uttranchal-univ-logo.png" },
  { name: "MMU University", emi: "₹5100*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/mmu-univ-logo_11zon.png" },
  { name: "GLA University", emi: "₹4292*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/GLA-univ-11zon.png" },
  { name: "Jain University", emi: "₹8166*", approvals: "UGC, NAAC A++", logo: "/logos/Universities/jain-univ-logo.png" },
  { name: "Manipal University Jaipur", emi: "₹7291*", approvals: "UGC, NAAC A++", logo: "/logos/Universities/manipal-univ-logo-min.png" },
  { name: "Kurukshetra University", emi: "₹3900*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/kurukshetra-univ-logo.png" },
  { name: "Shoolini University", emi: "₹6200*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/shoolini-univ-img-min.png" },
  { name: "Sharda University", emi: "₹5900*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/sharda-univ-img-min.png" },
  { name: "DY Patil University", emi: "₹7229*", approvals: "UGC, NAAC A++", logo: "/logos/Universities/DPU-univ-logo-min.png" },
  { name: "Chandigarh University", emi: "₹6875*", approvals: "UGC, NAAC A+", logo: "/logos/Universities/chandigarh-univ-logo.webp" },
  { name: "DY Patil Navi Mumbai", emi: "₹7400*", approvals: "UGC", logo: "/logos/Universities/DYP-univ-navi-mumbai-logo.png" },
  { name: "Lovely Professional University", emi: "₹6166*", approvals: "UGC, NAAC A++", logo: "/logos/Universities/LPU-univ-logo.png" },
  { name: "Liverpool John Moores University", emi: "₹10,500*", approvals: "WES, International", logo: "/logos/Universities/liverpool-john-moores-univ-img.webp" },
];


const SPECIALIZATIONS = [
  "Finance Management",
  "HR Management",
  "Marketing and Sales",
  "Business Analytics",
  "Data Science",
  "IT Management",
  "Operations Management",
  "Healthcare Management",
  "International Business Management",
  "AI and Machine Learning (Dual)",
  "Project Management",
  "Digital Marketing",
];

const CAREERS = [
  { role: "Portfolio Manager", salary: "5 LPA to 37.2 LPA" },
  { role: "Consultant", salary: "4.2 LPA to 25.3 LPA" },
  { role: "Business Development Manager", salary: "5.2 LPA to 15.8 LPA" },
  { role: "Security/Investment Analyst", salary: "6 LPA to 10.9 LPA" },
  { role: "Finance Manager", salary: "4.5 LPA to 37 LPA" },
  { role: "Marketing Manager", salary: "5.2 LPA to 25.5 LPA" },
  { role: "Project Manager", salary: "6 LPA to 30 LPA" },
  { role: "Management Consultant", salary: "5.6 LPA to 37.5 LPA" },
  { role: "Business Operations Manager", salary: "7 LPA to 31.5 LPA" },
];

const COMPANIES = [
  "ICICI Lombard",
  "Mphasis",
  "Airtel",
  "IndiaMART",
  "NIIT",
  "Coforge",
  "InfoTech",
  "Maruti Suzuki",
  "EY (Ernst & Young)",
  "Teleperformance",
  "Genpact",
  "Accenture",
];

export default function Universities() {
      const { openLeadPopup } = useLeadPopup();
  return (
    <Box component="section" sx={{ py: { xs: 2, md: 4, lg: 2 }, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        {/* UNIVERSITIES - COMPACT + COLOR-ENHANCED */}
        <FadeInUp>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
              fontWeight: 900,
              mb: { xs: 5, md: 8 },
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Online MBA from Top Universities
          </Typography>
        </FadeInUp>

        <Grid container spacing={{ xs: 1, md: 2, lg: 2 }} mt={{ xs: -2, md: -2, lg: -2 }} justifyContent="center">
          {UNIVERSITIES.map((uni, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.4, lg: 1.4 }}  key={uni.name}>
              <FadeInUp delay={index * 0.02}>
                <Card
                  sx={{
                    p: { xs: 1, md: 1.8, lg: 1 }, // 🔥 smaller padding mobile
                    borderRadius: 3,
                    textAlign: "center",
                    height: "100%",
                    minHeight: { xs: 150, md: 150 , lg: 150 }, // 🔥 SAME SIZE MOBILE
                    border: "1px solid #eee",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* LOGO WRAPPER */}
                  <Box
                    sx={{
                      height: { xs: 36, md: 46 , lg: 50}, // 🔥 smaller mobile
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 0.2,
                    }}
                  >
                    <Box
                      component="img"
                      src={uni.logo}
                      alt={uni.name}
                      sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.68rem", md: "0.7rem", lg: "0.8rem" }, // 🔥 smaller
                      fontWeight: 700,                      
                      color: PURPLE,
                      lineHeight: 1.2,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {uni.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.68rem", md: "0.8rem" },
                      fontWeight: 700,
                      color: RED,
                    }}
                  >
                    EMI {uni.emi}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.6rem",
                      color: "text.secondary",
                    }}
                  >
                    {uni.approvals}
                  </Typography>
                </Card>

              </FadeInUp>
            </Grid>
          ))}
        </Grid>


        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            size="large"
            onClick={openLeadPopup}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 700,
              fontSize: { xs: "0.6rem", md: "0.8rem", lg: "0.9rem" }, // 🔥 smaller
              background: GRADIENT,
              color: "#fff",
              boxShadow: "0 8px 25px rgba(227,30,36,0.3)",
              "&:hover": { transform: "translateY(-3px)", boxShadow: "0 15px 35px rgba(227,30,36,0.4)" },
            }}
          >
            Explore More Universities
          </Button>
        </Box>

        {/* SPECIALIZATIONS - COLOR-ENHANCED */}
        <FadeInUp delay={0.2}>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
              fontWeight: 800,
              mt: 4,
              mb: 2,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Popular Specializations for Online MBA
          </Typography>
        </FadeInUp>

        <Grid container spacing={{ xs: 1.2, md: 2.5 }} justifyContent="center">
          {SPECIALIZATIONS.map((spec, i) => (
            <Grid size={{ xs: 6, sm: 2, md: 2, lg: 2 }} key={spec}>
              <FadeInUp delay={0.2 + i * 0.02}>
                <Card
                  sx={{
                    p: { xs: 1.2, md: 2.5 }, // 🔥 smaller mobile
                    borderRadius: 3,
                    border: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: "0.75rem", md: "1rem" }, // 🔥 smaller
                      color: PURPLE,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {spec}
                  </Typography>
                </Card>

              </FadeInUp>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            size="large"
            onClick={openLeadPopup}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 700,
              fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" }, // 🔥 smaller
              background: GRADIENT,
              color: "#fff",
              boxShadow: "0 8px 25px rgba(227,30,36,0.3)",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            Explore More Specializations
          </Button>
        </Box>

        {/* CAREER OPTIONS - COLOR-ENHANCED */}
        <FadeInUp delay={0.1}>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
              fontWeight: 800,
              mt: 4,
              mb: 2,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Career Options After Online MBA
          </Typography>
        </FadeInUp>

        <Grid container spacing={3} justifyContent="center">
          {CAREERS.map((career, i) => (
            <Grid size={{ xs: 6, sm: 2, md: 2, lg: 2 }} key={career.role}>
              <FadeInUp delay={0.3 + i * 0.02}>
                <Card
                  sx={{
                    p: { xs: 1.5, md: 3 }, // 🔥 reduced
                    textAlign: "center",
                    borderRadius: 4,
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <Typography
                    fontWeight={700}
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1.05rem" },
                      mb: 0.5,
                      color: PURPLE,
                      lineHeight: 1.2,
                    }}
                  >
                    {career.role}
                  </Typography>
                  <Typography
                    sx={{
                      color: RED,
                      fontWeight: 600,
                      fontSize: { xs: "0.75rem", md: "1rem" },
                    }}
                  >
                    {career.salary}
                  </Typography>
                </Card>

              </FadeInUp>
            </Grid>
          ))}
        </Grid>

        {/* HIRING COMPANIES - COLOR-ENHANCED */}
        <FadeInUp delay={0.3}>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" },
              fontWeight: 800,
              mt: 4,
              mb: 2,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Companies That Hire Online MBA Graduates
          </Typography>
        </FadeInUp>

        <Grid container spacing={3} justifyContent="center">
          {COMPANIES.map((company, i) => (
            <Grid size={{ xs: 6, sm: 2, md: 2, lg: 2 }} key={company}>
              <FadeInUp delay={0.4 + i * 0.02}>
                <Card
                  sx={{
                    p: { xs: 1.2, md: 2.5 }, // 🔥 reduced
                    textAlign: "center",
                    borderRadius: 4,
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <Typography
                    fontWeight={700}
                    sx={{
                      fontSize: { xs: "0.75rem", md: "1.05rem" },
                      color: PURPLE,
                    }}
                  >
                    {company}
                  </Typography>
                </Card>

              </FadeInUp>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
          onClick={openLeadPopup}
            variant="contained"
            size="large"
            sx={{
              px: 3,
              py: 1,
              borderRadius: 50,
              fontWeight: 800,
              fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
              background: GRADIENT,
              color: "#fff",
              boxShadow: "0 10px 30px rgba(227,30,36,0.3)",
              "&:hover": { transform: "translateY(-3px)", boxShadow: "0 18px 40px rgba(227,30,36,0.4)" },
            }}
          >
            Get Free Career Guidance
          </Button>
        </Box>
      </Container>
    </Box>
  );
}