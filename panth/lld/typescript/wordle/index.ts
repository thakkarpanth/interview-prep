import * as readline from 'readline';

class Keyboard {
    private keyboard: string;

    constructor() {
        this.keyboard = 
`q w e r t y u i o p
  a s d f g h j k l
   z x c v b n m`;
    }

    public activate(letter: string) {
        const idx = this.keyboard.indexOf(letter.toLowerCase());
        if (idx === -1) {
            return false;
        }

        const keyboard = this.keyboard.split('');
        keyboard[idx] = keyboard[idx].toUpperCase();
        this.keyboard = keyboard.join('');

        return true;
    }

    public render(): string {
        return this.keyboard;
    }
};

class Wordle {
    private word: string;
    private rl: readline.Interface;
    private keyboard: Keyboard;

    constructor(word: string) {
        this.word = word;
        this.rl = readline.createInterface(process.stdin, process.stdout);
        this.keyboard = new Keyboard();

        if (word.length !== 5) {
            throw Error('Length of each word provided to wordle should be 5. failed for word ' + word);
        }
    }

    private evaluateAnswer(answer: string): string {
        let reveal = "";
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === answer[i]) {
                reveal += "G";
                this.keyboard.activate(answer[i]);
            } else if (this.word.includes(answer[i])) {
                reveal += "Y";
            } else {
                reveal += "R";
            }
        }
        return reveal;
    }

    public async start() {
        for (let i = 0; i < 6; i++) {
            while (true) {
                const userInput = await this.ask('Enter guess:\n');
                if (userInput.length !== 5) {
                    console.log('Invalid input. Explanation: Input should be 5 letter world.')
                    continue;
                }
                const answer = userInput.toUpperCase();
                const evaluation = this.evaluateAnswer(answer);
                console.log(evaluation);
                if (evaluation === 'GGGGG') {
                    console.log("Yay! You won!");
                    return;
                }
                console.log(this.keyboard.render());
                break;
            }
        }
    }

    public ask(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer: string) => {
                resolve(answer);
            });
        });
    }
};

async function main() {
    try {
        const wordle = new Wordle('HELLO');

        await wordle.start();
    } catch (e) {
        console.log("ERR: ", e);
    }
}

main().then(() => process.exit(0)).catch(() => process.exit(0));

