const resolveURL = require('resolve-url');
const { devDependencies } = require('../../package.json');

/*
 * Default options for browser environment
 */
module.exports = {
  corePath: typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
    ? resolveURL('/node_modules/@flemist/ffmpeg.wasm-core-st/dist/ffmpeg-core.js')
    : `https://unpkg.com/@flemist/ffmpeg.wasm-core-st@${devDependencies['@flemist/ffmpeg.wasm-core-st'].substring(1)}/dist/ffmpeg-core.js`,
};
