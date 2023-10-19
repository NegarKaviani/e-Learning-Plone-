// import start from './start-server';

// const reloadServer = start();

// if (module.hot) {
//   reloadServer();
// }

const applyConfig = (config) => {
  config.blocks.requiredBlocks = [];

  return config;
};

export default applyConfig;