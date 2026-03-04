// ===================================
// CONFIGURATION FILE
// Add/remove sections here - everything auto-generates!
// ===================================

const SITE_CONFIG = {
    title: "LLM & AI Engineer Knowledge Archive",
    subtitle: "A comprehensive guide to Large Language Models and AI Engineering",
    lastUpdated: "March 4, 2026",
    
    // Add or remove sections here
    sections: [
        {
            id: "section-1",
            title: "Fundamentals of LLMs & AI",
            file: "content/section-1.md",
            subsections: [
                "Introduction to LLMs",
                "Core Architecture",
                "Popular Models"
            ]
        },
        {
            id: "section-2",
            title: "AI Engineer Roadmap",
            file: "content/section-2.md",
            subsections: [
                "Foundation Skills",
                "ML Basics",
                "Deep Learning",
                "LLM Specialization"
            ]
        },
        {
            id: "section-3",
            title: "Core Technologies",
            file: "content/section-3.md",
            subsections: [
                "Frameworks",
                "Development Tools",
                "Cloud Platforms"
            ]
        },
        {
            id: "section-4",
            title: "Advanced Topics",
            file: "content/section-4.md",
            subsections: [
                "Model Optimization",
                "Ethics & Safety",
                "Emerging Trends"
            ]
        },
        {
            id: "section-5",
            title: "Resources & Tools",
            file: "content/section-5.md",
            subsections: [
                "Learning Platforms",
                "Community",
                "Tools & APIs",
                "Documentation"
            ]
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
