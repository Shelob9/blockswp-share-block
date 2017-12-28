module.exports = {
    entry: {
        block: './block.js',
        front: './front-end.js'
	},
	output: {

        path: __dirname,
        filename: '[name].build.js'


    },
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	}
};
