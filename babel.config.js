module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};

//runtime:'automatic' enables the using the jsx wihtout importing React in the file.