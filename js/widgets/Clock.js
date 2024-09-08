const date = Variable("", {
  poll: [1000, 'date "+ %b.%e %H:%M"'],
});

export function Clock() {
  return Widget.Label({
    class_name: "clock",
    label: date.bind(),
  });
}
