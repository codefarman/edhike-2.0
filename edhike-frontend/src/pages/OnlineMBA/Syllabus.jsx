import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Stack,
} from "@mui/material";
import {
  School,
  Payments,
  WorkspacePremium,
  Public,
  AutoAwesome,
} from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";
import { Chip } from "@mui/material";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const ENSURE_ITEMS = [
  { icon: <School />, title: "100% Free Counselling", desc: "Expert guidance at no cost" },
  { icon: <Payments />, title: "No Cost EMI Option", desc: "Flexible payment plans" },
  { icon: <WorkspacePremium />, title: "Career Ready Programs", desc: "Designed for real-world success" },
  { icon: <Public />, title: "UGC-Approved & Globally Recognised Degree", desc: "Valid worldwide" },
  { icon: <AutoAwesome />, title: "Specific Program Designed for Next-Gen Professionals", desc: "Future-focused curriculum" },
];

const year1Sem1 = [
  "Entrepreneurial Practice",
  "Business Communication (WAC)",
  "Managerial Economics",
  "Financial Accounting",
  "Data Visualisation (Excel/Tableau)",
  "Organisational Behaviour",
  "Marketing Management",
];

const year1Sem2 = [
  "Business Research Methods (R / Python)",
  "Operation Management",
  "Human Resource Management",
  "Management Accounting",
  "Financial Management",
  "Legal Aspects of Business",
  "Business Communication (VAC)",
];

const year2Sem3 = [
  "Strategic Management",
  "Term Paper",
  "Electives (Choose Specialization)",
];

const year2Sem4 = [
  "International Business Management",
  "Project",
  "Electives (Continue Specialization)",
];

const electives = [
  "Digital Marketing", "Finance", "Marketing", "Human Resources",
  "Analytics & DS", "BFSI", "FinTech", "Operations Management",
  "International Business", "Information System Management",
  "Project Management", "Supply Chain Management", "Retail Management",
];

const skillSet1 = [
  { label: "Strategic Thinking", value: 90 },
  { label: "Communication", value: 85 },
  { label: "Entrepreneurship", value: 80 },
  { label: "Networking", value: 75 },
  { label: "Time Management", value: 88 },
  { label: "Leadership", value: 90 },
  { label: "Problem-Solving", value: 85 },
  { label: "Decision-Making", value: 82 },
];

const skillSet2 = [
  { label: "Analytical Skills", value: 88 },
  { label: "Finance Skills", value: 86 },
  { label: "Operations Management", value: 84 },
  { label: "Technical Skills", value: 80 },
  { label: "Global Perspective", value: 78 },
  { label: "Teamwork", value: 90 },
  { label: "Self-Discipline", value: 85 },
  { label: "Flexibility", value: 82 },
];

