import {Command} from "./command.class";
import {Context, Markup, Telegraf} from "telegraf";
import {IBotContext} from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx: Context) => {
            ctx.reply("Вас приветствует чат-бот HouserBot!\n" +
                "Мы поможем вам найти клиентов через целевые каналы в Telegram и Facebook.", Markup.inlineKeyboard([
                Markup.button.callback("Выберите локации, по которым мы начнем наш поиск:", "cities"),
                Markup.button.callback("Анталия", "Antalya"),
                Markup.button.callback("Стамбул", "Istanbul"),
                Markup.button.callback("Аланья", "Alanya"),
                Markup.button.callback("Кемер", "Kemer"),
                Markup.button.callback("Мерсин", "Mersin"),
                Markup.button.callback("Демирташ", "Demirtash"),
                Markup.button.callback("Газипаша", "Gazipasa"),
                Markup.button.callback("Сиде", "Side"),
            ]))
        })
        this.bot.action("Antalya", (ctx) => {
            ctx.session.location = []
            ctx.editMessageText("Отлично! Теперь выберите типы запросов, которые вас интересуют:",
                Markup.inlineKeyboard([
                    Markup.button.callback("Поиск арендаторов", "search_renters"),
                    Markup.button.callback("Поиск продавцов", "search_sellers"),
                    Markup.button.callback("Поиск арендодателей", "search_landlords"),
                    Markup.button.callback("Поиск покупателей", "search_buyers"),
                ])
            )
        })
        this.bot.action("search_renters", (ctx) => {
            ctx.editMessageText("Настройка завершена! Релевантные запросы будут появляться в этом чате. Это может занять от нескольких минут до нескольких часов.  Поменять настройки поиска можно в Главном меню.")
        })

    }

}