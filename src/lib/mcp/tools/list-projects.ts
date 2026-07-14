import { defineTool } from "@lovable.dev/mcp-js";

const PROJECTS = [
  { title: "Pizza Website - Figma Design", tech: ["Figma", "UI/UX"], url: "https://www.figma.com/proto/HtiEaxzqk9FSuUIX85gxNG/Untitled" },
  { title: "Cinema TVGo - Streaming Platform", tech: ["Java", "AI/ML"], url: "https://netflix-application-cinema-tvgo.vercel.app/" },
  { title: "AI Weather Forecast App", tech: ["Java", "AI/ML"], url: "https://deployed-weather-eight.vercel.app/" },
  { title: "CineMate - Movie Booking Platform", tech: ["Java", "AI/ML"], url: "https://cinemate-booking01.vercel.app/" },
  { title: "AI Resume Builder", tech: ["Java", "AI/ML"], url: "https://github.com/shreyas123-g/AI-Resume-builder" },
  { title: "Placement Prediction System", tech: ["Java", "AI/ML"], url: "https://github.com/shreyas123-g/placement" },
  { title: "Job Tracker Application", tech: ["Java", "AI/ML"], url: "https://github.com/shreyas123-g/job-tracker" },
  { title: "Car Price Prediction", tech: ["Java", "MongoDB"], url: "https://github.com/shreyas123-g/car-prize-prediction" },
  { title: "Secure Wallet", tech: ["Java", "MongoDB"], url: "https://github.com/shreyas123-g/main-project-of-coin" },
  { title: "My Portfolio Website", tech: ["React", "TypeScript", "Tailwind CSS"], url: "https://github.com/shreyas123-g/my-portfolio.git" },
];

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description: "Lists Shreyas's featured portfolio projects with tech stack and links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROJECTS, null, 2) }],
    structuredContent: { projects: PROJECTS },
  }),
});
