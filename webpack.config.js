const MiniCssExractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,
  output:{
    assetModuleFilename:"image/[hash][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser:{
          dataUrlCondition:{
            //Change the default maxSize of 8kb for putting the img in inline to 10kb
            maxSize: 10 * 1024 
          }
        }
      },
      
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MiniCssExractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
