const hyprland = await Service.import("hyprland");

export function AppTitle() {
  return Widget.Label({
    class_name: "client-title",
    label: hyprland.active.client
      .bind("title")
      .as((t) => t.slice(0, 15) || "No title"),
  });
}
