const { Telegraf } = require('telegraf');
const { Application, Router } = require('@cfworker/web');
const createTelegrafMiddleware = require('cfworker-middleware-telegraf');

const bot = new Telegraf(self.BOT_TOKEN);

// Your code here, but do not `bot.launch()`
// Do not forget to set environment variables BOT_TOKEN and SECRET_PATH on your worker

bot.start((ctx) => ctx.reply(`
Hi, this bot is for buying vanity emails.`));
bot.help((ctx) => ctx.reply('email jey.and.key@gmail.com'));

bot.command('buy', (ctx) => ctx.reply('Hello'));

const router = new Router();
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();
