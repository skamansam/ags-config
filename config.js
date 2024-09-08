import { Bar } from "./js/TopPanel.js";
import { Notifications } from "./js/Notifications.js";
import { AppLauncher } from "./js/AppLauncher.js";
// import { MediaWidget } from "./js/MediaWidget.js";

App.config({
  style: App.configDir + "/styles/index.css",
  windows: [
    Bar(),
    Notifications(),
    AppLauncher,
    // MediaWidget,
  ],
});
