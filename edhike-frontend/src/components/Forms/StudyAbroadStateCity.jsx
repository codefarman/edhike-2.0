// src/forms/StudyAbroadStateCity.jsx
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import { STATE_CITY_MAP } from "../../data/stateCityData";

export default function StudyAbroadStateCity({ onChange }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const cities = STATE_CITY_MAP[state] || [];

  return (
    <Box display="flex" gap={1}>
      <TextField
        select
        label="State"
        size="small"
        fullWidth
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity("");
          onChange({ state: e.target.value, city: "" });
        }}
      >
        {Object.keys(STATE_CITY_MAP).map((s) => (
          <MenuItem key={s} value={s}>{s}</MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="City"
        size="small"
        fullWidth
        value={city}
        disabled={!state}
        onChange={(e) => {
          setCity(e.target.value);
          onChange({ state, city: e.target.value });
        }}
      >
        {cities.map((c) => (
          <MenuItem key={c} value={c}>{c}</MenuItem>
        ))}
        <MenuItem value="Other">Other</MenuItem>
      </TextField>
    </Box>
  );
}
