import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  base: "/docs",
  integrations: [
    starlight({
      title: "Product Docs",
      description: "Documentation for this product.",
      head: [],
      favicon: "/favicon.svg",
      social: {
        github: "https://github.com/your-org/your-repo"
      },
      sidebar: [
        { label: "Overview", link: "/" },
        { label: "Hosted", link: "/hosted" },
        { label: "Self-hosting", link: "/self-hosting" },
        { label: "Configuration", link: "/configuration" },
        { label: "Upgrades", link: "/upgrades" },
        { label: "Backups", link: "/backups" },
        { label: "Privacy & Telemetry", link: "/privacy-telemetry" },
        { label: "Troubleshooting", link: "/troubleshooting" },
        { label: "ADRs", link: "/adr/0000-template" }
      ]
    })
  ]
});
