import { defineTool } from "@lovable.dev/mcp-js";

const SKILLS = {
  "UI/UX Design": ["Figma", "Graphic Design", "App Design", "Web Design", "Design Systems"],
  "Programming & Development": ["Java", "JavaScript", "HTML", "CSS", "SQL", "Git", "Core Java", "React JS"],
  "Editing": ["Lightroom", "Picsart", "Snapseed", "Photo Editing", "Color Correction"],
  "Other": ["Football", "Volleyball", "Communication", "GitHub", "Teamwork"],
};

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Returns Shreyas's skills grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SKILLS, null, 2) }],
    structuredContent: { skills: SKILLS },
  }),
});
