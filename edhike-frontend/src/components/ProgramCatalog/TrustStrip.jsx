import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PURPLE } from "../../theme/brand";

const TrustStrip = ({ highlights }) => {
    return (
        <Box
            sx={{
                py: 3,
                backgroundColor: "#fff",
                borderTop: "1px solid #eee",
                borderBottom: "1px solid #eee",
            }}
        >

            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={3} key={index} display="flex" alignItems="center">
                            <CheckCircleIcon sx={{ color: PURPLE, mr: 1 }} />
                            <Typography variant="body2" fontWeight={500}>
                                {item}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TrustStrip;
