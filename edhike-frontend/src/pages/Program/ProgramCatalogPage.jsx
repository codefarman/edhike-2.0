import { useState } from "react";
import { Container, Grid, Box } from "@mui/material";

import { programsPageData } from "../../data/programsPageData";

import HeroSection from "../../components/ProgramCatalog/HeroSection";
import TrustStrip from "../../components/ProgramCatalog/TrustStrip";
import CategoryTabs from "../../components/ProgramCatalog/CategoryTabs";
import CategoryOverview from "../../components/ProgramCatalog/CategoryOverview";
// import FiltersSidebar from "../../components/ProgramCatalog/FiltersSidebar";
import ProgramGrid from "../../components/ProgramCatalog/ProgramGrid";

const ProgramCatalogPage = () => {
  const { hero_section, program_categories, highlights } = programsPageData;
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = program_categories[activeTab];

  return (
    <>
      <HeroSection hero={hero_section} />
      <TrustStrip highlights={highlights} />

      <CategoryTabs
        categories={program_categories}
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <CategoryOverview category={activeCategory} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {/* <FiltersSidebar /> */}
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
