import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns Shreyas Gowda's professional profile, contact info, and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "Shreyas Gowda",
            role: "Full Stack Developer & UI/UX Designer",
            status: "Fresher, ready to work",
            email: "gowdashreyas136@gmail.com",
            social: {
              instagram: "https://www.instagram.com/_shreyas__.7/",
              github: "https://github.com/shreyas123-g",
              linkedin: "https://www.linkedin.com/in/shreyas-com",
            },
          },
          null,
          2,
        ),
      },
    ],
  }),
});
