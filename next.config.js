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

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([[withImages]]);
