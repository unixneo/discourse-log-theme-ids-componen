import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "log-theme-ids",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      console.log("Active theme IDs:", api.siteSettings.active_theme_ids);

      const themeService = api.container.lookup("service:theme");
      const current = themeService.currentTheme || themeService.activeTheme;
      console.log("Current theme ID:", current.id);
    });
  },
};

