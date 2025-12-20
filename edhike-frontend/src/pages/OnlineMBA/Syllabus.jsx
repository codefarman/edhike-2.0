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
    <Box component="section" sx={{ py: { xs: 1, md: 2, lg: 2 },  bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* WHAT WE ENSURE - BEAUTIFUL COMPACT CARDS */}
        {/* WHAT WE ENSURE – COMPACT, EQUAL SIZE CARDS */}
<FadeInUp>
  <Typography
    align="center"
    sx={{
      fontSize: { xs: "1.6rem", md: "2.4rem" },
      fontWeight: 900,
      mb: { xs: 4, md: 6 },
      background: GRADIENT,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    What We Ensure
  </Typography>
</FadeInUp>

<Grid container spacing={{ xs: 1.5, md: 2 }} justifyContent="center">
  {ENSURE_ITEMS.map((item, i) => (
    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.2 }} key={item.title}>
      <FadeInUp delay={i * 0.08}>
        <Card
          sx={{
            height: "100%",
            minHeight: { xs: 130, md: 130 , lg: 130 },
            borderRadius: 3,
            textAlign: "center",
            px: { xs: 1.5, md: 2, lg: 3 },
            py: { xs: 2, md: 2.5, lg: 3 },
            border: "1px solid #eee",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            transition: "0.25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 30px rgba(227,30,36,0.15)",
              borderColor: RED,
            },
          }}
        >
          {/* ICON */}
          <Box
            sx={{
              width: 42,
              height: 42,
              mx: "auto",
              mb: 0.2,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: GRADIENT,
              color: "#fff",
              fontSize: 22,
            }}
          >
            {item.icon}
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              lineHeight: 1.25,
              mb: 0.4,
              color: PURPLE,
            }}
          >
            {item.title}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", md: "0.8rem" },
              color: "text.secondary",
              lineHeight: 1.3,
            }}
          >
            {item.desc}
          </Typography>
        </Card>
      </FadeInUp>
    </Grid>
  ))}
</Grid>



        {/* SYLLABUS + SKILLS ROW */}
        <Box sx={{ mt: 7 , mb: 4 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 , lg: 25 }}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ maxWidth: 1200, mx: "auto" }}
          >
            {/* ================= LEFT : SYLLABUS ================= */}
            <Grid item xs={12} md={6}>
              <FadeInUp>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem" , md: "1.8rem", lg: "2rem" },
                    fontWeight: 900,
                    mb: 2,
                    color: RED,
                  }}
                >
                  Online MBA Syllabus
                </Typography>

                {/* YEAR TOGGLE */}
                <Stack direction="row" spacing={2} mb={1}>
                  <Button
                    onClick={() => setYear(1)}
                    variant={year === 1 ? "contained" : "outlined"}
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 500,
                      fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
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
                      px: 2,
                      py: 0.8,
                      borderRadius: 50,
                      fontWeight: 500,
                      fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
                      bgcolor: year === 2 ? PURPLE : "transparent",
                      color: year === 2 ? "#fff" : PURPLE,
                    }}
                  >
                    Year 2
                  </Button>
                </Stack>

                {/* SEMESTER CARDS */}
                <Stack spacing={0}>
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
                          mb: -2,
                          borderRadius: 4,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 800,
                            mb: 1,
                            fontSize: { xs: "1rem", md: "1.2rem", lg: "1.3rem" },
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
                              sx={{ fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" }, color: "text.secondary" }}
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
                    fontSize: { xs: "1.1rem" , md: "1.8rem", lg: "2rem" },
                    fontWeight: 900,
                    mb: 3,
                    color: "#5829A7",
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
                      fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
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
                      fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
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
                          mb: 0.6,
                        }}
                      >
                        <Typography sx={{ fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" }, fontWeight: 700 }}>
                          {skill.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: "0.7rem", md: "0.8rem", lg: "0.9rem" },
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