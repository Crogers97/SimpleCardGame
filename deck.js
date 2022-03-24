const SUITS = ["♦", "♥","♣","♠"]
const VALUES= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]


export default class Deck{
    constructor(cards = freshDeck()){
        this.cards = cards
    }

    // loop through the cards then flip them with other cards inside the array
    get numberOfCards(){
        return this.cards.length
    }

// while i(index) is greater than 0 as we dont actually need to flip the final card
// The Math. floor() function returns the largest integer less than or equal to a given number.
// This code gets a random index for the current card that the user is on, then swaps the card that they are currently on with the new card the user just got.
    shuffle(){
        for(let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }

        
    }
}

class Card{
    constructor(suit,value){
        this.suit = suit
        this.value = value
    }
}

function freshDeck(){
    // flatMap works exactly like map but if there are arrays within an array it flats them into 1 single array
    return SUITS.flatMap(suit => {
        return VALUES.map(value =>{
            return new Card(suit, value)
        })

    })

}