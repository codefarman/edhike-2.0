import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Chip,
  Stack,
  Grid,
  MenuItem,
} from "@mui/material";
import { Phone, Search, CheckCircle } from "@mui/icons-material";
import { FadeInUp, FadeInRight, ScaleIn } from "../../components/Animation/Motion";
// import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
// import { globalSearch } from "../../api/search.js";



const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxQYyIRj96iRB9JbKhOpcc4UGPO5Q8BpyKpJXwqv46KNN-AAMEcBsJrc0B1AoPTVuv8WQ/exec";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    exp: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");




  // const [searchOptions, setSearchOptions] = useState([]);
  // const [searchLoading, setSearchLoading] = useState(false);

  // const handleSearch = async (value) => {
  //   if (!value || value.length < 2) {
  //     setSearchOptions([]);
  //     return;
  //   }

  //   setSearchLoading(true);
  //   try {
  //     const results = await globalSearch(value);
  //     setSearchOptions(results);
  //   } catch (e) {
  //     console.error("Search error", e);
  //   } finally {
  //     setSearchLoading(false);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Hero Form" }),
      });

      setSuccess(true);
      setForm({ name: "", phone: "", exp: "", interest: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert("Submission failed. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const redirectToSearch = () => {
    if (!searchValue || !searchValue.trim()) return;

    
    const q = encodeURIComponent(searchValue.trim().toLowerCase());

    window.location.href = `https://www.edhike.in/search?q=${q}`;
  };




  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 4, md: 0, lg: 0, xl:0 },
        pb: { xs: 1, md: 1, lg:0, xl:0 },
        mb: { xs: 0, md: 0, lg: -7 , xl:-8 } ,
        mt:{ xs: 2, md: 1, lg: -1 , xl:-2 },
        bgcolor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid
  container
  spacing={{ xs: 4, md: 5, lg: 8, xl: 25 }}
  alignItems="center"
  mt={{ xs: 2, md: 4, lg: 6 }}
>

          {/* LEFT: Main Content */}
          <Grid item xs={12} lg={7} pl={{ lg: 5 }}>
            <FadeInUp delay={0.1}>
              <Chip
                label="For Ambitious Working Professionals"
                sx={{
                  bgcolor: RED + "10",
                  color: RED,
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  py: 1.5,
                  borderRadius: 8,
                }}
              />
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.6rem", md: "2.2rem", lg: "3.5rem" },
                  fontWeight: 900,
                  lineHeight: 1.05,
                  mt: 3,
                  mb: 3,
                  color: PURPLE,
                  letterSpacing: "-0.03em",
                }}
              >
                Grow Faster.
                <Box
                  component="span"
                  sx={{
                    background: GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    ml: 2,
                  }}
                >
                  Learn Smarter.
                </Box>
              </Typography>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.8rem", md: "1.1rem", lg: "1.25rem" },
                  color: "gray",
                  maxWidth: 660,
                  lineHeight: 1.6,
                  fontWeight: 300,
                  mb: 4,
                  mt: { xs: -2, md: 2, lg: 3 },
                }}
              >
                Find the right Online MBA or Study Abroad program — fast & easy.
              </Typography>
            </FadeInUp>

            {/* Search Bar */}
            <FadeInUp delay={0.2}>
              <Box
                sx={{
                  mt: { xs: -2, md: 4, lg: 0 },
                  maxWidth: { md: 500, lg: 600, xl: 700, xs: 400 },
                  bgcolor: "white",
                  borderRadius: 10,
                  border: "1px solid " + PURPLE + "20",
                  boxShadow: "0 8px 37px rgba(0,0,0,0.08)",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: `1px solid ${PURPLE}`,
                    borderColor: PURPLE,
                    boxShadow: "0 12px 43px rgba(88,41,167,0.15)",
                  },
                }}
                onClick={() => document.getElementById("hero-search")?.focus()}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search Online MBA, Universities, Programs…"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      redirectToSearch();
                    }
                  }}
                  // disabled={!searchValue.trim()} 
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <Search
                        sx={{
                          color: "#666",
                          fontSize: 24,
                          mr: 1,
                          cursor: searchValue.trim() ? "pointer" : "not-allowed",
                          opacity: searchValue.trim() ? 1 : 0.4,
                        }}
                        onClick={() => {
                          if (searchValue.trim()) {
                            redirectToSearch();
                          }
                        }}
                      />

                    ),
                  }}
                />



              </Box>
            </FadeInUp>

            {/* Trust Signals */}
            <FadeInUp delay={0.4}>
              <Stack
                direction={{ xs: "row", sm: "row" }}
                maxWidth={{ md: 600, lg: 800, xl: 900, xs: 300 }}
                spacing={6}
                alignItems="space-between"
                sx={{ mt: 1, pl: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Box sx={{ display: "flex" }}>
                    {[1, 2, 3].map((i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 15,
                          height: 15,
                          borderRadius: "50%",
                          border: "2px solid white",
                          background: GRADIENT,
                          ml: -1,
                          zIndex: 5 - i,
                          boxShadow: "0 4px 15px rgba(227,30,36,0.3)",
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 300, color: "#222", fontSize: { xs: "0.6rem", md: "0.7rem", lg: "0.8rem" }, gap: 0 }}
                    width={'60%'}
                  >
                    100k+ Professionals Transformed
                  </Typography>


                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography sx={{ fontSize: { xs: "0.6rem", md: "0.7rem", lg: "0.8rem" }, fontWeight: 300, color: RED }}>
                      ★ 4.9
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 300, color: "#555", fontSize: { xs: "0.6rem", md: "0.7rem", lg: "0.8rem" } }}>
                      Google Rating
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </FadeInUp>
          </Grid>
          {/* RIGHT: Form */}
          <Grid item xs={12} lg={5} mt={{ lg: 8 }} >
            <FadeInRight delay={0.4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                  border: `1px solid #eee`,
                  p: { xs: 2.5, md: 4 },
                  ml: "auto",
                  width: { lg: 350 },
                  maxWidth: "95vw",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: GRADIENT,
                    borderRadius: "16px 16px 0 0",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.65rem" },
                    fontWeight: 800,
                    mb: 1,
                    background: GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  Talk to an Expert — Free Call
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2.5, fontWeight: 500, textAlign: "center", fontSize: { xs: "0.7rem", md: "inherit" } }}
                >
                  Get personalised career advice from our senior counsellors.
                </Typography>

                {success ? (
                  <ScaleIn>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        bgcolor: "#f0fdf4",
                        py: 2,
                        px: 3,
                        borderRadius: 3,
                        mt: 2,
                      }}
                    >
                      <CheckCircle sx={{ color: "#22c55e", fontSize: { xs: 28, md: 32 } }} />
                      <Typography fontWeight={700} color="#166534" sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}>
                        We’ll connect you shortly!
                      </Typography>
                    </Stack>
                  </ScaleIn>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      sx={{
                        mb: 1.2,
                        "& .MuiInputBase-root": {
                          height: 44,
                          borderRadius: 3,
                          bgcolor: "#f8f7ff",
                          fontSize: "0.95rem",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone sx={{ color: PURPLE, fontSize: 20 }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        mb: 1.2,
                        "& .MuiInputBase-root": {
                          height: 44,
                          borderRadius: 3,
                          bgcolor: "#f8f7ff",
                          fontSize: "0.95rem",
                        },
                      }}
                    />

                    {/* Exact old layout: side by side on all screens */}
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 6 }}>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="Exp (yrs)"
                          value={form.exp}
                          onChange={(e) => setForm({ ...form, exp: e.target.value })}
                          sx={{
                            "& .MuiInputBase-root": {
                              height: 44,
                              borderRadius: 3,
                              bgcolor: "#f8f7ff",
                              fontSize: "0.95rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <TextField
                          fullWidth
                          size="small"
                          select
                          value={form.interest}
                          onChange={(e) => setForm({ ...form, interest: e.target.value })}
                          SelectProps={{
                            displayEmpty: true,
                            renderValue: (selected) => {
                              if (!selected) {
                                return <span style={{ color: "#9ca3af" }}>Interested In</span>;
                              }
                              return selected;
                            },
                          }}
                          sx={{
                            "& .MuiInputBase-root": {
                              height: 44,
                              borderRadius: 3,
                              bgcolor: "#f8f7ff",
                              fontSize: "0.95rem",
                              paddingLeft: "14px",
                              paddingRight: "40px",
                            },
                            "& .MuiSelect-select": {
                              paddingLeft: 0,
                              paddingRight: 0,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                            "& .MuiSelect-icon": {
                              right: 12,
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            Interested In
                          </MenuItem>
                          <MenuItem value="MBA Online">MBA (Online)</MenuItem>
                          <MenuItem value="Executive MBA">Executive MBA</MenuItem>
                          <MenuItem value="Study Abroad">Study Abroad</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      disabled={loading}
                      size="large"
                      variant="contained"
                      sx={{
                        mt: 2,
                        height: 48,
                        borderRadius: 3,
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                        fontWeight: 700,
                        textTransform: "none",
                        background: GRADIENT,
                        boxShadow: "0 10px 30px rgba(227,30,36,0.35)",
                        "&:hover": {
                          background: GRADIENT,
                          transform: "translateY(-3px)",
                          boxShadow: "0 15px 40px rgba(227,30,36,0.45)",
                        },
                      }}
                      startIcon={<Phone sx={{ fontSize: { xs: 20, md: 24 } }} />}
                    >
                      {loading ? "Submitting..." : "Start My Journey"}
                    </Button>

                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        textAlign: "center",
                        mt: 2,
                        color: "#888",
                        fontSize: "0.8rem",
                      }}
                    >
                      100% Privacy • 10 AM – 7 PM
                    </Typography>
                  </Box>
                )}
              </Box>
            </FadeInRight>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}