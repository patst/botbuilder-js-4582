import {
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
  ConsoleTranscriptLogger,
  TranscriptLoggerMiddleware,
  TurnContext,
} from 'botbuilder';
import config from "./config";

const botFrameworkAuthentication = new ConfigurationBotFrameworkAuthentication(
    {},
    new ConfigurationServiceClientCredentialFactory({
      MicrosoftAppId: config.botId,
      MicrosoftAppType: "UserAssignedMSI", // Bot test framework can only handle "MultiTenant",
      MicrosoftAppTenantId: config.botTenantId,
    })
);

// create bot adapter
const adapter = new CloudAdapter(botFrameworkAuthentication);

// set catch-all error handler
adapter.onTurnError = async (context: TurnContext, error: Error) => {
  // This check writes out errors to console log .vs. app insights.
  // NOTE: In production environment, you should consider logging this to Azure
  //       application insights.
  console.error(`\n [onTurnError] unhandled error: ${error}`);
  const additionalMessage = JSON.stringify(error);


  // Send a trace activity, which will be displayed in Bot Framework Emulator
  await context.sendTraceActivity(
      "OnTurnError Trace",
      `${error} - ${JSON.stringify(additionalMessage)}`,
      "https://www.botframework.com/schemas/error",
      "TurnError"
  );

  // Send a message to the user
  await context.sendActivity("The bot encountered an error or bug.");
  await context.sendActivity("To continue to run this bot, please fix the bot source code.");
};

if (config.debug) {
  adapter.use(new TranscriptLoggerMiddleware(new ConsoleTranscriptLogger()));
}

export default adapter;
