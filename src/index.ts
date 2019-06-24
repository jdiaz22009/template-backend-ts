import { server } from "./config";
import app from "./app";

const env = server.config.env;
const port = server.config.port;
const portprod = server.config.portprod;
const log = console.log;

if (env === "dev") {
  app.listen(port, function() {
    log(`[server] listening on port ${port}, in mode ${env}`);
  });
} else {
  app.listen(portprod, function() {
    log(`[server] listening on port ${port}, in mode ${env}`);
  });
}
