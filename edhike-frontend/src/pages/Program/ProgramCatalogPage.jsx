import { useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

import { programsData } from "../../data/programsData"; // New data source!

import HeroSection from "../../components/ProgramCatalog/HeroSection";
import TrustStrip from "../../components/ProgramCatalog/TrustStrip";
import CategoryTabs from "../../components/ProgramCatalog/CategoryTabs";
import CategoryOverview from "../../components/ProgramCatalog/CategoryOverview";
import ProgramGrid from "../../components/ProgramCatalog/ProgramGrid";

// Shared highlights (since new data doesn't include them — adjust as needed)
const sharedHighlights = [
  "UGC-Entitled Online Degrees",
  "Valid as Regular Campus Programs",
  "Industry-Recognized Certifications",
  "Guided by Education Experts",
];

// Placeholder hero until you add one — or derive from data
const placeholderHero = {
  main_heading: "Explore Top Online Programs",
  subheading: "From Leading Global Universities",
  description: "Discover career-aligned master's, PG programs, and professional certificates in high-demand fields.",
};

const ProgramCatalogPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Map new data structure to expected shape
  const categoriesForTabs = programsData.map((cat) => ({
    category: cat.title,        // Tab label
    icon: cat.icon,             // Optional: if you want icons in tabs
    color: cat.color,
  }));

  const activeCategory = {
    category: programsData[activeTab].title,
    description: programsData[activeTab].summary.description,
    duration: programsData[activeTab].summary.duration,
    format: programsData[activeTab].summary.format,
    career_roles: programsData[activeTab].summary.roles.split(", "),
    highlights: ["Live Projects", "Expert Mentorship", "Job Assistance"], // Or derive dynamically
    programs: programsData[activeTab].subPrograms, // For ProgramGrid
  };

  return (
    <>
      {/* Use placeholder or pass real hero data later */}
      <HeroSection hero={placeholderHero} />

      <TrustStrip highlights={sharedHighlights} />

      <CategoryTabs
        categories={categoriesForTabs}
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <CategoryOverview category={activeCategory} />

        <Grid container spacing={4}>
          {/* Future sidebar filters */}
          <Grid item xs={12} md={3}>
            <Box sx={{ position: { md: "sticky" }, top: 100, alignSelf: "flex-start" }}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Refine Results
              </Typography>
              {/* Filters go here later */}
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <ProgramGrid programs={activeCategory.programs} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProgramCatalogPage;