// Mirrors lighthouse_settings in "Web Platform Slow 4G Mobile Check Profile.yaml".
// Do not change these values here; change the profile instead.
module.exports = {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance"],
    formFactor: "mobile",
    throttlingMethod: "simulate",
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      requestLatencyMs: 562.5,
      downloadThroughputKbps: 1474.56,
      uploadThroughputKbps: 675,
      cpuSlowdownMultiplier: 4,
    },
    screenEmulation: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      mobile: true,
      disabled: false,
    },
  },
};
