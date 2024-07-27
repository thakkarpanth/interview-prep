class Deck {
    cards = [];
    suits = ['club', 'diamond', 'heart', 'spade'];
    types = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    jokers = ['joker-1', 'joker-2'];
    typesToValueMapping = {
        'ace' : 1, 
        '2': 2, 
        '3': 3, 
        '4': 4, 
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8, 
        '9': 9,
        '10': 10, 
        'jack': 11,
        'queen': 12,
        'king': 13,
        'joker': 0,
    }
    setMetaData(params) {
        this.suits = params.suits || this.suits;
        this.types = params.types || this.types;
        this.typesToValueMapping = params.typesToValueMapping || this.typesToValueMapping;
        if (params.totalJokers) {
            for (let joker = 1; joker <= params.totalJokers; joker++) {
                this.jokers.push(`joker-${joker}`); 
            }
        }
        this.jokers = params.jokers || this.jokers;
    }
    generateCards() {
        for (const suit of this.suits) {
            for (const type of this.types) {
                this.cards.push(`${type}-${suit}`)
            }
        }
        this.cards.push('joker-1');
        this.cards.push('joker-2');
    }
    printCards() {
        console.log('cards are : ', this.cards);
    }
    shuffleCards() {
        const temporaryCards = [];
        while(temporaryCards.length !== 54) {
            const randomNumber = Math.floor(Math.random() * 55);
            if (this.cards[randomNumber] && !temporaryCards.includes(this.cards[randomNumber])) {
                temporaryCards.push(this.cards[randomNumber]);
            }
        }
        this.cards = temporaryCards; 
    }

    getWinner(roundDetails) { 
        let winner = -1;
        let maxScore = -1; 
        for (const player in roundDetails) {
            let currentPlayerScore = 0;
            const playerData = roundDetails[player]; 
            for (const card of playerData.cards) {
                const type = card.split('-')[0]; 
                currentPlayerScore += this.typesToValueMapping[type]; 
            }
            if (currentPlayerScore > maxScore) {
                winner = player; 
                maxScore = currentPlayerScore;
            }
        }
        console.log('Winner of this round is player ', winner);
        console.log('His score is ', maxScore);  
    }

    getWinnerOptimized(roundDetails) {
        let winner = -1;
        let maxScore = -1; 
        for (const player in roundDetails) {
            const playerData = roundDetails[player]; 
            if (playerData.cardScore > maxScore) {
                winner = player;
                maxScore = playerData.cardScore;
            }
        }
        console.log('Winner of this round is player ', winner);
        console.log('His score is ', maxScore);
    }

    dealCards(players) {
        const roundDetails = {}; 
        this.shuffleCards();
        let player = 0; 
        for (const card of this.cards) { 
            player = player % players; 
            if (player in roundDetails) {
                roundDetails[player].cards.push(card); 
                roundDetails[player].count += 1; 
                const type = card.split('-')[0];
                roundDetails[player].cardScore += this.typesToValueMapping[type];
            }
            else {
                roundDetails[player] = {
                    cards: [card], 
                    count: 1,
                    cardScore: 0,
                }; 
            }
            player++; 
        }
        console.log('Cards of each player are ', roundDetails); 
        this.getWinnerOptimized(roundDetails);
    }
    playGame(players, numberOfTimes) { 
       for (let time = 1; time <= numberOfTimes; time++) {
            console.log('Round ', time); 
            this.dealCards(players); 
       }
    }
};

const main = () => {
    const deck = new Deck(); 
    deck.setMetaData({
        suits: ['club', 'diamond', 'heart', 'spade', 'panth'],
    })
    deck.generateCards(); 
    deck.printCards();
    deck.shuffleCards(); 
    deck.printCards(); 
    deck.playGame(5, 1);
};

main(); 

