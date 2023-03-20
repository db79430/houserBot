import {Context} from "telegraf";

export interface SessionData {
    location: [],
    category: [],
    payment: null,
    support: ""

}
export interface IBotContext extends Context {
    session: SessionData

}