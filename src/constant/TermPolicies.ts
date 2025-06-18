type Section = {
  title: string;
  introduction?: string;
  points: string[];
  conclusion?: string;
};

export const sections: Section[] = [
  {
    title: "Portfolio Usage & Access",
    introduction:
      "This portfolio website serves as a professional showcase of my work, skills, and expertise in software development. By accessing this portfolio, you agree to:",
    points: [
      "Use the content for personal, non-commercial reference",
      "Not attempt to reverse engineer or copy the demonstrated projects",
      "Respect the intellectual property rights of all content presented",
      "Not use any automated systems or bots to access the portfolio",
    ],
  },
  {
    title: "Intellectual Property Rights",
    introduction:
      "All content within this portfolio is protected by intellectual property laws and remains my exclusive property. This includes:",
    points: [
      "Source code and programming examples",
      "Project demonstrations and implementations",
      "Design elements and visual assets",
      "Written content and documentation",
      "Personal branding and logos",
    ],
    conclusion:
      "You may reference or cite this work with proper attribution, but reproduction or commercial use requires explicit written permission.",
  },
  {
    title: "Project Demonstrations & Code Samples",
    introduction:
      "The projects and code samples showcased in this portfolio demonstrate my technical capabilities and development approach. Please note:",
    points: [
      "All demonstrations are provided for illustrative purposes only",
      "Projects may use third-party services, APIs, and dependencies",
      "Some features may be limited in demo versions",
      "Code samples are meant for educational purposes",
      "Implementation details may vary in production environments",
    ],
    conclusion:
      "While you're welcome to learn from these examples, they are not intended for direct reproduction or commercial use without permission.",
  },
  {
    title: "External Links & Resources",
    introduction:
      "This portfolio contains links to external platforms and resources, including:",
    points: [
      "Professional social media profiles (LinkedIn, Twitter)",
      "Code repositories on GitHub",
      "Blog posts on various platforms",
      "Project demonstrations and live examples",
      "Third-party tools and services used in projects",
    ],
    conclusion:
      "While these external resources are carefully selected, I cannot be responsible for their content or availability.",
  },
  {
    title: "Professional Communication",
    introduction:
      "When reaching out through this portfolio for professional inquiries:",
    points: [
      "Provide accurate and relevant information",
      "Maintain professional and respectful communication",
      "Use the provided contact methods for legitimate business purposes",
      "Expect reasonable response times during business hours",
      "Respect confidentiality in our communications",
    ],
  },
  {
    title: "Data & Privacy Considerations",
    introduction: "While interacting with this portfolio website:",
    points: [
      "Only necessary cookies and technical data are collected",
      "No personal information is stored without explicit consent",
      "Analytics may be used to improve user experience",
      "Your data is never sold or shared with third parties",
      "You can request information about your data at any time",
    ],
    conclusion:
      "Your privacy is important. Any collected information is handled with utmost care and in accordance with standard privacy practices.",
  },
  {
    title: "Updates & Modifications",
    introduction:
      "This portfolio and its terms may evolve over time. I reserve the right to:",
    points: [
      "Update portfolio content and project demonstrations",
      "Modify these terms to reflect new features or requirements",
      "Add or remove projects and code samples",
      "Improve site functionality and user experience",
      "Change or discontinue any aspect of the portfolio",
    ],
    conclusion:
      "Any significant changes to these terms will be reflected in the 'Last Updated' date shown above.",
  },
  // {
  //   title: "Disclaimer",
  //   introduction:
  //     "While I strive to maintain accurate and up-to-date information:",
  //   points: [
  //     "All content is provided 'as is' without warranties",
  //     "Project demonstrations may not reflect current versions",
  //     "Technical implementations may need adaptation for specific use cases",
  //     "Performance may vary based on user environment and conditions",
  //     "Success with demonstrated techniques cannot be guaranteed",
  //   ],
  //   conclusion:
  //     "Always perform your own testing and validation before implementing any solutions in production environments.",
  // },
];
