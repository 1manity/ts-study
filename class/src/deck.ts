import {Card, Joker, NormalCard} from "./type";
import {Color, Mark} from "./enum";
import * as console from "console";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}
export class Deck {
    private cards: Card[] = [];

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        }
        else {
            this.init()
        }

    }
    private init() {
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
                this.cards.push(card)
            }
        }
        let joker: Joker = {
            type: "big",
            getString(): string {
                return this.type + " Joker"
            }
        }
        this.cards.push(joker)
        joker = {
            type: "small",
            getString(): string {
                return this.type + " Joker"
            }
        }
        this.cards.push(joker)
    }
    print() {
        for (let card of this.cards) {
            // console.log(card)
            console.log(card.getString())
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const target = this.getRandom(0, this.cards.length - 1)
            const temp = this.cards[i]
            this.cards[i] = this.cards[target]
            this.cards[target] = temp
        }
    }
    publish():PublishResult {
        let player1:Deck, player2:Deck, player3:Deck, left:Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = this.takeCards(3)
        return {player1, player2, player3, left}
    }

    private takeCards(n: number) {
        const cards: Card[] = []
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)
        }
        return new Deck(cards)
    }
    private getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}
