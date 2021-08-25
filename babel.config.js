module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        targets: {
          browsers: ['last 2 versions', '> 1%', 'safari >= 10'],
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
  ],
}
