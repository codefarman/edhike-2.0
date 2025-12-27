import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { 
  FadeInUp, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem, 
  TextReveal,
  BounceIn 
} from "../../components/Animation/Motion";
import { useLeadPopup } from "../../context/LeadPopupContext";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

const FAQ_ITEMS = [
  {
    q: "What programs are available for working professionals?",
    a: "MBA, Data Science, AI & ML, Digital Marketing, Software Technology, and Leadership — from certifications to full master's with top universities.",
  },
  {
    q: "How does free counselling work?",
    a: "Fill any form with name & phone. Senior advisor calls you within minutes (9 AM – 9 PM) to recommend best-fit programs.",
  },
  {
    q: "Online or offline programs?",
    a: "All modes: Fully Online, Hybrid, or Classroom. Filter by preference on program pages.",
  },
  {
    q: "Placement support included?",
    a: "Yes — resume building, mock interviews, job listings, and many programs with placement assistance/guarantees.",
  },
  {
    q: "Payment options?",
    a: "UPI, Cards, Netbanking, 0% EMI with Bajaj Finserv, credit cards, and education loans.",
  },
  {
    q: "Can I switch programs?",
    a: "Yes, usually. Contact your advisor early for smooth transfer.",
  },
  {
    q: "How fast is response?",
    a: "Typically 5–10 minutes during hours. Real expert call — never automated.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
      const { openLeadPopup } = useLeadPopup();

  const handleChange = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box id="faq" component="section" sx={{ py: { xs: 4, md: 6, lg: 8 }, mt: { xs: -6, md: -15}, bgcolor: "white" }}>
      <Container maxWidth="md">
        <FadeInUp>
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
            <Typography
              variant="subtitle2"
              sx={{ color: RED, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "0.7rem", md: "0.875rem", lg: "0.9rem" }, mb:-2 }}
            >
              Frequently Asked Questions
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: { xs: 1, md: 1.5 },
                mb: { xs: 1, md: 2 },
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "3.2rem" },
                lineHeight: 1.2,
              }}
            >
              <TextReveal delay={0.2}>{' '}</TextReveal>{" "}
              <Box component="span" sx={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem" } }}>
                <TextReveal delay={0.1}> We've Got Answers</TextReveal>
              </Box>
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontSize: { xs: "0.7rem", md: "1rem", lg: "1.1rem" }, mt:-1 }}>
              Everything you need to confidently take your next career step.
            </Typography>
          </Box>
        </FadeInUp>

        <StaggerContainer delayChildren={0.05}>
          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <StaggerItem key={i}>
                  <ScaleIn delay={i * 0.04}>
                    <Accordion
                      expanded={isOpen}
                      onChange={() => handleChange(i)}
                      sx={{
                        bgcolor: "transparent",
                        boxShadow: "none",
                        borderRadius: 3,
                        mb: { xs: 0.3, md: 1,  lg:1 },
                        border: `1px solid ${isOpen ? PURPLE : "#eee"}`,
                        "&:before": { display: "none" },
                        transition: "all 0.4s",
                        "&:hover": { 
                          borderColor: PURPLE,
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 25px rgba(88,41,167,0.08)",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            <ExpandMore sx={{ color: isOpen ? PURPLE : "#666", fontSize: { xs: 20, md: 25 } }} />
                          </div>
                        }
                        sx={{
                          px: { xs: 2, md: 4 },
                          py: { xs: 1.8, md: 2.2 },
                          minHeight: "auto",
                          "& .MuiAccordionSummary-content": { my: 0 },
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{
                            fontSize: { xs: "0.8rem", md: "1rem" , lg: "1rem" },
                            color: isOpen ? PURPLE : "#111",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.q}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pt: 0, pb: { xs: 2, md: 3 } }}>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            lineHeight: 1.5,
                            fontSize: { xs: "0.7rem", md: "0.95rem" }
                          }}
                        >
                          {item.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </ScaleIn>
                </StaggerItem>
              );
            })}
          </Box>
        </StaggerContainer>

        <FadeInUp delay={0.4}>
          <Box sx={{ textAlign: "center", mt: { xs: 2, md: 3, lg: 4 } }}>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Still have questions?
            </Typography>
            <BounceIn>
              <Button
                variant="contained"
                onClick={openLeadPopup}
                sx={{
                  backgroundImage: GRADIENT,
                  bgcolor: "transparent",
                  color: "white",
                  px: { xs: 3, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: 4,
                  fontWeight: 800,
                  fontSize: { xs: "0.7rem", md: "0.6rem", lg: "0.9rem" },
                  boxShadow: "0 12px 35px rgba(227,30,36,0.3)",
                  "&:hover": { 
                    backgroundImage: GRADIENT,
                    transform: "translateY(-3px)", 
                    boxShadow: "0 20px 50px rgba(227,30,36,0.4)" 
                  },
                }}
              >
                Talk to an Advisor Now
              </Button>
            </BounceIn>
          </Box>
        </FadeInUp>
      </Container>
    </Box>
  );
}