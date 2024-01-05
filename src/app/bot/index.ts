// See https://aka.ms/teams-ai-library to learn more about the Teams AI library.
import {ActivityHandler, ActivityTypes} from "botbuilder";


class GAPChatBot extends ActivityHandler {

  constructor() {

    super();

    this.onMessage(async (context, next) => {
      const {text} = context.activity;

      const responseText = "hello test";
      console.log('Response', responseText);
      return context.sendActivity(responseText);
    })
  };
}

export default {GAPChatBot};
