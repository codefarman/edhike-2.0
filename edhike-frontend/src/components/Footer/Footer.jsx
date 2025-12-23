// src/components/Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Link,
  TextField,
  Button,
} from "@mui/material";
import {
  Phone,
  Mail,
  LocationOn,
  ArrowRight,
  LinkedIn,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";

export default function Footer() {

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "#programs" },
    { name: "Compare Tool", href: "/compare" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const courses = [
    { name: "MBA & Management", href: "/courses/mba" },
    { name: "Data Science", href: "/courses/data-science" },
    { name: "AI & Machine Learning", href: "/courses/ai-ml" },
    { name: "Digital Marketing", href: "/courses/digital-marketing" },
  ];

  const socialLinks = [
    { Icon: LinkedIn, url: "https://www.linkedin.com/company/edhike-in/" },
    { Icon: Facebook, url: "https://www.facebook.com/edhikeeducation" },
    { Icon: Instagram, url: "https://www.instagram.com/edhike_education" },
    { Icon: YouTube, url: "https://www.youtube.com/@Edhike_Education-dg8iu" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        color: "#555",
        py: { xs: 8, md: 10 },
        borderTop: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4, lg: 8 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <FadeInUp>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  mb: 3,
                  lineHeight: 1,
                  color: RED,
                }}
              >
                Ed
                <span style={{ color: PURPLE }}>Hike</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 320,
                  fontSize: "0.95rem",
                }}
              >
                India’s trusted platform for working professionals to upskill and transform their careers with top programs.
              </Typography>

              <Stack direction="row" spacing={2}>
                {socialLinks.map(({ Icon, url }, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: "#f8f8f8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: PURPLE,
                      transition: "all 0.3s",
                      border: "1px solid #eee",
                      "&:hover": {
                        bgcolor: PURPLE,
                        color: "white",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 20px rgba(88,41,167,0.25)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 22 }} />
                  </Box>
                ))}
              </Stack>
            </FadeInUp>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <FadeInUp delay={0.1}>
              <Typography
                variant="h6"
                sx={{ color: PURPLE, fontWeight: 800, mb: 3, fontSize: "1.1rem" }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1.8}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#666",
                      fontSize: "0.95rem",
                      "&:hover": { color: PURPLE },
                    }}
                  >
                    <ArrowRight sx={{ fontSize: 16, color: RED }} />
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </FadeInUp>
          </Grid>

          {/* Popular Programs */}
          <Grid item xs={6} sm={4} md={3}>
            <FadeInUp delay={0.2}>
              <Typography
                variant="h6"
                sx={{ color: PURPLE, fontWeight: 800, mb: 3, fontSize: "1.1rem" }}
              >
                Popular Programs
              </Typography>
              <Stack spacing={1.8}>
                {courses.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "#666",
                      fontSize: "0.95rem",
                      "&:hover": { color: PURPLE },
                    }}
                  >
                    <Box sx={{ width: 7, height: 7, bgcolor: PURPLE, borderRadius: "50%" }} />
                    {c.name}
                  </Link>
                ))}
              </Stack>
            </FadeInUp>
          </Grid>

          {/* Newsletter & Contact */}
          <Grid item xs={12} md={3}>
            <FadeInUp delay={0.3}>
              <Typography
                variant="h6"
                sx={{ color: PURPLE, fontWeight: 800, mb: 3, fontSize: "1.1rem" }}
              >
                Stay Updated
              </Typography>

              <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: "0.9rem" }}>
                Get career tips and exclusive program offers.
              </Typography>

              <Stack spacing={1.8} sx={{ mt: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone sx={{ color: PURPLE, fontSize: 18 }} />
                  <Link
                    href="tel:+91 9236395274"
                    underline="none"
                    sx={{ color: "#666", fontSize: "0.95rem", "&:hover": { color: PURPLE } }}
                  >
                    +91 9236395274
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Mail sx={{ color: PURPLE, fontSize: 18 }} />
                  <Link
                    href="mailto:info@edhike.in?subject=Inquiry%20from%20EdHike%20Website&body=Hi%20EdHike%20Team,"
                    underline="none"
                    sx={{
                      color: "#666",
                      fontSize: "0.95rem",
                      "&:hover": { color: PURPLE },
                    }}
                  >
                    info@edhike.in
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOn sx={{ color: PURPLE, fontSize: 18 }} />
                  <Typography variant="body2" sx={{ color: "#666", fontSize: "0.95rem" }}>
                    Lucknow, Uttar Pradesh, India
                  </Typography>
                </Box>
              </Stack>
            </FadeInUp>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <FadeInUp delay={0.5}>
          <Box
            sx={{
              mt: 8,
              pt: 6,
              borderTop: "1px solid #eee",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Typography variant="body2" sx={{ color: "#888", fontSize: "0.875rem" }}>
                © 2025 EdHike — All Rights Reserved.
              </Typography>
              <Stack direction="row" spacing={4}>
                <Link href="/terms" underline="none" sx={{ color: "#888", fontSize: "0.875rem", "&:hover": { color: PURPLE } }}>
                  Terms
                </Link>
                <Link href="/privacy" underline="none" sx={{ color: "#888", fontSize: "0.875rem", "&:hover": { color: PURPLE } }}>
                  Privacy Policy
                </Link>
                <Link href="/refund" underline="none" sx={{ color: "#888", fontSize: "0.875rem", "&:hover": { color: PURPLE } }}>
                  Refund Policy
                </Link>
              </Stack>
            </Stack>
          </Box>
        </FadeInUp>
      </Container>
    </Box>
  );
}