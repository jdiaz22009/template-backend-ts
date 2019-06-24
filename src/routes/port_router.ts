var routes: any = [];

routes["auth"] = {
  id: 0,
  name: "auth",
  port: process.env.BANKPORT || 3001
};
console.log("routes", routes);
export default routes;
