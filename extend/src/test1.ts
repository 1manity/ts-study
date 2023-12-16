// 使用enum改写扑克牌案例

type Deck = NormalCard[]

type NormalCard = {color: Color, mark: Mark}

enum Color {
    heart = "♥️",
    spade = "♠️",
    diamond = "♦️",
    club = "♣️"
}
enum Mark {
    A = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    jack = 'J',
    queen = 'Q',
    king = 'K'
}
function createDeck():Deck {
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

function printDeck(deck:Deck) {
    for (let card of deck) {
        console.log(`${card.color} ${card.mark}`)
    }
}
printDeck(createDeck())
