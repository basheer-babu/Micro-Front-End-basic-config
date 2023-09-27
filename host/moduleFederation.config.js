const { dependencies } = require('./package.json');

module.exports = {
  name: 'microhost',
  filename: 'remoteEntry.js',
  exposes: {
    './page1': './src/Pages/Pages1.jsx',
    './page2': './src/Pages/Pages2.jsx',
  },
  remotes: {
    microclient: "microclient@http://localhost:3000/remoteEntry.js"
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
    },
  },
};