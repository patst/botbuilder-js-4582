import * as restify from "restify";
import adapter from './app/shared/adapter';
import GAPChatBot from './app/bot';
import config from "./app/shared/config";

// Create HTTP server.
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started, ${server.name} listening to ${server.url}`);
});

// Health endpoint
server.get("/healthz", async (req, res) => {
  res.status(200);
  res.send("healthy");
});

if (config.debug) {
  const logger = require('@azure/logger');
  logger.setLogLevel('verbose');
}

const chatBot = new GAPChatBot.GAPChatBot();
// Listen for incoming server requests.
server.post("/api/messages", async (req, res) => {
    if (config.debug) {
      console.log('req body: ', JSON.stringify(req.body));
    }
    // Route received a request to adapter for processing
    await adapter.process(req, res as any, async (context) => {
      // Dispatch to application for routing
      await chatBot.run(context);
    });
});
