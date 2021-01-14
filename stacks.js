class Card {
    constructor(colour, number, next = null) {
        this.colour = colour;
        this.number = number;
        this.next = next;
    }
    getData = () => [this.colour, this.number];
}

class Deck {
    constructor(limit = 20) {
      this.top = null;
      this.length = 0;
      this.limit = limit;
    }
  
    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => (this.isEmpty() ? "Dude, no cards left in the deck" : this.top.getData());
  
    push = (colour, number) => {
      if (this.isFull()) {
        console.log(`Chill, the deck can only hold ${this.limit} cards`);
      } else {
        const newNode = new Card(colour, number, this.top);
        this.top = newNode;
        this.length++;
      }
    };
  
    pop = () => {
      if (this.isEmpty()) {
        console.log("The deck is empty, do you want to go into a void?");
      } else {
        const popped = this.top;
        this.top = popped.next;
        this.length--;
        return popped.getData();
      }
    };
}

const colours = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const random = (data) => {
    const randomIndex = parseInt(Math.random() * data.length);
    return data[randomIndex];
}

const gameCards = new Deck();
while (gameCards.length < gameCards.limit) {
    gameCards.push(random(colours), random(numbers));
};

const draw = (player) => {
    const cardDrawn = gameCards.pop();
    player.push(cardDrawn[0], cardDrawn[1]);
    console.log(player.peek());
}

const player1 = new Deck (5);
console.log("Player 1 cards:")
while (player1.length < player1.limit){
    draw(player1);
}

const player2 = new Deck (5);
console.log("Player 2 cards:")
while (player2.length < player2.limit){
    draw(player2);
}

console.log("First card in the deck: ", gameCards.peek());
