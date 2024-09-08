export function SysMonitors() {
  const divide = ([total, free]) => free / total;

  const cpu = Variable(0, {
    poll: [
      2000,
      "top -b -n 1",
      (out) =>
        divide([
          100,
          out
            .split("\n")
            .find((line) => line.includes("Cpu(s)"))
            .split(/\s+/)[1]
            .replace(",", "."),
        ]),
    ],
  });

  const ram = Variable(0, {
    poll: [
      2000,
      "free",
      (out) =>
        divide(
          out
            .split("\n")
            .find((line) => line.includes("Mem:"))
            .split(/\s+/)
            .splice(1, 2),
        ),
    ],
  });

  const cpuProgress = Widget.CircularProgress({
    value: cpu.bind(),
    css: "min-width: 20px; min-height: 20px;",
  });

  const ramProgress = Widget.CircularProgress({
    value: ram.bind(),
    css: "min-width: 20px; min-height: 20px;",
  });
  return Widget.Box({
    spacing: 8,
    children: [cpuProgress, ramProgress],
  });
}
