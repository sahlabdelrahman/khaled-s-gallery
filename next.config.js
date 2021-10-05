// module.exports = {
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader",
//       },
//       {
//         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//         loader: "url-loader?limit=100000",
//       },
//     ],
//   },
// };

// const webpack = require("webpack");
// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");

// module.exports = withPlugins([
//   [
//     withImages,
//     {
//       webpack(config, options) {
//         return config;
//       },
//     },
//   ],
//   [
//     [
//       withSass,
//       {
//         cssModules: true,
//         webpack: function (config) {
//           config.module.rules.push({
//             test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//             use: {
//               loader: "url-loader",
//               options: {
//                 limit: 100000,
//                 name: "[name].[ext]",
//               },
//             },
//           });
//           return config;
//         },
//       },
//     ],
//   ],
// ]);

// const withImages = require("next-images");
// module.exports = withImages();

// =>

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([[withImages]]);
// module.exports = withCSS(withImages);

// const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
// const { styles } = require("@ckeditor/ckeditor5-dev-utils");

// module.exports = withCSS(
//   withImages({
//     webpack(config, options) {
//       config.module.rules.forEach(function (rule, index, array) {
//         const test = (rule.test && rule.test.toString()) || "";
//         if (test.includes("css")) {
//           array[index] = {
//             ...rule,
//             exclude: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
//           };
//         } else if (test.includes("svg")) {
//           array[index] = {
//             ...rule,
//             exclude: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
//           };
//         }
//       });

//       config.module.rules.push({
//         test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
//         use: [
//           {
//             loader: "style-loader",
//             options: {
//               injectType: "singletonStyleTag",
//             },
//           },
//           {
//             loader: "postcss-loader",
//             options: styles.getPostCssConfig({
//               themeImporter: {
//                 themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
//               },
//               minify: true,
//             }),
//           },
//         ],
//       });

//       config.module.rules.push({
//         test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
//         use: ["raw-loader"],
//       });

//       return config;
//     },
//   })
// );
