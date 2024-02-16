const path = require("path");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/components/ui": path.resolve(__dirname, "./src/core-components"),
          },
        },
      ],
      "@babel/plugin-transform-modules-commonjs",
      "react-native-reanimated/plugin",
    ],
  };
};
