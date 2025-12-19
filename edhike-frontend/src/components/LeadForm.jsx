import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  DESTINATIONS,
  INTAKE_MONTHS,
  INTAKE_YEARS,
  ASPIRING_FOR,
  EXPERIENCE,
  INTERESTS,
} from "../data/studyAbroadData";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function LeadForm({ onClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // external handling later
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1200);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        fontWeight={800}
        textAlign="center"
        sx={{
          mb: 0.5,
          background: GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Free Expert Counseling
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        mb={3}
      >
        One form. Multiple global opportunities.
      </Typography>

      <Stack spacing={2}>
        {/* GLOBAL INTEREST */}
        <TextField
          select
          label="Interested In"
          required
          size="small"
        >
          {INTERESTS.map((v) => (
            <MenuItem key={v} value={v}>{v}</MenuItem>
          ))}
        </TextField>

        {/* STUDY ABROAD CORE */}
        <TextField select label="Preferred Destination" size="small">
          {DESTINATIONS.map((v) => (
            <MenuItem key={v} value={v}>{v}</MenuItem>
          ))}
        </TextField>

        <Stack direction="row" spacing={1}>
          <TextField select label="Intake Year" size="small" fullWidth>
            {INTAKE_YEARS.map((v) => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </TextField>

          <TextField select label="Intake Month" size="small" fullWidth>
            {INTAKE_MONTHS.map((v) => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </TextField>
        </Stack>

        <TextField select label="Aspiring For" size="small">
          {ASPIRING_FOR.map((v) => (
            <MenuItem key={v} value={v}>{v}</MenuItem>
          ))}
        </TextField>

        {/* PERSONAL */}
        <TextField label="Full Name" required size="small" />
        <TextField
          label="Phone Number"
          required
          size="small"
          inputProps={{ maxLength: 10 }}
        />
        <TextField label="Email (optional)" size="small" />

        <TextField select label="Experience" size="small">
          {EXPERIENCE.map((v) => (
            <MenuItem key={v} value={v}>{v}</MenuItem>
          ))}
        </TextField>

        <Button
          type="submit"
          disabled={loading}
          sx={{
            mt: 1,
            py: 1.2,
            fontWeight: 700,
            borderRadius: 2,
            background: GRADIENT,
            color: "#fff",
            "&:hover": { opacity: 0.95 },
          }}
        >
          {loading ? "Submitting..." : "Get Free Counseling"}
        </Button>

        <Typography
          variant="caption"
          textAlign="center"
          color="text.secondary"
        >
          Your data is 100% safe. No spam. Ever.
        </Typography>
      </Stack>
    </Box>
  );
}
