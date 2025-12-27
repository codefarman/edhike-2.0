// src/data/programsData.js

import {
  BarChart,
  SmartToy,
  School,
  LaptopMac,
  Campaign,
  Groups,
  Public,
} from "@mui/icons-material";

const RED = "#E31E24";
const PURPLE = "#5829A7";

export const programsData = [
  {
    id: 1,
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    icon: BarChart,
    color: PURPLE,

    summary: {
      duration: "6–12 months",
      format: "100% Online + Live Projects",
      roles: "Data Analyst, Business Analyst, Data Scientist",
      description:
        "Uncover the power of data. Learn Python, SQL, machine learning, data visualization, and real-world analytics tools.",
    },

    subPrograms: [
      {
        id: "ai-3",
        slug: "iitb-ds-ai",
        title: "Post Graduate Program in Data Science & AI",
        institute: "IIT-B Bangalore",
        duration: "13 Months",
        image: "https://static.wixstatic.com/media/0d481a_70df3272c41545b59c92c18f3289e77a~mv2.jpg/v1/fill/w_924,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1_11zon.jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/machine-learning-ai/pg-program-in-data-science-and-ai",
      },

      {
        id: "ds-2",
        slug: "liverpool-ms-ds",
        title: "Master of Science in Data Science",
        institute: "Liverpool Business School",
        duration: "18 Months",
        highlights: "UK degree, global curriculum",
        image: "https://static.wixstatic.com/media/0d481a_2d90668280954f01bd0295b3a76acaad~mv2.jpg/v1/fill/w_924,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3_11zon.jpg",
        wixUrl: "https://www.edhike.in/data-science-analytics/master-of-science-in-data-science"

      },
      {
        id: "ds-3",
        slug: "liba-business-analytics",
        title: "Executive PG Program in Business Analytics",
        institute: "LIBA",
        duration: "12 Months",
        highlights: "Industry-aligned analytics",
        image: "https://static.wixstatic.com/media/0d481a_c26180051494452f861883cf4c4b004a~mv2.jpg/v1/fill/w_924,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2_11zon.jpg",
        wixUrl: "https://www.edhike.in/data-science-analytics/exec-pg-prog-in-business-analytics"
      },
    ],
  },

  {
    id: 2,
    slug: "ai-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    icon: SmartToy,
    color: RED,

    summary: {
      duration: "9–12 months",
      format: "Instructor-led + Self-paced",
      roles: "ML Engineer, AI Researcher, Computer Vision Engineer",
      description:
        "Dive deep into AI, Neural Networks, Deep Learning, and NLP with expert mentorship and real-world projects.",
    },

    subPrograms: [
      {
        id: "ai-1",
        slug: "iitb-ml-ai-executive",
        title: "Post Graduate Program in Machine Learning & AI (Executive)",
        institute: "IIT-B Bangalore",
        duration: "12 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/machine-learning-ai/pg-prog-in-ml-and-ai",
      },
      {
        id: "ai-2",
        slug: "liverpool-ml-ai",
        title: "Master of Science in Machine Learning & AI",
        institute: "Liverpool John Moores University",
        duration: "12 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/machine-learning-ai/master-of-science-in-ml-and-ai",
      },
      {
        id: "ai-3",
        slug: "iitb-ds-ai",
        title: "Post Graduate Program in Data Science & AI",
        institute: "IIT-B Bangalore",
        duration: "13 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/machine-learning-ai/pg-program-in-data-science-and-ai",
      },
    ],
  },

  {
    id: 3,
    slug: "mba",
    title: "MBA (Master of Business Administration)",
    icon: School,
    color: PURPLE,

    summary: {
      duration: "12–24 months",
      format: "Online + Optional Campus Immersion",
      roles: "Manager, Consultant, Strategist, Entrepreneur",
      description:
        "Accelerate your leadership journey with an accredited online MBA and global exposure.",
    },

    subPrograms: [
      {
        id: "mba-1",
        slug: "mba-online",
        title: "MBA (Master of Business Administration)",
        institute: "Online",
        duration: "24 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://edhike-2-0.vercel.app/online-mba",
      },
      {
        id: "mba-2",
        slug: "mba-global-liverpool",
        title: "MBA (Global)",
        institute: "Liverpool Business School",
        duration: "18 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/mba-liverpool-business-school",
      },
      {
        id: "mba-3",
        slug: "mba-global-ggu",
        title: "MBA (Global)",
        institute: "Golden Gate University",
        duration: "15 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/global-mba-ggu",
      },
      {
        id: "mba-4",
        slug: "mba-global-deakin",
        title: "MBA (Master of Business Administration)",
        institute: "Deakin Business School",
        duration: "24 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/mba-global-deakin-university",
      },
      {
        id: "mba-5",
        slug: "mba-global-ects",
        title: "Master in International Management (120 ECTS)",
        institute: "International University of Applied Science",
        duration: "24 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/mba-courses/master-in-international-management-120-ects",
      },
      {
        id: "mba-6",
        slug: "mba-global-ggu",
        title: "Master of Business Administration (90 ECTS)",
        institute: "International University of Applied Science",
        duration: "18 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/mba-courses/mba-90-ects",
      },
    ],
  },

  {
    id: 4,
    slug: "software-technology",
    title: "Software & Technology",
    icon: LaptopMac,
    color: RED,

    summary: {
      duration: "3–12 months",
      format: "Hands-on, Tool-based",
      roles: "Software Developer, DevOps Engineer, Cloud Engineer",
      description:
        "Become job-ready in Full Stack, DevOps, Cloud, or modern software technologies.",
    },

    subPrograms: [
      {
        id: "st-1",
        slug: "ms-computer-science",
        title: "Master of Science in Computer Science",
        institute: "IIT-B Bangalore",
        duration: "13 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/software-tech-courses/master-of-science-computer-science",
      },
      {
        id: "st-2",
        slug: "full-stack-executive",
        title: "Executive PG Program in Software Development – Full Stack",
        institute: "IIT-B Bangalore",
        duration: "13 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/software-tech-courses/full-stack-development",
      },
    ],
  },

  {
    id: 5,
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    icon: Campaign,
    color: PURPLE,

    summary: {
      duration: "4–6 months",
      format: "Project-based learning",
      roles: "Digital Marketer, Growth Manager, PPC Specialist",
      description:
        "Master SEO, SEM, performance marketing, analytics, and growth strategy.",
    },

    subPrograms: [
      {
        id: "dm-1",
        slug: "mica-digital-marketing",
        title: "Advance Certificate in Digital Marketing & Communication",
        institute: "MICA",
        duration: "31–51 Weeks",
        image: "https://static.wixstatic.com/media/37b7c8_f2faf0e420ea4fe0859a01776994f53c~mv2.jpg/v1/crop/x_0,y_78,w_5000,h_3109/fill/w_692,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/map-lying-wooden-table.jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/marketing-courses/adv-certi-in-digital-marketing-and-communication"
      },
      {
        id: "dm-2",
        slug: "liba-business-analytics",
        title: "Executive PG Program in Business Analytics",
        institute: "LIBA",
        duration: "12 Months",
        image: "https://static.wixstatic.com/media/37b7c8_483c4a2d3df44eefbfacfb1c09bb5e07~mv2.png/v1/crop/x_0,y_132,w_5760,h_3576/fill/w_678,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(5).png",
        wixUrl: "https://www.edhike.in/data-science-analytics/exec-pg-prog-in-business-analytics"
      },
      {
        id: "dm-3",
        slug: "mica-brand-communication",
        title: "Advance Certificate in Brand Communication Management",
        institute: "MICA",
        duration: "5 Months",
        image: "https://static.wixstatic.com/media/37b7c8_6d03a2441a174a48b6d6df50b21eaeda~mv2.jpeg/v1/crop/x_550,y_0,w_2900,h_1800/fill/w_692,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1695034802phpjdHbmw.jpeg",
        wixUrl: "https://www.edhike.in/best-online-programs/marketing-courses/adv-certi-in-brand-communication-and-management"
      },
    ],
  },

  {
    id: 6,
    slug: "management-leadership",
    title: "Management & Leadership (Certificates)",
    icon: Groups,
    color: RED,

    summary: {
      duration: "6–12 months",
      format: "Case studies + leadership labs",
      roles: "Operations Manager, Team Lead, Founder",
      description:
        "Build strategic thinking and people management skills for leadership roles.",
    },

    subPrograms: [
      {
        id: "ml-1",
        slug: "iim-hr-analytics",
        title: "Professional Certificate Program in HR Management & Analytics",
        institute: "IIM Kozhikode",
        duration: "5 Months",
        image: "https://static.wixstatic.com/media/37b7c8_0451f84e94c04130a55425cb70fa2992~mv2.webp/v1/fill/w_702,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_iim-kozhikode.webp",
        wixUrl: "https://www.edhike.in/best-online-programs/management-courses/prof-certi-prog-in-hr-management-and-analytics"
      },
      {
        id: "ml-2",
        slug: "liba-hr-management",
        title: "Executive Post Graduate Program in HR Management",
        institute: "LIBA",
        duration: "5 Months",
        image: "https://static.wixstatic.com/media/37b7c8_3eae50bea79349acbbea47c1068ed308~mv2.jpg/v1/fill/w_702,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Loyola%20Institute.jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/management-courses/exec-pg-program-in-hr-management"
      },
      {
        id: "ml-3",
        slug: "duke-product-management",
        title: "Post Graduate Certificate in Product Management",
        institute: "Duke Corporate Education",
        duration: "6–10 Months",
        image: "https://static.wixstatic.com/media/37b7c8_e722511078924149bb69bca94b99f3e2~mv2.jpg/v1/fill/w_692,h_410,al_c,lg_1,q_80,enc_avif,quality_auto/Duke%20University.jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/management-courses/pg-certificate-in-product-management"
      },
      {
        id: "ml-4",
        slug: "msu-supply-chain",
        title: "Global Master Certificate in Integrated Supply Chain Management",
        institute: "Michigan State University",
        duration: "6 Months",
        image: "https://static.wixstatic.com/media/37b7c8_cbcfc1223f1141dd97d064b77e371f0f~mv2.jpg/v1/fill/w_702,h_416,al_c,lg_1,q_80,enc_avif,quality_auto/Michigan%20State%20University.jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/management-courses/global-master-certificate-in-integrated-supply-chain-management"
      },
    ],
  },

  {
    id: 7,
    slug: "global-mba",
    title: "Master’s Program (Global MBA)",
    icon: Public,
    color: PURPLE,

    summary: {
      duration: "1.5–3 years",
      format: "Global faculty + mentorship",
      roles: "Business, Tech, Healthcare, Data Science",
      description:
        "Advance your career with a globally recognized master’s program.",
    },

    subPrograms: [
      {
        id: "mba'g-1",
        slug: "mba-global-liverpool",
        title: "MBA (Global)",
        institute: "Liverpool Business School",
        duration: "18 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/mba-liverpool-business-school",
      },
      {
        id: "mba'g-2",
        slug: "mba-global-ggu",
        title: "MBA (Global)",
        institute: "Golden Gate University",
        duration: "15 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/global-mba-ggu",
      },
      {
        id: "mba'g-3",
        slug: "mba-global-deakin",
        title: "MBA (Master of Business Administration)",
        institute: "Deakin Business School",
        duration: "24 Months",
        image: "https://static.wixstatic.com/media/37b7c8_f6bb49fb776d4b83b28bee731318ce30~mv2.jpg/v1/crop/x_0,y_192,w_5616,h_3360/fill/w_712,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/christin-hume-mfB1B1s4sMc-unsplash%20(1).jpg",
        wixUrl: "https://www.edhike.in/best-online-programs/master-programs/mba-global-deakin-university",
      },
    ],
  },
];
