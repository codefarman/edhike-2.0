import { Box, Tabs, Tab } from "@mui/material";

const CategoryTabs = ({ categories, value, onChange }) => {
  return (
    <Box
  sx={{
    position: "sticky",
    top: 64,
    zIndex: 10,
    backgroundColor: "#fff",
  }}
>
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((cat, index) => (
          <Tab key={index} label={cat.category} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTabs;
