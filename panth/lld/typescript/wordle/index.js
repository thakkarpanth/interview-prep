"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Keyboard {
    constructor() {
        this.keyboard =
            `q w e r t y u i o p
  a s d f g h j k l
   z x c v b n m`;
    }
    activate(letter) {
        const idx = this.keyboard.indexOf(letter.toLowerCase());
        if (idx === -1) {
            return false;
        }
        const keyboard = this.keyboard.split('');
        keyboard[idx] = keyboard[idx].toUpperCase();
        this.keyboard = keyboard.join('');
        return true;
    }
    render() {
        return this.keyboard;
    }
}
;
class Wordle {
    constructor(word) {
        this.word = word;
        this.rl = readline.createInterface(process.stdin, process.stdout);
        this.keyboard = new Keyboard();
        if (word.length !== 5) {
            throw Error('Length of each word provided to wordle should be 5. failed for word ' + word);
        }
    }
    evaluateAnswer(answer) {
        let reveal = "";
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === answer[i]) {
                reveal += "G";
                this.keyboard.activate(answer[i]);
            }
            else if (this.word.includes(answer[i])) {
                reveal += "Y";
            }
            else {
                reveal += "R";
            }
        }
        return reveal;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 6; i++) {
                while (true) {
                    const userInput = yield this.ask('Enter guess:\n');
                    if (userInput.length !== 5) {
                        console.log('Invalid input. Explanation: Input should be 5 letter world.');
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
        });
    }
    ask(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }
}
;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const wordle = new Wordle('HELLO');
            yield wordle.start();
        }
        catch (e) {
            console.log("ERR: ", e);
        }
    });
}
main().then(() => process.exit(0)).catch(() => process.exit(0));
