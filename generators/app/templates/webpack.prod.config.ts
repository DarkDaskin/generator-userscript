import * as webpack from 'webpack';
import config from './webpack.config';

config.plugins!.unshift(new webpack.optimize.UglifyJsPlugin());

export default config;