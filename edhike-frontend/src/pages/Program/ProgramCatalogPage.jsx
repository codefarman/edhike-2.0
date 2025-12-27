import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { programsData } from "../../data/programsData";

import HeroSection from "../../components/ProgramCatalog/HeroSection";
import TrustStrip from "../../components/ProgramCatalog/TrustStrip";
import CategoryTabs from "../../components/ProgramCatalog/CategoryTabs";
import CategoryOverview from "../../components/ProgramCatalog/CategoryOverview";
import ProgramGrid from "../../components/ProgramCatalog/ProgramGrid";
import FAQ from "../../components/ProgramCatalog/FAQ";

/* ---------------- SHARED DATA ---------------- */

const sharedHighlights = [
  "UGC-Entitled Online Degrees",
  "Valid as Regular Campus Programs",
  "Industry-Recognized Certifications",
  "Guided by Education Experts",
];

const heroData = {
  main_heading: "Discover the Right Program for Your Future",
  description:
    "For working professionals with 1–15 years of experience. Learn from top universities with flexible, career-focused programs.",
};

/* ---------------- PAGE ---------------- */

const ProgramCatalogPage = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category");

  const [activeTab, setActiveTab] = useState(0);

  /* 🔥 AUTO-SELECT TAB FROM URL */
  useEffect(() => {
    if (!categorySlug) return;

    const index = programsData.findIndex(
      (cat) => cat.slug === categorySlug
    );

    if (index !== -1) {
      setActiveTab(index);

      // optional: scroll to tabs
      setTimeout(() => {
        document
          .getElementById("programs-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [categorySlug]);

  /* Tabs */
  const categoriesForTabs = programsData.map((cat) => ({
    category: cat.title,
    icon: cat.icon,
    color: cat.color,
  }));

  const activeCategoryData = programsData[activeTab];

  const activeCategory = {
    category: activeCategoryData.title,
    description: activeCategoryData.summary.description,
    duration: activeCategoryData.summary.duration,
    format: activeCategoryData.summary.format,
    career_roles: activeCategoryData.summary.roles.split(", "),
    highlights: [
      "Live Projects",
      "Expert Mentorship",
      "Career Support",
      "Industry Certifications",
    ],
    programs: activeCategoryData.subPrograms,
  };

  return (
    <>
      <HeroSection hero={heroData} />

      <TrustStrip highlights={sharedHighlights} />

      <CategoryTabs
        categories={categoriesForTabs}
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box id="category-overview" mb={6}>
          <CategoryOverview category={activeCategory} />
        </Box>

        <Box id="program-grid" mb={8}>
          <ProgramGrid programs={activeCategory.programs} />
        </Box>
      </Container>

      <FAQ />
    </>
  );
};

export default ProgramCatalogPage;