export default function Syllabus() {
  const [year, setYear] = useState(1);
  const [skillSet, setSkillSet] = useState(1);

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* WHAT WE ENSURE - BEAUTIFUL COMPACT CARDS */}
        <FadeInUp>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.8rem" },
              fontWeight: 900,
              mb: { xs: 6, md: 10 },
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What We Ensure
          </Typography>
        </FadeInUp>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {ENSURE_ITEMS.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.title}>
              <FadeInUp delay={i * 0.1}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    textAlign: "center",
                    p: { xs: 2, md: 3 },
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    border: `2px solid transparent`,
                    background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 50px rgba(227,30,36,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 60 },
                      height: { xs: 48, md: 60 },
                      mx: "auto",
                      mb: 1.5,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: GRADIENT,
                      color: "#fff",
                      fontSize: { xs: 24, md: 30 },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    fontWeight={700}
                    sx={{
                      mb: 0.5,
                      fontSize: { xs: "0.8rem", md: "0.95rem" },
                      color: PURPLE,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.7rem", md: "0.85rem" } }}
                  >
                    {item.desc}
                  </Typography>

                </Card>
              </FadeInUp>
            </Grid>
          ))}
        </Grid>


        {/* SYLLABUS + SKILLS ROW */}
        <Box sx={{ mt: 14 , mb: 4 }}>
          <Grid
            container
            spacing={30}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ maxWidth: 1200, mx: "auto" }}
          >
            {/* ================= LEFT : SYLLABUS ================= */}
            <Grid item xs={12} md={6}>
              <FadeInUp>
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    mb: 3,
                    color: RED,
                  }}
                >
                  Online MBA Syllabus
                </Typography>

                {/* YEAR TOGGLE */}
                <Stack direction="row" spacing={2} mb={4}>
                  <Button
                    onClick={() => setYear(1)}
                    variant={year === 1 ? "contained" : "outlined"}
                    sx={{
                      px: 3,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 700,
                      bgcolor: year === 1 ? PURPLE : "transparent",
                      color: year === 1 ? "#fff" : PURPLE,
                    }}
                  >
                    Year 1
                  </Button>

                  <Button
                    onClick={() => setYear(2)}
                    variant={year === 2 ? "contained" : "outlined"}
                    sx={{
                      px: 3,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 700,
                      bgcolor: year === 2 ? PURPLE : "transparent",
                      color: year === 2 ? "#fff" : PURPLE,
                    }}
                  >
                    Year 2
                  </Button>
                </Stack>

                {/* SEMESTER CARDS */}
                <Stack spacing={4}>
                  {[0, 1].map((idx) => {
                    const semTitle =
                      year === 1
                        ? idx === 0
                          ? "Semester 1"
                          : "Semester 2"
                        : idx === 0
                          ? "Semester 3"
                          : "Semester 4";

                    const subjects =
                      year === 1
                        ? idx === 0
                          ? year1Sem1
                          : year1Sem2
                        : idx === 0
                          ? year2Sem3
                          : year2Sem4;

                    return (
                      <Card
                        key={semTitle}
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: "1.2rem",
                            color: PURPLE,
                          }}
                        >
                          {semTitle}
                        </Typography>

                        <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                          {subjects.map((s) => (
                            <Typography
                              component="li"
                              key={s}
                              sx={{ fontSize: "0.95rem" }}
                            >
                              {s}
                            </Typography>
                          ))}
                        </Stack>
                      </Card>
                    );
                  })}
                </Stack>
              </FadeInUp>
            </Grid>

            {/* ================= RIGHT : SKILLS ================= */}
            <Grid item xs={12} md={6}>
              <FadeInUp delay={0.1}>
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    mb: 3,
                    color: "#0f172a",
                  }}
                >
                  Skills You’ll Master
                </Typography>

                {/* SKILL TOGGLE */}
                <Stack direction="row" spacing={2} mb={4}>
                  <Button
                    onClick={() => setSkillSet(1)}
                    variant={skillSet === 1 ? "contained" : "outlined"}
                    sx={{
                      px: 3,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 700,
                      bgcolor: skillSet === 1 ? RED : "transparent",
                      color: skillSet === 1 ? "#fff" : PURPLE,
                    }}
                  >
                    Skill Set 1
                  </Button>

                  <Button
                    onClick={() => setSkillSet(2)}
                    variant={skillSet === 2 ? "contained" : "outlined"}
                    sx={{
                      px: 3,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 700,
                      bgcolor: skillSet === 2 ? RED : "transparent",
                      color: skillSet === 2 ? "#fff" : PURPLE,
                    }}
                  >
                    Skill Set 2
                  </Button>
                </Stack>

                {/* SKILLS LIST */}
                <Stack spacing={3}>
                  {(skillSet === 1 ? skillSet1 : skillSet2).map((skill) => (
                    <Box key={skill.label}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.8,
                        }}
                      >
                        <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                          {skill.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: 800,
                            color: RED,
                          }}
                        >
                          {skill.value}%
                        </Typography>
                      </Box>

                      <LinearProgress
                        variant="determinate"
                        value={skill.value}
                        sx={{
                          height: 8,
                          borderRadius: 10,
                          bgcolor: "#eef2f7",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 10,
                            background: "linear-gradient(90deg,#4338ca,#6366f1)",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </FadeInUp>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}