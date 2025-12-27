import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT } from "../../theme/brand";

const ProgramComparison = ({ rows }) => {
  return (
    <Box id="comparison" sx={{ py: { xs: 6, md: 8 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <FadeInUp>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              mb: 3,
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Program Comparison
          </Typography>

          <Paper elevation={0} sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Feature</strong></TableCell>
                  <TableCell><strong>This Program</strong></TableCell>
                  <TableCell><strong>Typical Alternatives</strong></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.feature}</TableCell>
                    <TableCell>{row.this}</TableCell>
                    <TableCell>{row.other}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </FadeInUp>
      </Container>
    </Box>
  );
};

export default ProgramComparison;
