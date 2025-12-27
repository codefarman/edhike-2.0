import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { FadeInUp } from "../Animation/Motion";
import { GRADIENT, SHADOW_SOFT } from "../../theme/brand";

const FeesEMI = ({ totalFees, emi, note }) => {
  return (
    <Box id="fees-emi" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <FadeInUp>
          <Box sx={{ p: 4, borderRadius: 4, bgcolor: "#fff", boxShadow: SHADOW_SOFT }}>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                mb: 2,
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fees & EMI Options
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PaymentsIcon />
                <Typography>
                  <strong>Total Fees:</strong> {totalFees}
                </Typography>
              </Stack>

              <Divider />

              <Stack direction="row" spacing={2} alignItems="center">
                <CreditCardIcon />
                <Typography>
                  <strong>EMI Starts at:</strong> {emi}
                </Typography>
              </Stack>

              <Typography variant="caption" color="text.secondary">
                {note || "No-cost EMI options available. Loan assistance supported."}
              </Typography>

              <Button
                sx={{
                  mt: 2,
                  background: GRADIENT,
                  color: "#fff",
                  borderRadius: 50,
                  px: 4,
                  fontWeight: 700,
                }}
              >
                Check EMI Eligibility
              </Button>
            </Stack>
          </Box>
        </FadeInUp>
      </Container>
    </Box>
  );
};

export default FeesEMI;
