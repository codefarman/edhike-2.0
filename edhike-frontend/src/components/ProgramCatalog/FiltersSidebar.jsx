import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const FilterSection = ({ title, options }) => (
  <Box sx={{ mb: 3 }}>
    <Typography fontWeight={600} gutterBottom>
      {title}
    </Typography>
    <FormGroup>
      {options.map((opt) => (
        <FormControlLabel key={opt} control={<Checkbox />} label={opt} />
      ))}
    </FormGroup>
  </Box>
);

const FiltersSidebar = () => {
  return (
    <Box
  sx={{
    p: 3,
    borderRadius: 3,
    backgroundColor: "#fafafa",
    position: "sticky",
    top: 120,
  }}
>
      
      <FilterSection title="Program Level" options={["UG", "PG", "Executive", "Certificate"]} />
      <FilterSection title="Mode" options={["Online", "Hybrid"]} />
      <FilterSection title="Duration" options={["< 6 months", "6–12 months", "12–24 months"]} />
      <FilterSection title="Country" options={["India", "UK", "USA", "Global"]} />
    </Box>
  );
};

export default FiltersSidebar;
