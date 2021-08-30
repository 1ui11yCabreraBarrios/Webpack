Pasos para crear un app desde cero con webpack

1 crear una carperta vacia
2 escribir en  la terminal npm init
3 Llenar los items que aparecen 


 npm init
package name: (webpack) reactjs-demo1
version: (1.0.0) 1.0.0
description: iniciando-contenido
entry point: (index.js)
test command:
git repository:
keywords: webpack
author: "Alberto Cabrera <4lbertcabrerab@gmail.com>
license: (ISC)

Is this OK? (yes) y
4 luego escribir 
npm i -D webpack webpack-cli
5 crear una carpeta src
6 dentro de la carpeta src crear un archivo index.js
********************************************
**********al momento de mandar**************
******la app a prodccion escribiendo********
***el comando npmrun build crea una car-****
***peta de salida con el nombre dist*******
** la carpeta de entrada es src*********
--------OJO---------
EN EL ARCHIVO PACKAGE.JSON EN COLOCAR "scripts": {
    "build": "webpack"
  },

comandos para entrono de desarrollo
"dev": "webpack --mode development",

entrono de produccion 
 "build":"webpack --mode produccion"
al momento de ejecutar npm run dev el archivo para produccion va con varios comentarios 
y cuando ejecuta npm run build solo es el codigo tal como esta.

existe una manera de agregar la direccion sin usar webpack.config.js es escribir directamente la direcion es build y dev


/////////////////////////////////////////
///////       BABEL         ////////////
////////////////////////////////////////

INSTALAR UNA SERIE DE DEPENDENCIAS DE DESARROLLO
1
 npm i -D babel-loader @babel/core @babel/preset-env 
2
crear un archivo .babelrc
3
escribir en formato json 
{
"presets": ["@babel/preset-env]}     



********************************
*******************************
instalar npm i -D html-loader html-webpack-plugin
1
luego crear un archivo index.html
luego se agrega plugins
*******************************************************
const HtmlWebpackPlugin = require("html-webpack-plugin");
*********************************************************
module.export ={
    modulo:{
        //reglas 
        rules:[
            {// va leer archivos .jso otro tipo de archivos
                test:/\.js$/i,
                // excluir archivos que no se va necesitar o mas bien no se va usar
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },

            },
            {********************************
                test: /\.html$/i,
                use:{
                    loader:"html-loader",
                    options:{
                        // el archivo va ser minificado
                        minimize:true
                    }****************************
                }
            }
        ],
    },****************************
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
        })
        
    ]************************************
};

install css minificado tambien  la -D se significa entorno de desarrollo
npm i -D mini-css-extract-plugin css-loader

luego crear una regla para css y un archivo style.css

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export ={
    modulo:{
        //reglas 
        rules:[
            {// va leer archivos .jso otro tipo de archivos
                test:/\.js$/i,
                // excluir archivos que no se va necesitar o mas bien no se va usar
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },

            },
            {
                test: /\.html$/i,
                use:{
                    loader:"html-loader",
                    options:{
                        // el archivo va ser minificado
                        minimize:true
                    }
                }
            },
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
        }),
        new MiniCssExtractPlugin(),
        
    ]
};

instalar 
npm i -D webpack-dev-server
es un servidor para levantar el proyecto




instalar 
npm i -D file-loader
se usa para las imagenes