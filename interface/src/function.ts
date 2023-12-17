import {Color, Mark } from "./enum"
import {Deck, Joker, NormalCard} from "./type"

export function createDeck():Deck {
    const deck:Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const mark of marks) {
        for (const color of colors) {
            const card:NormalCard = {
                color: color,
                mark: mark,
                getString(): string {
                    return this.color + ' ' + this.mark
                }
            }
            deck.push(card)
        }
    }
    let joker: Joker = {
        type: "big",
        getString(): string {
            return this.type + " Joker"
        }
    }
    deck.push(joker)
    joker = {
        type: "small",
        getString(): string {
            return this.type + " Joker"
        }
    }
    deck.push(joker)
    return deck
}

export function printDeck(deck:Deck) {
    for (let card of deck) {
        console.log(card.getString())
    }
}
