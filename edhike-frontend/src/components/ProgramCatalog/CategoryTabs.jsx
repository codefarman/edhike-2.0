import {
  Box,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FadeInUp } from "../Animation/Motion"; // Only need FadeInUp for the container
import { PURPLE, RED, SHADOW_SOFT } from "../../theme/brand";

const CategoryTabs = ({ categories, value, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "sticky",
        top: { xs: 56, sm: 64 },
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eee",
        boxShadow: SHADOW_SOFT,
        backdropFilter: "blur(10px)", // Modern glass effect
      }}
    >
      <FadeInUp viewport={{ once: true, margin: "-80px" }}>
        <Tabs
          value={value}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          centered={!isMobile} // Centers when there's space, scrollable on mobile
          TabIndicatorProps={{
            sx: {
              background: `linear-gradient(90deg, ${PURPLE} 0%, ${RED} 100%)`,
              height: 4,
              borderRadius: "2px",
            },
          }}
          sx={{
            minHeight: { xs: 48, sm: 56 },
            "& .MuiTabs-flexContainer": {
              justifyContent: isMobile ? "flex-start" : "center", // Perfect centering on desktop
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              minWidth: { xs: 100, sm: 140 },
              px: { xs: 2, sm: 3 },
              color: "text.secondary",
              opacity: 1,
              "&.Mui-selected": {
                color: PURPLE,
                fontWeight: 700,
              },
            },
          }}
        >
          {categories.map((cat, index) => (
            <Tab
              key={index}
              label={cat.category}
              // Fully clickable — no wrapper interference!
            />
          ))}
        </Tabs>
      </FadeInUp>
    </Box>
  );
};

export default CategoryTabs;