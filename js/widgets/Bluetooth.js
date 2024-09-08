const bluetooth = await Service.import("bluetooth");

export function Bluetooth() {
  const btConnectedList = Widget.Box({
    setup: (self) =>
      self.hook(
        bluetooth,
        (self) => {
          self.children = bluetooth.connected_devices.map(
            ({ icon_name, name }) =>
              Widget.Box([
                Widget.Icon(icon_name + "-symbolic"),
                Widget.Label(name),
              ]),
          );

          self.visible = bluetooth.connected_devices.length > 0;
        },
        "notify::connected-devices",
      ),
  });

  const btCSS = bluetooth
    .bind("connected_devices")
    .as((devices) => (devices.length > 0 ? "color: green" : "color: red"));
  const btIcon = bluetooth
    .bind("enabled")
    .as((on) => `bluetooth-${on ? "active" : "disabled"}-symbolic`);
  return Widget.Icon({
    icon: btIcon,
    css: btCSS,
    class_name: "bluetooth",
  });
}
