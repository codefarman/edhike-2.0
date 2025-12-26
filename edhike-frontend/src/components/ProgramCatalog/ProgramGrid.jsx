import { Grid } from "@mui/material";
import ProgramCard from "./ProgramCard";

const ProgramGrid = ({ programs }) => {
    if (!programs.length) {
  return (
    <Typography color="text.secondary">
      Programs coming soon.
    </Typography>
  );
}

  return (
   <Grid item xs={12} md={9} minHeight={300}>

      {programs.map((program, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <ProgramCard program={program} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProgramGrid;
