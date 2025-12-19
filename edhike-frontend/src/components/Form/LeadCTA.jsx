// // src/components/LeadCTA.jsx
// import React, { useState } from "react";
// import { Box, Container, Typography, TextField, Button, Stack } from "@mui/material";
// import { Phone, WhatsApp, CheckCircle } from "@mui/icons-material";
// import { FadeInUp, ScaleIn } from "./Motion";

// const RED = "#E31E24";
// const PURPLE = "#5829A7";
// const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

// export default function LeadCTA() {
//   const [lead, setLead] = useState({ name: "", phone: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!lead.name.trim()) return alert("Please enter your name");
//     const digits = lead.phone.replace(/\D/g, "");
//     if (digits.length !== 10) return alert("Please enter a valid 10-digit phone number");

//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1000));
//     setSuccess(true);
//     setLoading(false);
//     setLead({ name: "", phone: "" });
//     setTimeout(() => setSuccess(false), 6000);
//   };

//   return (
//     <Box component="section" sx={{ py: { xs: 4, md: 10, lg: 6 }, bgcolor: "#fafafa", mt:-2 }}>
//       <Container maxWidth="sm">
//         <FadeInUp>
//           <Box
//             sx={{
//               bgcolor: "white",
//               borderRadius: { xs: 4, md: 5 },
//               p: { xs: 3, md: 5 },
//               mx: "auto",
//               boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
//               border: "3px solid transparent",
//               background: `linear-gradient(white, white) padding-box, ${GRADIENT} border-box`,
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <Box sx={{ position: "absolute", inset: 0, opacity: 0.08, background: GRADIENT, filter: "blur(30px)" }} />

//             <Box sx={{ position: "relative", textAlign: "center" }}>
//               <Typography
//                 variant="subtitle2"
//                 sx={{
//                   color: RED,
//                   fontWeight: 800,
//                   textTransform: "uppercase",
//                   letterSpacing: 2,
//                   fontSize: { xs: "0.75rem", md: "0.875rem" },
//                   mb: { xs: 0.5, md: 1 },
//                 }}
//               >
//                 Final Step
//               </Typography>

//               <Typography
//                 variant="h4"
//                 sx={{
//                   mt: { xs: 0.5, md: 1 },
//                   mb: { xs: 1, md: 1.5 },
//                   fontWeight: 800,
//                   fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2.1rem" },
//                   background: GRADIENT,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Talk to an Expert — Free Call
//               </Typography>

//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{
//                   mb: { xs: 2.5, md: 4 },
//                   fontSize: { xs: "0.7rem", md: "1rem", lg: "0.9rem" },
//                 }}
//               >
//                 Get personalised career advice from our senior counsellors.
//               </Typography>

//               {success ? (
//                 <ScaleIn>
//                   <Stack
//                     direction="row"
//                     spacing={1.5}
//                     alignItems="center"
//                     justifyContent="center"
//                     sx={{
//                       bgcolor: "#f0fdf4",
//                       borderRadius: 3,
//                       py: { xs: 2, md: 3 },
//                       px: 3,
//                     }}
//                   >
//                     <CheckCircle sx={{ color: "#22c55e", fontSize: { xs: 30, md: 36 } }} />
//                     <Typography
//                       variant="h6"
//                       fontWeight={700}
//                       color="#166534"
//                       sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}
//                     >
//                       We'll connect you shortly!
//                     </Typography>
//                   </Stack>
//                 </ScaleIn>
//               ) : (
//                 <Box component="form" onSubmit={handleSubmit}>
//                   <Stack spacing={{ xs: 1.8, md: 2.5 }} sx={{ maxWidth: 460, mx: "auto" }}>
//                     <TextField
//                       fullWidth
//                       placeholder="Full Name"
//                       value={lead.name}
//                       onChange={(e) => setLead({ ...lead, name: e.target.value })}
//                       required
//                       sx={{
//                         "& .MuiInputBase-root": {
//                           height: { xs: 48, md: 52 },
//                           fontSize: { xs: "0.95rem", md: "1rem" },
//                           fontWeight: 600,
//                           borderRadius: 3,
//                           bgcolor: "#f8f9ff",
//                         },
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       placeholder="Phone Number"
//                       value={lead.phone}
//                       onChange={(e) => setLead({ ...lead, phone: e.target.value })}
//                       required
//                       sx={{
//                         "& .MuiInputBase-root": {
//                           height: { xs: 48, md: 52 },
//                           fontSize: { xs: "0.95rem", md: "1rem" },
//                           fontWeight: 600,
//                           borderRadius: 3,
//                           bgcolor: "#f8f9ff",
//                         },
//                       }}
//                     />

//                     <Button
//                       type="submit"
//                       fullWidth
//                       disabled={loading}
//                       sx={{
//                         height: { xs: 52, md: 58 },
//                         borderRadius: 3,
//                         fontSize: { xs: "1.05rem", md: "1.15rem" },
//                         fontWeight: 600,
//                         background: GRADIENT,
//                         color: "white",
//                         boxShadow: "0 10px 30px rgba(227,30,36,0.3)",
//                         "&:hover": {
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 18px 45px rgba(227,30,36,0.4)",
//                         },
//                       }}
//                       startIcon={<Phone sx={{ fontSize: { xs: 22, md: 26 } }} />}
//                     >
//                       {loading ? "Submitting...." : "Start My Journey"}
//                     </Button>
//                   </Stack>
//                 </Box>
//               )}

//               <Typography
//                 variant="caption"
//                 color="text.secondary"
//                 sx={{
//                   mt: { xs: 2, md: 3 },
//                   display: "block",
//                   fontSize: { xs: "0.75rem", md: "0.875rem" },
//                 }}
//               >
//                 🔒 100% Private • Available 10 AM – 7 PM
//               </Typography>

