const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")


module.exports = {
  target: "web",
  mode: "development",

  // Configurando a pasta para a compilação do projeto
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js", 
    path: path.resolve(__dirname, "dist"),
    crossOriginLoading: "anonymous"
  },

  // configurando o dev server para a api
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  // Configurando plugins leitura do html, css e copia dos assets
  plugins: [
    // Plugin do html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "icons", "dog.svg")
    }),


    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        }
      ]
    })
    
  ],

  module: {
    rules: [
      {
        test: /\.css$/, //Inclui todos os arquivos que tem o .css para ser renderizado com o html
        use: ["style-loader", "css-loader"], // carregando e colocando o estilo na aplicação
      },
      {
        test: /\.js$/, // Incluindo todos os arquivos do javascript
        exclude: /node_modules/, // tirando a node modules da leitura do projeto
        use: {
          loader: "babel-loader", //informando para a regra acima para usar o babel loader
          options: {
            presets: ["@babel/preset-env"]
          } 
        }
      }
    ]
  }

}