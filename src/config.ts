export const server = {
  config: {
    port: process.env.PORT || 3000,
    portprod: process.env.PORT || 80,
    env: process.env.ENVIROMENT || "dev"
  }
};
