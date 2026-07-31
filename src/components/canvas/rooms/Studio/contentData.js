/**
 * Studio Content Data
 * 
 * Custom content for Mariya Ansari's monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'Tech Video',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#eab308',
        accentColor: '#ca8a04',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '📱',
        label: 'Micro Log',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Case Studies / Projects ============
    {
        id: 'studio-smartbridge',
        platform: 'blog',
        title: 'SmartBridge ML Internship: Liver Cirrhosis Prediction',
        description: 'Developed a predictive analytics pipeline using Random Forest. Preprocessed clinical data columns, handled class imbalances, and compiled an end-to-end model dashboard.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://github.com/Praveen-6163/Predicting-LiverCirrhosis-using-Advanced-Machine-Learning-Techniques',
        date: '2025-09-15',
        readTime: '8 min',
    },
    {
        id: 'studio-1m1b',
        platform: 'blog',
        title: '1M1B Web Developer Internship: EcoTrade Platform',
        description: 'Created a circular economy trade portal using React, TypeScript, and modern web layouts. Engineered type-safe frontend modules and optimized payload sizes for faster rendering.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/Praveen-6163',
        date: '2025-12-10',
        readTime: '6 min',
    },
    {
        id: 'studio-careerboost',
        platform: 'blog',
        title: 'CareerBoost AI: Parsing & Analysing resumes with Gemini',
        description: 'Designed a Streamlit tool running Google Gemini AI. Reads PDF formatting tables using PyPDF2, scores applicant resumes, and generates advice details instantly.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/Praveen-6163/careerboost-ai-resume-analyzer',
        date: '2026-02-28',
        readTime: '5 min',
    },
    {
        id: 'studio-heallink',
        platform: 'linkedin',
        title: 'HealLink: AI emergency platform launch & integration',
        description: 'Collaborated on an emergency health support hub linking Google Maps navigation, accident triggers, SOS warnings, and first-aid recommendations using LLM pipelines.',
        thumbnail: null,
        url: 'https://heallink1.netlify.app/',
        date: '2026-03-10',
        readTime: '7 min',
    },
    {
        id: 'studio-aws',
        platform: 'blog',
        title: 'AWS Automation and Cloud Security Architecture',
        description: 'Studied cloud infrastructure, configuring AWS server architectures, security groups, database scaling properties, and automated pipeline scripts.',
        thumbnail: null,
        url: '#',
        date: '2026-01-20',
        readTime: '6 min',
    },
    {
        id: 'studio-gemini',
        platform: 'tiktok',
        title: 'Integrating Google Gemini API inside Python web tools',
        description: 'How to write asynchronous call loops, handle rate limits, and structure JSON prompts using the new Google AI Studio key configurations.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-05',
        views: '4.2K',
        likes: '612',
    },
    {
        id: 'studio-datavis',
        platform: 'blog',
        title: 'Plotly & Pandas: Interactive data analysis boards',
        description: 'Building custom analytics dashboards in Streamlit. Using Pandas for clean dataset conversions and Plotly charts for responsive layouts.',
        thumbnail: null,
        url: '#',
        date: '2025-11-15',
        readTime: '9 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
