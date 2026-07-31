export const projects = [
  {
    id: "careerboost",
    title: "CareerBoost AI",
    category: "AI Tool / Resume Analyzer",
    shortDescription: "An AI-powered Resume Analyzer that evaluates resumes, calculates ATS scores, identifies missing skills, and provides personalized improvement suggestions using Google Gemini AI.",
    tags: ["Python", "Streamlit", "Gemini API", "PyPDF2", "Plotly"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "CareerBoost AI is a modern intelligence utility designed to automate resume evaluations, extract layout properties, compute industry match scores, and give real-time alignment feedback for tech candidates.",
      challenge: "Parsing diverse unstructured PDF resume patterns while maintaining low latency, precise semantic extraction, and safe API integration workflows.",
      approach: "Designed a clean parsing process using PyPDF2, mapped robust Prompt templates using Google Gemini AI, and structured user visualization graphs with Plotly.",
      solution: "Created text extraction functions, computed real-time ATS scores, matched missing technical competencies, and rendered interactive charts inside a clean Streamlit interface.",
      technologies: ["Python", "Streamlit", "Google Gemini API", "PyPDF2", "Plotly", "GitHub"],
      outcome: "Successfully deployed a fully functional web tool allowing users to upload resumes and receive actionable ATS feedback instantly."
    }
  },
  {
    id: "heallink",
    title: "HealLink",
    category: "AI Healthcare Platform",
    shortDescription: "AI-powered emergency healthcare platform providing accident detection, SOS alerts, nearby hospitals, EMR management, navigation, and AI medical assistance.",
    tags: ["React", "Firebase", "Supabase", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "HealLink is an end-to-end emergency support ecosystem designed to trigger prompt alerts during accidents, manage electronic health data, and supply AI-driven first-aid guidelines.",
      challenge: "Synchronizing critical alerts instantly across users, mapping geographical coordinates, and guaranteeing highly secure database storage for private medical data.",
      approach: "Constructed a client-server setup using React, Express, and MongoDB. Integrated real-time notifications via Firebase/Supabase and medical guidance using Gemini AI.",
      solution: "Engineered geolocation mapping triggers, built secure medical profile directories, and developed conversational medical support prompts.",
      technologies: ["React", "Firebase", "Supabase", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
      outcome: "Delivered an emergency portal linking accident detection warnings, live hospital navigation, and conversational first-aid support."
    }
  },
  {
    id: "livercirrhosis",
    title: "Liver Cirrhosis Prediction",
    category: "Machine Learning Model",
    shortDescription: "Machine Learning project for predicting liver cirrhosis stages using patient clinical indicators and Random Forest classification.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "Liver Cirrhosis Prediction is a clinical analytics project designed to evaluate liver damage progression stages using medical databases and classifier models.",
      challenge: "Handling clinical recording gaps, missing data fields, and significant target label imbalance across datasets.",
      approach: "Applied pre-processing transformations, engineered features, and trained multiple classifiers (Random Forest, SVM, logistic regression) using Python.",
      solution: "Resolved missing data features, adjusted class sample distribution gaps, and compiled a predictive dashboard using Streamlit.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit", "GitHub"],
      outcome: "Compiled a predictive model capable of evaluating liver cirrhosis risk metrics with high precision."
    }
  },
  {
    id: "ecotrade",
    title: "EcoTrade",
    category: "Sustainable Trading App",
    shortDescription: "Sustainable trading web application developed during the 1M1B internship, leveraging modern web layout systems.",
    tags: ["TypeScript", "HTML5", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      overview: "EcoTrade is a circular economy portal designed during the 1M1B internship to facilitate trading of recyclable materials, carbon credits, and green products.",
      challenge: "Ensuring type-safety across components and building highly responsive layouts optimized for weak networks.",
      approach: "Built clean component trees using TypeScript and designed lightweight layouts using custom variables.",
      solution: "Structured local state handlers, optimized image rendering weights, and implemented modern layout patterns.",
      technologies: ["TypeScript", "Web Technologies", "HTML5", "CSS3", "JavaScript"],
      outcome: "Successfully delivered a sustainable web interface prototype featuring type-safe code logic."
    }
  }
];
