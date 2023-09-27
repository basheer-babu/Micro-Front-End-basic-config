const { dependencies } = require('./package.json');

module.exports = {
  name: 'microclient',
  filename: 'remoteEntry.js',
  exposes: {
    "./page7":"./src/Pages/Page7.jsx",
    "./page4":"./src/Pages/Page4.jsx"
  },
  remotes: {
    microhost: "microhost@http://localhost:3001/remoteEntry.js"
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