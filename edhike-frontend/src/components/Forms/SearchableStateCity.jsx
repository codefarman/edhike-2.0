// src/forms/SearchableStateCity.jsx
import {
  Box,
  Paper,
  TextField,
  InputBase,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useRef, useEffect } from "react";
import { STATE_CITY_MAP } from "../../data/stateCityData";

export default function SearchableStateCity({ onChange }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [otherMode, setOtherMode] = useState(false);
  const [focused, setFocused] = useState(null); // 👈 NEW

  const wrapperRef = useRef(null);

  const textFieldSx = {
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


  useEffect(() => {
    const close = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
        setSearch("");
        setOtherMode(false);
        setFocused(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const states = Object.keys(STATE_CITY_MAP).filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  const cities = state
    ? (STATE_CITY_MAP[state] || []).filter((c) =>
        c.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const applyTypedCity = () => {
    if (!search.trim()) return;
    setCity(search.trim());
    onChange({ state, city: search.trim() });
    setSearch("");
    setOtherMode(false);
    setOpen(null);
    setFocused(null);
  };

  return (
    <Box ref={wrapperRef} display="flex" gap={1}>
      {/* ================= STATE ================= */}
      <Box flex={1} position="relative">
        <TextField
          label="State *"
          size="small"
          Width="50%"
          value={state}
        //   placeholder="Select state"
          InputLabelProps={{
            shrink: Boolean(state) || focused === "state", 
          }}
          onClick={() => {
            setOpen("state");
            setSearch("");
            setFocused("state");
          }}
          InputProps={{
            readOnly: true,
            endAdornment: <ArrowDropDownIcon fontSize="small" />,
          }}
          sx={textFieldSx}
        />

        {open === "state" && (
          <Paper sx={dropdownStyle}>
            <SearchInput value={search} onChange={setSearch} />
            {states.map((s) => (
              <Option
                key={s}
                label={s}
                onClick={() => {
                  setState(s);
                  setCity("");
                  onChange({ state: s, city: "" });
                  setOpen(null);
                  setFocused(null);
                }}
              />
            ))}
          </Paper>
        )}
      </Box>

      {/* ================= CITY ================= */}
      <Box flex={1} position="relative">
        <TextField
          label="City *"
          size="small"
          fullWidth
          value={city}
        //   placeholder={state ? "Select city" : "Select state first"} 
          disabled={!state}
          InputLabelProps={{
            shrink: Boolean(city) || focused === "city", // 🔑 FIX
          }}
          onClick={() => {
            if (!state) return;
            setOpen("city");
            setSearch("");
            setOtherMode(false);
            setFocused("city");
          }}
          InputProps={{
            readOnly: !otherMode,
            endAdornment: <ArrowDropDownIcon fontSize="small" />,
          }}
          sx={textFieldSx}
        />

        {open === "city" && (
          <Paper sx={dropdownStyle}>
            <Box display="flex" alignItems="center">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder={
                  otherMode ? "Type city name" : "Search city..."
                }
                onEnter={otherMode ? applyTypedCity : undefined}
                flex
              />

              {otherMode && (
                <IconButton size="small" onClick={applyTypedCity}>
                  <CheckIcon fontSize="small" />
                </IconButton>
              )}
            </Box>

            {!otherMode &&
              cities.slice(0, 40).map((c) => (
                <Option
                  key={c}
                  label={c}
                  onClick={() => {
                    setCity(c);
                    onChange({ state, city: c });
                    setOpen(null);
                    setFocused(null);
                  }}
                />
              ))}

            {!otherMode && (
              <Option
                label="Other"
                bold
                onClick={() => {
                  setOtherMode(true);
                  setSearch("");
                }}
              />
            )}
          </Paper>
        )}
      </Box>
    </Box>
  );
}

/* ================= STYLES ================= */

const textFieldSx = {
  "& .MuiInputBase-input": {
    fontSize: "0.85rem",
  },
  "& input::placeholder": {
    fontSize: "0.8rem", // 🔑 FIX placeholder size
    opacity: 0.7,
  },
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  mt: 0.5,
  maxHeight: 200,
  overflow: "auto",
  zIndex: 30,
};

function SearchInput({ value, onChange, placeholder, onEnter, flex }) {
  return (
    <InputBase
      autoFocus
      value={value}
      placeholder={placeholder || "Search..."}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
      sx={{
        px: 1,
        py: 0.7,
        fontSize: "0.75rem",
        flex: flex ? 1 : undefined,
        borderBottom: "1px solid #eee",
      }}
    />
  );
}

function Option({ label, onClick, bold }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        px: 1.5,
        py: 0.6,
        fontSize: "0.8rem",
        fontWeight: bold ? 600 : 400,
        cursor: "pointer",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      {label}
    </Box>
  );
}
