// // ProgramCard.jsx - Compact with top image
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Chip,
//   Stack,
//   Box,
// } from "@mui/material";
// import { FadeInUp } from "../Animation/Motion";
// import { GRADIENT, PURPLE, RED, SHADOW_SOFT } from "../../theme/brand";

// const ProgramCard = ({ program }) => {
//   const hero = program.hero_section;
//   const overview = program.program_overview;

//   // Replace with category-specific SVG URLs
//   const cardImage = "https://static.vecteezy.com/system/resources/previews/023/849/044/original/illustration-of-blue-brain-top-view-half-human-half-machine-brain-with-circuits-on-dark-circuit-board-background-with-random-lights-with-copy-space-artificial-intelligence-concept-vector.jpg";

//   return (
//     <FadeInUp>
//       <Card
//         sx={{
//           width: "100%",
//           borderRadius: 3,
//           overflow: "hidden",
//           boxShadow: SHADOW_SOFT,
//           transition: "0.3s ease",
//           "&:hover": { transform: "translateY(-8px)", boxShadow: "0 16px 32px rgba(0,0,0,0.12)" },
//         }}
//       >
//         <Box sx={{ height: 120, position: "relative" }}>
//           <CardMedia
//             component="img"
//             image={cardImage}
//             alt={hero.main_heading}
//             sx={{ height: "100%", objectFit: "cover" }}
//           />
//           {hero?.badge && (
//             <Chip
//               label={hero.badge}
//               size="small"
//               sx={{
//                 position: "absolute",
//                 top: 12,
//                 left: 12,
//                 background: "rgba(255,255,255,0.9)",
//                 color: RED,
//                 fontWeight: 600,
//                 backdropFilter: "blur(4px)",
//               }}
//             />
//           )}
//         </Box>

//         <CardContent sx={{ py: 2 }}>
//           <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: "1.1rem" }}>
//             {hero.main_heading}
//           </Typography>
//           <Typography variant="body2" fontWeight={600} color="primary" gutterBottom>
//             {hero.university}
//           </Typography>
//           {overview?.duration && (
//             <Typography variant="caption" color="text.secondary">
//               ⏱ {overview.duration}
//             </Typography>
//           )}
//         </CardContent>

//         <Stack direction="row" spacing={1} p={2} pt={0}>
//           <Button size="small" variant="outlined" fullWidth>
//             View Program
//           </Button>
//           <Button size="small" variant="contained" fullWidth sx={{ background: GRADIENT, color: "#fff" }}>
//             Get Counselling
//           </Button>
//         </Stack>
//       </Card>
//     </FadeInUp>
//   );
// };

// export default ProgramCard;



// ProgramCard.jsx - Updated for new programsData structure
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT, RED, SHADOW_SOFT } from "../../theme/brand";
import { useState } from "react";

/* SVG PLACEHOLDER */
const PlaceholderSVG = () => (
  <Box
    sx={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, rgba(88,41,167,0.08), rgba(227,30,36,0.08))",
    }}
  >
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="url(#grad)" />
      <path
        d="M7 9h10M7 13h6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#5829A7" />
          <stop offset="1" stopColor="#E31E24" />
        </linearGradient>
      </defs>
    </svg>
  </Box>
);

const ProgramCard = ({ program }) => {
  const { title, institute, duration, badge, image, wixUrl } = program;
  const [imgError, setImgError] = useState(false);

  return (
    <FadeInUp>
      <Card
            sx={{
              width: { xs: "100%", sm: "100%" },
              maxWidth: 350,
              mx: "auto",
              height: 320,
              borderRadius: 4,
              bgcolor: "#fff",
              border: "1px solid #eee",
              boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 18px 38px rgba(88,41,167,0.18)",
              },
            }}
          >
        {/* MEDIA — FIXED HEIGHT */}
        <Box sx={{ height: 140, position: "relative", overflow: "hidden" }}>
          {image && !imgError ? (
            <Box
              component="img"
              src={image}
              alt=""
              onError={() => setImgError(true)}   
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <PlaceholderSVG />
          )}

          {badge && (
            <Chip
              label={badge}
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "rgba(255,255,255,0.95)",
                color: RED,
                fontWeight: 700,
                fontSize: "0.7rem",
              }}
            />
          )}
        </Box>

        {/* CONTENT */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            fontWeight={800}
            sx={{
              fontSize: "0.9rem",
              mb: 0.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </Typography>

          {institute && (
            <Stack direction="row" spacing={0.8} alignItems="center" mb={0.5}>
              <SchoolOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2" fontWeight={600}>
                {institute}
              </Typography>
            </Stack>
          )}

          {duration && (
            <Stack direction="row" spacing={0.8} alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{duration}</Typography>
            </Stack>
          )}
        </CardContent>

        {/* ACTIONS */}
        <Stack direction="row" spacing={1} p={1} pt={0}>
          <Button
  component="a"
  href={wixUrl}
  rel="noopener noreferrer"
  sx={{
    background: GRADIENT,
    color: "#fff",
    border: "none",
    borderRadius: 50,
    px: 2.2,
    py: 0.55,
    fontSize: "0.7rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "transform 0.25s ease",
    "&:hover": {
      transform: "scale(1.06)",
    },
  }}
>
  View Program
</Button>

        </Stack>
      </Card>
    </FadeInUp>
  );
};

export default ProgramCard;
