import { Card, CardContent, Typography, Button, Chip, Stack } from "@mui/material";
import { GRADIENT } from "../../theme/brand";

const ProgramCard = ({ program }) => {
  const hero = program.hero_section;

  return (
    <Card
  sx={{
    height: "100%",
    transition: "0.3s",
    "&:hover": { boxShadow: 4 },
  }}
>

      <CardContent sx={{ flexGrow: 1 }}>
        {hero?.badge && <Chip label={hero.badge} color="primary" size="small" />}

        <Typography fontWeight={600} mt={1}>
          {hero.main_heading}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {hero.university}
        </Typography>

        {program.program_overview?.duration && (
          <Typography variant="body2" mt={1}>
            {program.program_overview.duration}
          </Typography>
        )}
      </CardContent>

      <Stack direction="row" spacing={1} p={2}>
        <Button fullWidth variant="outlined">View Program</Button>
        <Button
          fullWidth
          sx={{ background: GRADIENT, color: "#fff" }}
        >
          Get Counselling
        </Button>
      </Stack>
    </Card>
  );
};

export default ProgramCard;
