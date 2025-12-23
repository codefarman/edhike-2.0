import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Paper,
} from "@mui/material";
import {
    School,
    AccessTime,
    VerifiedUser,
    Insights,
    WorkspacePremium,
    Public,
    Handshake,
    TrendingUp,
    Psychology,
    People,
    MonetizationOn,
    ArrowUpward,
} from "@mui/icons-material";
import { FadeInUp } from "../../components/Animation/Motion";
// import WhyOnlineMBA from "./WhyOnlineMBA";

const RED = "#E31E24";
const PURPLE = "#5829A7";
const GRADIENT = `linear-gradient(135deg, ${RED}, ${PURPLE})`;

export default function Overview() {
    return (
        <Box component="section" sx={{ py: { xs: 8, md: 14 },mt:{xs:-8 ,  lg: -8},  bgcolor: "#fafafa" }}>
            <Container maxWidth="lg">
                {/* TOP SUMMARY */}
                <FadeInUp>
                    <Typography
                        align="center"
                        sx={{
                            color: RED,
                            fontWeight: 700,
                            fontSize: { xs: "0.7rem", md: "0.875rem" },
                            letterSpacing: 1,
                            mb: 2,
                            
                        }}
                    >
                        Your MBA | Your Pace
                    </Typography>
                    <Typography
                        align="center"
                        sx={{
                             fontSize:{ xs: "1rem", md: "1.6rem", lg: "2rem"},
                            fontWeight: 900,
                            background: GRADIENT,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 3,
                            lineHeight: 1.1,
                        }}
                    >
                        Launch Your Career Today
                    </Typography>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mb: 3 }}
                    >
                        {[
                            "Globally Recognised Degree",
                            "UGC-Approved University",
                            "100% Online Learning",
                        ].map((item) => (
                            <Paper
                                key={item}
                                elevation={3}
                                sx={{
                                    px: 4,
                                    py: 1.8,
                                    borderRadius: 50,
                                    fontSize: {xs: "0.7rem", md: "0.875rem"},
                                    fontWeight: 600,
                                    bgcolor: "#fff",
                                    border: `2px solid transparent`,
                                    background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
                                }}
                            >
                                {item}
                            </Paper>
                        ))}
                    </Stack>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <Typography align="center" color="text.secondary" sx={{ fontSize: {xs: "0.8rem", md: "0.875rem"}, mb: 3 }}>
                        Specific MBA Program designed for Next-Gen Professionals
                    </Typography>
                </FadeInUp>

                {/* PROGRAM STATS */}
                <FadeInUp delay={0.2}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >

                        {[
                            { label: "Universities", value: "37", icon: <School sx={{ fontSize: {xs: 24, md: 32} }} /> },
                            { label: "Duration", value: "2 Years", icon: <AccessTime sx={{ fontSize: {xs: 24, md: 32} }} /> },
                            { label: "Eligibility", value: "Graduation or equivalent", icon: <VerifiedUser sx={{ fontSize: {xs: 24, md: 32} }} /> },
                        ].map((stat) => (
                            <Grid size xs={12} md={4} key={stat.label}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        fontSize: { xs: "0.7rem", md: "1rem" },
                                        px: 2,            
                                        py: 2,          
                                        textAlign: "center",
                                        borderRadius: 4,
                                        bgcolor: "#fff",
                                        minWidth: 200,    
                                        maxWidth: 220,
                                        transition: "0.3s ease",
                                        border: "1px solid transparent",
                                        background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,

                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                                        },
                                    }}
                                >

                                    <Box sx={{ color: PURPLE, mb: 0 }}>{stat.icon}</Box>
                                    <Typography fontWeight={800} sx={{ fontSize: { xs: "0.8rem", md: "1.2rem" } }}>
                                        {stat.label}
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}>
                                        {stat.value}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </FadeInUp>

                {/* DESCRIPTION */}
                <FadeInUp delay={0.3}>
                    <Typography sx={{ mt: 5, mb: 6, lineHeight: 1.9, fontSize: { xs: "0.8rem", md: "1.05rem" }, color: "text.secondary", textAlign: "center" }}>
                        An Online MBA is a two-year postgraduate program costing INR 30,000-8,00,000, offering flexible learning for working professionals. The curriculum covers business fundamentals, strategic thinking, and leadership skills essential for real-world challenges. MBA graduates can earn up to 77% more than bachelor's degree holders, with specializations in finance, analytics, and digital business providing strongest returns. This format enables career advancement without income sacrifice, making it a high-ROI investment for ambitious professionals seeking leadership roles.
                    </Typography>
                </FadeInUp>

                {/* WHAT MAKES ONLINE MBAs VALUABLE - EXACT CARD LAYOUT FROM IMAGE */}
                <FadeInUp delay={0.3}>
                    <Typography
                        sx={{
                             fontSize:{ xs: "1rem", md: "1.6rem", lg: "2rem"},
                            fontWeight: 900,
                            textAlign: "center",
                            my: 10,
                            background: GRADIENT,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mt: -3,
                        }}
                    >
                        What Makes Online MBAs Valuable
                    </Typography>

                    <Typography color="text.secondary" sx={{ mb: 4, mt: -10, textAlign: "center", fontSize: { xs: "0.8rem", md: "1rem" } }}>
                        Online MBA programs are evolving beyond traditional business education. Expect cutting-edge curricula emphasizing:
                    </Typography>

                    {/* Two Cards Side by Side */}
                    <Grid
                        container
                        spacing={4}
                        alignItems="stretch"
                        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
                    >
                        {[
                        {title:' Career Impact Career Impact',description:"The numbers tell a compelling story: MBA graduates consistently out-earn Bachelor's degree holders, with salary premiums exceeding 77% potentially.Whether you're targeting leadership roles in Operations, Finance, Marketing,or emerging fields like Business Analytics and Digital Strategy, an MBAaccelerates your trajectory."},
                        {title:' High-Growth Specializations',description:"Focus areas with strongest career potential include Finance, Management,Business Analytics, Digital Marketing, Supply Chain Operations, &Entrepreneurship. These specializations align with evolving market demandsand offer superior advancement opportunities."}
                        ].map((item,index)=>(
                            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }} key={index}>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: { xs: 4, md: 5 },
                                    borderRadius: 6,
                                    bgcolor: "#fff",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    border: `3px solid transparent`,
                                    background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight={900}
                                    sx={{ mb: 1, textAlign: "center", color: PURPLE }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography color="text.secondary" sx={ { lineHeight: 1.8, fontSize: { xs: "0.8rem", md: "1rem" },textAlign:'center' } }>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                        ))}
                        {/* Card 1 */}
                        {/* <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: { xs: 4, md: 5 },
                                    borderRadius: 6,
                                    bgcolor: "#fff",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    border: `3px solid transparent`,
                                    background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight={900}
                                    sx={{ mb: 1, textAlign: "center", color: PURPLE }}
                                >
                                    Career Impact
                                </Typography>

                                <Typography color="text.secondary" sx={ { lineHeight: 1.8, fontSize: { xs: "0.8rem", md: "1rem" } } }>
                                    The numbers tell a compelling story: MBA graduates consistently out-earn
                                    Bachelor's degree holders, with salary premiums exceeding 77% potentially.
                                    Whether you're targeting leadership roles in Operations, Finance, Marketing,
                                    or emerging fields like Business Analytics and Digital Strategy, an MBA
                                    accelerates your trajectory.
                                </Typography>
                            </Paper>
                        </Grid> */}

                        {/* Card 2 */}
                        {/* <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: { xs: 4, md: 5 },
                                    borderRadius: 6,
                                    bgcolor: "#fff",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    border: `3px solid transparent`,
                                    background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight={900}
                                    sx={{ mb: 1, textAlign: "center", color: PURPLE }}
                                >
                                    High-Growth Specializations
                                </Typography>

                                 <Typography color="text.secondary" sx={ { lineHeight: 1.8, fontSize: { xs: "0.8rem", md: "1rem" } } }>
                                    Focus areas with strongest career potential include Finance, Management,
                                    Business Analytics, Digital Marketing, Supply Chain Operations, &
                                    Entrepreneurship. These specializations align with evolving market demands
                                    and offer superior advancement opportunities.
                                </Typography>
                            </Paper>
                        </Grid> */}
                    </Grid>


                    {/* Conclusion Paragraph */}
                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: { xs: 2, md: 3, lg: 5 },
                            px: { xs: 2, md: 8 },
                            textAlign: "center",
                            fontSize: { xs: "0.8rem", md: "1rem" },
                            fontStyle: "italic",
                        }}
                    >

                        An Online MBA isn't just an educational credential—it's a strategic career accelerator. With flexible learning formats, technology-enhanced experiences, and strong ROI projections, it remains the optimal choice for professionals seeking leadership positions and significant salary growth.
                    </Typography>
                </FadeInUp>

              
            </Container>
            {/* <WhyOnlineMBA /> */}
        </Box>
        
    );
}

