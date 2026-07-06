import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";

export default defineMcp({
  name: "shreyas-portfolio-mcp",
  title: "Shreyas Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring Shreyas Gowda's portfolio: profile/contact, projects, and skills.",
  tools: [getProfile, listProjects, listSkills],
});
