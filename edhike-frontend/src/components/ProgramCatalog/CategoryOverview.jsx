import { Box, Typography, Chip, Stack } from "@mui/material";

const CategoryOverview = ({ category }) => {
  return (
    <Box
  sx={{
    p: 3,
    mb: 4,
    borderRadius: 3,
    backgroundColor: "#fafafa",
  }}
>

      <Typography variant="h4" fontWeight={600} gutterBottom>
        {category.category}
      </Typography>

      <Typography sx={{ mb: 2 }}>
        {category.description}
      </Typography>

      <Typography variant="body2">
        <strong>Duration:</strong> {category.duration} &nbsp; | &nbsp;
        <strong>Format:</strong> {category.format}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        <strong>Career Roles:</strong> {category.career_roles.join(", ")}
      </Typography>

      <Stack direction="row" spacing={1} mt={2}>
        {category.highlights.map((item, idx) => (
          <Chip key={idx} label={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryOverview;
