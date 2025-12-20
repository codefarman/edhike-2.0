import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
  Fade,
} from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  DESTINATIONS,
  INTAKE_MONTHS,
  INTAKE_YEARS,
  INTERESTS,
} from "../data/studyAbroadData";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

/* Compact dropdown */
const COMPACT_MENU_PROPS = {
  PaperProps: {
    sx: {
      maxHeight: { xs: 200, md: 260 },
      mt: 0.5,
      borderRadius: 2,
    },
  },
};

/* 🔒 unified field styling */
const FIELD_SX = {
  "& .MuiInputBase-input": {
    fontSize: "0.85rem",
    py: 1.1,
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.85rem",
  },
  "& .MuiFormHelperText-root": {
    fontSize: "0.7rem",
  },
};

export default function LeadForm({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  /* ---------- VALIDATION ---------- */
  const validate = (data) => {
    const err = {};

    if (!data.get("interest")) err.interest = "Required";

    const name = data.get("name")?.trim();
    if (!name) err.name = "Required";
    else if (!/^[a-zA-Z\s]{2,}$/.test(name))
      err.name = "Only letters allowed";

    const phone = data.get("phone")?.trim();
    if (!phone) err.phone = "Required";
    else if (!/^[6-9]\d{9}$/.test(phone))
      err.phone = "Invalid number";

    const email = data.get("email")?.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Invalid email";

    return err;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxjA0qBsjMkyt90ft5UGsAngDWfuE66KmflPS7x3aPgwhELWjKO1hqN8byM9izZ2VwdnQ/exec",
        { method: "POST", body: formData }
      );

      setSuccess(true);

      // auto-close after 2.5s
      setTimeout(() => onClose?.(), 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- SUCCESS CARD ---------- */
  if (success) {
    return (
      <Fade in>
        <Box textAlign="center" py={4}>
          <CheckCircleIcon sx={{ fontSize: 60, color: "#22c55e" }} />
          <Typography fontWeight={800} mt={2}>
            Thank You!
          </Typography>
          <Typography fontSize="0.85rem" color="text.secondary" mt={1}>
            Our expert will contact you shortly.
          </Typography>
        </Box>
      </Fade>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {/* HEADER */}
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 800,
          textAlign: "center",
          mb: 0.4,
          background: GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Free Expert Counselling
      </Typography>

      <Typography
        sx={{
          fontSize: "0.72rem",
          textAlign: "center",
          color: "text.secondary",
          mb: 2,
        }}
      >
        One form • Multiple global opportunities
      </Typography>

      <Stack spacing={1.2}>
        <TextField
          select
          name="interest"
          label="Interested In"
          required
          size="small"
          error={!!errors.interest}
          helperText={errors.interest}
          sx={FIELD_SX}
          SelectProps={{ MenuProps: COMPACT_MENU_PROPS }}
        >
          {INTERESTS.map((v) => (
            <MenuItem key={v} value={v} sx={{ fontSize: "0.85rem" }}>
              {v}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          name="destination"
          label="Preferred Destination"
          size="small"
          sx={FIELD_SX}
          SelectProps={{ MenuProps: COMPACT_MENU_PROPS }}
        >
          {DESTINATIONS.map((v) => (
            <MenuItem key={v} value={v} sx={{ fontSize: "0.85rem" }}>
              {v}
            </MenuItem>
          ))}
        </TextField>

        <Stack direction="row" spacing={1}>
          <TextField
            select
            name="intakeYear"
            label="Year"
            size="small"
            fullWidth
            sx={FIELD_SX}
            SelectProps={{ MenuProps: COMPACT_MENU_PROPS }}
          >
            {INTAKE_YEARS.map((v) => (
              <MenuItem key={v} value={v} sx={{ fontSize: "0.85rem" }}>
                {v}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            name="intakeMonth"
            label="Month"
            size="small"
            fullWidth
            sx={FIELD_SX}
            SelectProps={{ MenuProps: COMPACT_MENU_PROPS }}
          >
            {INTAKE_MONTHS.map((v) => (
              <MenuItem key={v} value={v} sx={{ fontSize: "0.85rem" }}>
                {v}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <TextField
          name="name"
          label="Full Name"
          required
          size="small"
          error={!!errors.name}
          helperText={errors.name}
          sx={FIELD_SX}
        />

        <TextField
          name="phone"
          label="Phone Number"
          required
          size="small"
          error={!!errors.phone}
          helperText={errors.phone}
          inputProps={{ maxLength: 10 }}
          sx={FIELD_SX}
        />

        <TextField
          name="email"
          label="Email (optional)"
          size="small"
          error={!!errors.email}
          helperText={errors.email}
          sx={FIELD_SX}
        />

        <Button
          type="submit"
          disabled={loading}
          sx={{
            mt: 1,
            py: 1,
            fontSize: "0.9rem",
            fontWeight: 800,
            borderRadius: 2,
            background: GRADIENT,
            color: "#fff",
          }}
        >
          {loading ? "Submitting…" : "Get Free Counselling"}
        </Button>

        <Typography
          sx={{
            fontSize: "0.65rem",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Your data is safe. No spam. Ever.
        </Typography>
      </Stack>
    </Box>
  );
}
