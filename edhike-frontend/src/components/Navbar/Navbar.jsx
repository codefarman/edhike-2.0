import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Popper,
  Paper,
  ClickAwayListener,
  Link,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RED = "#E31E24";
const PURPLE = "#5829A7";

const STUDY_ABROAD_COUNTRIES = [
  { name: "United Kingdom", code: "gb" },
  { name: "Ireland", code: "ie" },
  { name: "United States", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "New Zealand", code: "nz" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Switzerland", code: "ch" },
  { name: "UAE", code: "ae" },
  { name: "Netherlands", code: "nl" },
  { name: "Spain", code: "es" },
  { name: "Poland", code: "pl" },
  { name: "Grenada", code: "gd" },
  { name: "Cyprus", code: "cy" },
];

const PROGRAMS = [
  "Data Science & Analytics",
  "AI & Machine Learning",
  "MBA Programs",
  "Software Technology",
  "Digital Marketing",
  "Leadership & Management",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({ study: false, courses: false });

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [closeTimer, setCloseTimer] = useState(null);

  const menuItems = [
    { label: "Study Abroad", href: "/study-abroad", dropdown: "study" },
    { label: "Online MBA", href: "/online-mba" },
    { label: "Courses", href: "/courses", dropdown: "courses" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const isActive = (path) => currentPath.startsWith(path);

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "white", borderBottom: "1px solid #eee" }}>
        <Toolbar sx={{ minHeight: 90, px: { xs: 3, lg: 10 }, justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Link href="/" underline="none">
            <img src="/logos/edhike-text-logo.png" alt="EdHike" style={{ height: 35 }} />
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            {menuItems.map((item) => (
              <Box
                key={item.label}
                sx={{ position: "relative" }}
                onMouseEnter={(e) => {
                  if (closeTimer) clearTimeout(closeTimer);
                  setAnchorEl(e.currentTarget);
                  setOpenDropdown(item.dropdown || "");
                }}
                onMouseLeave={() => {
                  const timer = setTimeout(() => {
                    setOpenDropdown("");
                    setAnchorEl(null);
                  }, 250);
                  setCloseTimer(timer);
                }}
              >
                <Typography
                  component={Link}
                  href={item.href}
                  underline="none"
                  sx={{
                    color:
                      isActive(item.href) || openDropdown === item.dropdown ? RED : PURPLE,
                    fontWeight: 400,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    py: 1,
                    position: "relative",
                    transition: "0.25s",
                    "&:hover": {
                      color: RED,
                    },
                    "&:hover .hover-underline": {
                      width: "100%",
                      opacity: 1,
                    },
                  }}
                >
                  {item.label}

                  {item.dropdown && (
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 14,
                        transform: openDropdown === item.dropdown ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.8s",
                      }}
                    />
                  )}

                  {/* Hover underline */}
                  <Box
                    className="hover-underline"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      width: 0,
                      opacity: 0,
                      bgcolor: RED,
                      transition: "all 0.3s ease",
                    }}
                  />
                </Typography>

                {/* Dropdowns */}
                {item.dropdown && (
                  <Popper
                    open={openDropdown === item.dropdown}
                    anchorEl={anchorEl}
                    placement="bottom-start" 
                    modifiers={[{ name: "offset", options: { offset: [0, 10] } }]}
                    sx={{ zIndex: 1300 }}
                  >
                    <ClickAwayListener onClickAway={() => setOpenDropdown("")}>
                      <Paper
                        elevation={12}
                        sx={{
                          mt: 1,
                          borderRadius: 3,
                          overflow: "hidden",
                          width: item.dropdown === "study" ? 480 : 280,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                        onMouseEnter={() => {
                          if (closeTimer) clearTimeout(closeTimer);
                          setOpenDropdown(item.dropdown);
                        }}
                        onMouseLeave={() => {
                          const timer = setTimeout(() => setOpenDropdown(""), 250);
                          setCloseTimer(timer);
                        }}
                      >
                        {item.dropdown === "study" && (
                          <Box sx={{ p: 2.5 }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.8 }}>
                              {STUDY_ABROAD_COUNTRIES.map((c) => (
                                <Link
                                  key={c.name}
                                  href={`/study-abroad/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                                  underline="none"
                                  color="inherit"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    p: 0.5,
                                    borderRadius: 2,
                                    transition: "0.5s",
                                    "&:hover": { bgcolor: "#f9f9f9" },
                                  }}
                                >
                                  <img src={`https://flagcdn.com/32x24/${c.code}.png`} alt="" style={{ borderRadius: 2 }} />
                                  <Typography variant="body2" sx={{ fontSize: "0.775rem", fontWeight: 400 }}>
                                    {c.name}
                                  </Typography>
                                </Link>
                              ))}
                            </Box>
                          </Box>
                        )}

                        {item.dropdown === "courses" && (
                          <Box sx={{ py: 1 }}>
                            {PROGRAMS.map((prog) => (
                              <Box
                                key={prog}
                                sx={{
                                  px: 3,
                                  py: 1.4,
                                  "&:hover": { bgcolor: "#f9f9f9" },
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2" sx={{ fontSize: "0.775rem" }}>
                                  {prog}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Paper>
                    </ClickAwayListener>
                  </Popper>
                )}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setMobileOpen(true)}>
            <MenuIcon sx={{ fontSize: 34, color: PURPLE }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: "85vw", maxWidth: 380, p: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <img src="/logos/edhike-text-logo.png" alt="EdHike" style={{ height: 30 }} />
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon sx={{ fontSize: 27 }} />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <Box key={item.label}>
                <ListItemButton
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileDropdown((prev) => ({ ...prev, [item.dropdown]: !prev[item.dropdown] }));
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  sx={{
                    py: 2,
                    color: PURPLE,
                    fontWeight: 300,
                  }}
                >
                  <ListItemText primary={item.label} />
                  {item.dropdown && (
                    <ExpandMoreIcon
                      sx={{
                        transform: mobileDropdown[item.dropdown] ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.3s",
                      }}
                    />
                  )}
                </ListItemButton>

                {item.dropdown === "study" && (
                  <Collapse in={mobileDropdown.study}>
                    <Box sx={{ pl: 3, pb: 2 }}>
                      {STUDY_ABROAD_COUNTRIES.map((c) => (
                        <ListItemButton key={c.name} onClick={() => setMobileOpen(false)}>
                          <img src={`https://flagcdn.com/32x24/${c.code}.png`} alt="" style={{ marginRight: 12, borderRadius: 3 }} />
                          <ListItemText primary={c.name} />
                        </ListItemButton>
                      ))}
                    </Box>
                  </Collapse>
                )}

                {item.dropdown === "courses" && (
                  <Collapse in={mobileDropdown.courses}>
                    <Box sx={{ pl: 3, pb: 2 }}>
                      {PROGRAMS.map((prog) => (
                        <ListItemButton key={prog} onClick={() => setMobileOpen(false)}>
                          <ListItemText primary={prog} />
                        </ListItemButton>
                      ))}
                    </Box>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
}
