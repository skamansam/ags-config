export function GPUMonitor() {
  const divide = ([total, free]) => free / total;
  // nvidia-smi --query-gpu=timestamp,name,pci.bus_id,driver_version,pstate,pcie.link.gen.max,pcie.link.gen.current,temperature.gpu,utilization.gpu,utilization.memory,memory.total,memory.free,memory.used --format=csv,noheader
  const gpuInfo = Variable(0, {
    poll: [
      2000,
      "nvidia-smi --query-gpu=temperature.gpu,utilization.gpu,utilization.memory,memory.total,memory.free,memory.used --format=csv,noheader",
      (out) => {
        return out.split(",").map((s) => parseInt(s.replaceAll(/[%\s]/g, "")));
      },
    ],
  });
  const info = gpuInfo.bind().as((i) => i);
  // const [gpuTemp, gpuUse, gpuMem, gpuMemTotal, gpuMemFree, gpuMemUsed] = info;
  console.log(
    "GPU TEMP:",
    gpuInfo.bind().as((i) => i.map(i.toPrecision(4))),
  );

  // console.log("TEMP:", gpuInfo[0]);

  // const gpuUsageProgress = Widget.CircularProgress({
  //   value: gpuUse.split(" ")[0] / 100,
  //   css: "min-width: 20px; min-height: 20px;",
  // });

  return Widget.Box({
    spacing: 8,
    // children: [gpuUsageProgress],
  });
}
