const battery = await Service.import("battery");

export function BatteryLabel() {
  const value = battery.bind("percent").as((p) => (p > 0 ? p / 100 : 0));
  const icon = battery
    .bind("percent")
    .as((p) => `battery-level-${Math.floor(p / 10) * 10}-symbolic`);

  return Widget.Box({
    class_name: "battery",
    visible: battery.bind("available"),
    children: [
      Widget.Icon({ icon }),
      Widget.LevelBar({
        vertical: true,
        widthRequest: 10,
        heightRequest: 20,
        vpack: "center",
        vexpand: false,
        value,
      }),
    ],
  });
}
