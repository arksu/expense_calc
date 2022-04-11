const path = require('path')
const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
    lessVarsFilePath: './src/styles/variables.less',
    reactStrictMode: true,
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'src/styles')],
    // },
    experimental: {
        outputStandalone: true,
    },
})

module.exports = nextConfig
