const hyprland = await Service.import("hyprland");

import { AppTitle } from "./widgets/AppTitle.js";
import { BatteryLabel } from "./widgets/BatteryLabel.js";
import { Bluetooth } from "./widgets/Bluetooth.js";
import { Clock } from "./widgets/Clock.js";
import { GPUMonitor } from "./widgets/GPUMonitor.js";
import { Media } from "./widgets/Media.js";
// import { Notification } from "./widgets/Notification.js";
import { SysTray } from "./widgets/SysTray.js";
import { SysMonitors } from "./widgets/SysMonitors.js";
import { Volume } from "./widgets/Volume.js";
import { Workspaces } from "./widgets/Workspaces.js";

// This is the central config object for the top panel
const layout = {
  left: [Workspaces(), AppTitle()],
  center: [
    //Notification()
  ],
  right: [
    Media(),
    Volume(),
    BatteryLabel(),
    GPUMonitor(),
    SysMonitors(),
    SysTray(),
    Bluetooth(),
    Clock(),
  ],
};

export function Bar(monitor = 0) {
  return Widget.Window({
    name: `bar-${monitor}`, // name has to be unique
    class_name: "bar",
    monitor,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      start_widget: Widget.Box({
        spacing: 8,
        children: layout.left,
      }),
      center_widget: Widget.Box({
        spacing: 8,
        children: layout.center,
      }),
      end_widget: Widget.Box({
        hpack: "end",
        spacing: 8,
        children: layout.right,
      }),
    }),
  });
}

export default {
  Bar,
};
