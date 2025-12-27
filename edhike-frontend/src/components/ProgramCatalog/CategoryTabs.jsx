import {
  Box,
  ButtonBase,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT, SHADOW_SOFT, PURPLE } from "../../theme/brand";

const CategoryTabs = ({ categories, value, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="programs-section"   
      sx={{
        py: { xs: 4, md: 10 },
        backgroundColor: "#fafafa",
        borderBottom: "1px solid #eee",
        textAlign: "center",

      }}
    >
      <FadeInUp viewport={{ once: true, margin: "-80px" }}>

        {/* Heading */}
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.15rem", md: "1.8rem", lg: "2rem" },
            mb: { xs: 1.8, md: 2.5 },
          }}
        >
          Explore Our Programs
        </Typography>

        {/* Micro CTA (GUIDANCE TEXT) */}
        <Typography
          sx={{
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            color: "text.secondary",
            mb: { xs: 2.5, md: 3.5 },
          }}
        >
          Select a category to see best-matched programs
        </Typography>

        {/* Category Pills */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 1.2, sm: 1.8 },
            px: { xs: 1.5, md: 4 },
          }}
        >
          {categories.map((cat, index) => {
            const active = value === index;

            return (
              <ButtonBase
                key={index}
                onClick={() => onChange(document
                        .getElementById("category-overview")
                        ?.scrollIntoView({ behavior: "smooth" }), index)}
                sx={{
                  borderRadius: 50,
                  px: { xs: 2, sm: 4 },
                  py: { xs: 1, sm: 1.6 },
                  minWidth: { xs: "48%", sm: 140 },

                  background: active ? GRADIENT : "#ffffff",
                  color: active ? "#ffffff" : "text.primary",
                  fontWeight: active ? 700 : 600,
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },

                  boxShadow: SHADOW_SOFT,
                  transition: "all 0.25s ease",

                  "&:hover": !isMobile
                    ? {
                        background: GRADIENT,
                        color: "#ffffff",
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 28px rgba(88,41,167,0.22)",
                      }
                    : {},

                  "&:active": {
                    transform: "scale(0.97)",
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    textTransform: "none",
                    whiteSpace: "normal",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {cat.category}
                </Typography>
              </ButtonBase>
            );
          })}
        </Box>

        {/* Helper CTA (OPTIONAL, HIGH-CONVERSION) */}
        {/* <Typography
          sx={{
            mt: { xs: 3, md: 4 },
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            fontWeight: 600,
            color: PURPLE,
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("program-grid")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Show programs for me →
        </Typography> */}

      </FadeInUp>
    </Box>
  );
};

export default CategoryTabs;
