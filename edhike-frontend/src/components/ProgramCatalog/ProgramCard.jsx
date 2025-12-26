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
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT, RED, SHADOW_SOFT } from "../../theme/brand";

const ProgramCard = ({ program }) => {
  // Direct access to new flat structure
  const title = program.title;
  const institute = program.institute;
  const duration = program.duration;
  const badge = program.badge; // optional, if you add later
  const image = program.image || "https://static.vecteezy.com/system/resources/previews/023/849/044/original/illustration-of-blue-brain-top-view-half-human-half-machine-brain-with-circuits-on-dark-circuit-board-background-with-random-lights-with-copy-space-artificial-intelligence-concept-vector.jpg";

  return (
    <FadeInUp>
      <Card
        sx={{
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: SHADOW_SOFT,
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box sx={{ height: 120, position: "relative" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ height: "100%", objectFit: "cover" }}
          />
          {badge && (
            <Chip
              label={badge}
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "rgba(255,255,255,0.9)",
                color: RED,
                fontWeight: 600,
                backdropFilter: "blur(4px)",
              }}
            />
          )}
        </Box>

        <CardContent sx={{ py: 2 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: "1.1rem" }}>
            {title}
          </Typography>
          <Typography variant="body2" fontWeight={600} color="primary" gutterBottom>
            {institute}
          </Typography>
          {duration && (
            <Typography variant="caption" color="text.secondary">
              ⏱ {duration}
            </Typography>
          )}
        </CardContent>

        <Stack direction="row" spacing={1} p={2} pt={0}>
          <Button size="small" variant="outlined" fullWidth>
            View Program
          </Button>
          <Button
            size="small"
            variant="contained"
            fullWidth
            sx={{ background: GRADIENT, color: "#fff" }}
          >
            Get Counselling
          </Button>
        </Stack>
      </Card>
    </FadeInUp>
  );
};

export default ProgramCard;