//               <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: { xs: 2, md: 3 } }}>
//                 <Button
//                   size="small"
//                   startIcon={<Phone sx={{ fontSize: 18 }} />}
//                   sx={{
//                     color: PURPLE,
//                     fontWeight: 600,
//                     fontSize: { xs: "0.85rem", md: "0.95rem" },
//                   }}
//                   href="tel:+919236395274"
//                 >
//                   Call
//                 </Button>
//                 <Button
//                   size="small"
//                   startIcon={<WhatsApp sx={{ fontSize: 18 }} />}
//                   sx={{
//                     bgcolor: "#25D366",
//                     color: "white",
//                     fontWeight: 600,
//                     fontSize: { xs: "0.85rem", md: "0.95rem" },
//                     "&:hover": { bgcolor: "#128C7E" },
//                   }}
//                   href="https://wa.me/+918645614825?text=Hi! Interested in programs"
//                   target="_blank"
//                 >
//                   WhatsApp
//                 </Button>
//               </Stack>
//             </Box>
//           </Box>
//         </FadeInUp>
//       </Container>
//     </Box>
//   );
// }




// src/components/LeadCTA.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";
import { Phone, WhatsApp, CheckCircle } from "@mui/icons-material";
import { FadeInUp, ScaleIn } from "../../components/Animation/Motion";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxQYyIRj96iRB9JbKhOpcc4UGPO5Q8BpyKpJXwqv46KNN-AAMEcBsJrc0B1AoPTVuv8WQ/exec";

export default function LeadCTA() {
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    exp: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lead.name.trim()) return alert("Enter name");
    const digits = lead.phone.replace(/\D/g, "");
    if (digits.length !== 10) return alert("Enter valid phone");

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "LeadCTA" }),
      });

      setSuccess(true);
      setLead({ name: "", phone: "", exp: "", interest: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 6 }, bgcolor: "#fafafa", mt: -2 }}>
      <Container maxWidth="sm">
        <FadeInUp>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 4,
              p: { xs: 2.2, md: 3, lg: 6 },
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
              border: "3px solid transparent",
              background: `linear-gradient(white, white) padding-box, ${GRADIENT} border-box`,
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", inset: 0, opacity: 0.06, background: GRADIENT, filter: "blur(24px)" }} />

            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: RED,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  fontSize: "0.65rem",
                  mb: 0.5,
                }}
              >
                FINAL STEP
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "0.95rem", md: "1.35rem" },
                  background: GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.15,
                  mb: 0.6,
                }}
              >
                Talk to an Expert — Free Call
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ fontSize: "0.65rem", mb: 1.6 }}
              >
                Personalised career advice from senior counsellors.
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
                      py: 1.6,
                      borderRadius: 2.5,
                    }}
                  >
                    <CheckCircle sx={{ color: "#22c55e", fontSize: 22 }} />
                    <Typography fontWeight={700} fontSize="0.8rem" color="#166534">
                      We’ll connect you shortly
                    </Typography>
                  </Stack>
                </ScaleIn>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={1.2} sx={{ maxWidth: 420, mx: "auto" }}>
                    {/* Name */}
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Full Name"
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 40,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          borderRadius: 2.5,
                          bgcolor: "#f8f9ff",
                        },
                      }}
                    />

                    {/* Phone */}
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Phone Number"
                      value={lead.phone}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 40,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          borderRadius: 2.5,
                          bgcolor: "#f8f9ff",
                        },
                      }}
                    />

                    {/* Experience */}
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Experience (yrs)"
                      value={lead.exp}
                      onChange={(e) => setLead({ ...lead, exp: e.target.value })}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 40,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          borderRadius: 2.5,
                          bgcolor: "#f8f9ff",
                        },
                      }}
                    />

                    {/* Interested In (FIXED PLACEHOLDER) */}
                    <TextField
                      fullWidth
                      size="small"
                      select
                      value={lead.interest}
                      onChange={(e) => setLead({ ...lead, interest: e.target.value })}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (selected) => {
                          if (!selected) {
                            return (
                              <span style={{ color: "#9ca3af", fontWeight: 600 }}>
                                Interested In
                              </span>
                            );
                          }
                          return selected;
                        },
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 40,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          borderRadius: 2.5,
                          bgcolor: "#f8f9ff",
                          paddingLeft: "14px",
                        },
                        "& .MuiSelect-select": {
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: 0,
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


                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={loading}
                      sx={{
                        height: 44,
                        borderRadius: 2.5,
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        background: GRADIENT,
                        color: "white",
                        boxShadow: "0 8px 24px rgba(227,30,36,0.3)",
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                      }}
                      startIcon={<Phone sx={{ fontSize: 18 }} />}
                    >
                      {loading ? "Submitting..." : "Start My Journey"}
                    </Button>
                  </Stack>
                </Box>
              )}

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1.6,
                  fontSize: "0.65rem",
                }}
              >
                🔒 100% Private • 10 AM – 7 PM
              </Typography>

              <Stack direction="row" spacing={1.5} justifyContent="center" mt={1.5}>
                <Button size="small" startIcon={<Phone />} sx={{ fontSize: "0.7rem", color: PURPLE }}>
                  Call
                </Button>
                <Button
                  size="small"
                  startIcon={<WhatsApp />}
                  sx={{
                    fontSize: "0.7rem",
                    bgcolor: "#25D366",
                    color: "white",
                    "&:hover": { bgcolor: "#128C7E" },
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          </Box>
        </FadeInUp>
      </Container>
    </Box>
  );
}
