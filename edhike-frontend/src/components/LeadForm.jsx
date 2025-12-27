// src/LeadForm.jsx
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import { INTERESTS } from "../data/globalFormData";
import { FORM_SCHEMAS } from "./Forms/formSchemas";
import SearchableStateCity from "./Forms/SearchableStateCity";
import posthog from 'posthog-js'
import axios from "axios";

/* ================= GLOBAL FIELD STYLE ================= */
const compactFieldSx = {
  width: "100%",
  "& .MuiInputBase-input": {
    fontSize: "0.85rem",
    padding: "8.5px 12px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.8rem",
    transform: "translate(14px, 10px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    fontSize: "0.7rem",
    transform: "translate(14px, -6px) scale(1)",
  },
};

const compactMenuProps = {
  PaperProps: {
    sx: {
      maxHeight: 220,
      "& .MuiMenuItem-root": {
        fontSize: "0.85rem",
        minHeight: 32,
        py: 0.8,
      },
    },
  },
};
/* ===================================================== */

export default function LeadForm() {
  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState({ state: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");
  const fields = FORM_SCHEMAS[interest] || [];

  const intakeYearField = fields.find((f) => f.name === "intakeYear");
  const intakeMonthField = fields.find((f) => f.name === "intakeMonth");

  /* ---------- FAST SUBMIT (NO DELAY UI) ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    // SHOW THANK YOU IMMEDIATELY
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);


    // SEND DATA IN BACKGROUND
    const formData = new FormData(e.currentTarget);
    formData.append("interest", interest);

    if (location.state) formData.append("state", location.state);
    if (location.city) formData.append("city", location.city);
    try {
      // No-op try-catch block
      const response = axios.post("https://script.google.com/macros/s/AKfycbxqlJBsu21RFP_qt6ECy1tTd8FgdjBCTyfBEs9WTLAiRKJIlaBqk0f2k3IoZbe_yeKdHw/exec", formData);
      if (response.ok) {
        console.log("Form data sent successfully");
        posthog.capture('form_submit', {
          page: 'contact_ab_test',
          variant: 'vercel',
          experiment: 'contact_page_a-b_test'
        })
      }

    }
    catch (error) {
      console.log("Error occurred while sending form data:", error);
    }
  };

  /* ================= THANK YOU UI ================= */
  if (submitted) {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 380,
          mx: "auto",
          py: 5,
          px: 0,
          textAlign: "center",
        }}
      >
        <Typography fontSize="1.2rem" fontWeight={700} mb={1}>
          🎉 Thank You!
        </Typography>
        <Typography fontSize="0.85rem" color="text.secondary">
          Our experts will contact you shortly.
        </Typography>
      </Box>
    );
  }

  /* ================= FORM ================= */
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 380 },
        mx: "auto",
        px: { xs: 0, sm: 2 },
        py: 2,
        overflowX: "hidden",
      }}
    >
      <Typography fontWeight={700} fontSize="0.95rem" textAlign="center" mb={1}>
        Free Expert Counselling
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={1}>
          {/* INTEREST */}
          <TextField
            select
            label="Interested In"
            size="small"
            required
            value={interest}
            sx={compactFieldSx}
            SelectProps={{ MenuProps: compactMenuProps }}
            onChange={(e) => {
              setInterest(e.target.value);
              setLocation({ state: "", city: "" });
            }}
          >
            {INTERESTS.map((i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </TextField>

          {/* DYNAMIC FIELDS */}
          {interest && (
            <>
              {fields
                .filter(
                  (f) =>
                    !["intakeYear", "intakeMonth", "stateCity"].includes(f.name)
                )
                .map((f) => {
                  if (f.type === "select") {
                    return (
                      <TextField
                        key={f.name}
                        select
                        name={f.name}
                        label={f.label}
                        size="small"
                        required
                        sx={compactFieldSx}
                        SelectProps={{ MenuProps: compactMenuProps }}
                      >
                        {f.options.map((o) => (
                          <MenuItem key={o} value={o}>{o}</MenuItem>
                        ))}
                      </TextField>
                    );
                  }

                  if (f.type === "radio") {
                    return (
                      <Box key={f.name}>
                        <Typography fontSize="0.7rem" mb={0.3}>
                          {f.label} *
                        </Typography>
                        <RadioGroup name="enrolledBefore" row>
                          {f.options.map((o) => (
                            <FormControlLabel
                              key={o}
                              value={o}
                              control={<Radio size="small" />}
                              label={<Typography fontSize="0.75rem">{o}</Typography>}
                            />
                          ))}
                        </RadioGroup>
                      </Box>
                    );
                  }

                  if (f.type === "textarea") {
                    return (
                      <TextField
                        key={f.name}
                        name="message"
                        label={f.label}
                        size="small"
                        multiline
                        rows={2}
                        required
                        sx={compactFieldSx}
                      />
                    );
                  }

                  return null;
                })}

              {/* INTAKE YEAR + MONTH */}
              {intakeYearField && intakeMonthField && (
                <Stack direction={isMobile ? "column" : "row"} spacing={1}>
                  <TextField
                    select
                    name="intakeYear"
                    label={intakeYearField.label}
                    size="small"
                    required
                    fullWidth
                    sx={compactFieldSx}
                    SelectProps={{ MenuProps: compactMenuProps }}
                  >
                    {intakeYearField.options.map((o) => (
                      <MenuItem key={o} value={o}>{o}</MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    name="intakeMonth"
                    label={intakeMonthField.label}
                    size="small"
                    required
                    fullWidth
                    sx={compactFieldSx}
                    SelectProps={{ MenuProps: compactMenuProps }}
                  >
                    {intakeMonthField.options.map((o) => (
                      <MenuItem key={o} value={o}>{o}</MenuItem>
                    ))}
                  </TextField>
                </Stack>
              )}

              {/* STATE + CITY */}
              {fields.some((f) => f.type === "stateCity") && (
                <SearchableStateCity onChange={setLocation} />
              )}
            </>
          )}

          {/* USER INFO */}
          <TextField name="name" label="Name" size="small" required sx={compactFieldSx} />
          <TextField name="phone" label="Phone" size="small" required sx={compactFieldSx} />
          <TextField name="email" label="Email" size="small" required sx={compactFieldSx} />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 0.5,
              py: 1,
              fontSize: "0.85rem",
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(135deg,#E31E24,#7B2FF7)",
              color: "#fff",
            }}
          >
            Start My Journey
          </Button>

          <Typography fontSize="0.65rem" textAlign="center" color="text.secondary">
            🔒 100% Private • Free Counselling
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}








// use react hook form