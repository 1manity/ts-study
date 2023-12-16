import {Color, Mark } from "./enum"
import { Deck } from "./type"

export function createDeck():Deck {
    const deck:Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const mark of marks) {
        for (const color of colors) {
            deck.push({
                color: color,
                mark: mark
            })
        }
    }
    return deck
}

export function printDeck(deck:Deck) {
    for (let card of deck) {
        console.log(`${card.color} ${card.mark}`)
    }
}
