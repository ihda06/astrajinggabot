const { default: Telegraf } = require("telegraf");
const { logsRequest } = require("./middleware/logs");
const session = require("telegraf/session");
const { stage } = require("./stages");

const bot = new Telegraf("6668106925:AAElmxTx23D37NXr_Ue4NDtvhrTNw64FBKg");

bot.use(logsRequest);
bot.use(session());
bot.use(stage.middleware());
bot.start((ctx) => {
  ctx.scene.enter("welcome");
});

// bot.on("text", (ctx) => ctx.reply("Hello World"));
bot.launch();
