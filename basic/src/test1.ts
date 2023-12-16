type Deck = NormalCard[]

type NormalCard = {color: Color, mark: number}

type Color = "♥️"|"♠️"|"♦️"|"♣️"
function createDeck():Deck {
    const deck:Deck = []
    for (let i= 1;i<=13;i++) {
        deck.push({
            mark: i,
            color: "♥️"
        })
        deck.push({
            mark: i,
            color: "♠️"
        })
        deck.push({
            mark: i,
            color: "♦️"
        })
        deck.push({
            mark: i,
            color: "♣️"
        })
    }
    return deck
}

function printDeck(deck:Deck) {
    for (let card of deck) {
        console.log(`${card.color} ${card.mark}`)
    }
}
printDeck(createDeck())
