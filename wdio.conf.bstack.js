import { config } from "./wdio.conf";
var _ = require("lodash");

var overrides = {
  user: "karthikvaradhan_ED8g2l" || process.env.BROWSERSTACK_USERNAME,
  key: "dBqn73B3xLzCAaXrKNz6" || process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./features/**/login.feature"],

  capabilities: [
    {
      browserName: "Chrome",
      "bstack:options": {
        browserVersion: "latest",
        buildName: "SKII_Chrome",
        os: "Windows",
        osVersion: "11",
      },
    },
    {
      browserName: "Edge",
      "bstack:options": {
        browserVersion: "latest",
        buildName: "SKII_Edge",
        os: "Windows",
        osVersion: "11",
      },
    }
  ],

  services: [
    [
      "browserstack"
    ]
  ]
};

exports.config = _.defaultsDeep(overrides, config);
