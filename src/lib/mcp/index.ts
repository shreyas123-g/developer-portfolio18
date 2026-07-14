import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";

const supabaseUrl =
  import.meta.env?.VITE_SUPABASE_URL ??
  "https://svzejjuxwicmluzdurfl.supabase.co";

export default defineMcp({
  name: "shreyas-portfolio-mcp",
  title: "Shreyas Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring Shreyas Gowda's portfolio: profile/contact, projects, and skills.",
  tools: [getProfile, listProjects, listSkills],
  auth: auth.oauth.issuer({
    issuer: `${supabaseUrl}/auth/v1`,
    acceptedAudiences: "authenticated",
    jwksUri: `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
  }),
});
