require( "@babel/register" )( {
    ignore: [/node_modules/],
    presets: [ "@babel/env","@babel/react" ],
    extensions: ['.js', '.jsx'],
    plugins: [
        [
            "css-modules-transform",
            {
                camelCase: true,
                extensions: [ ".css", ".scss" ],
            },
        ],
        "dynamic-import-node",
        "file-loader"
    ],
} );
require( "./src/server" );
