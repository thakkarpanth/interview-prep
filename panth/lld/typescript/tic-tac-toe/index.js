"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
class Player {
}
var CellStat;
(function (CellStat) {
    CellStat[CellStat["Empty"] = 0] = "Empty";
    CellStat[CellStat["Nought"] = 1] = "Nought";
    CellStat[CellStat["Cross"] = 2] = "Cross";
})(CellStat || (CellStat = {}));
class Board {
    constructor(size) {
        this.boardSize = size;
        this.board = [];
        this.filledCells = 0;
        for (let i = 0; i < this.boardSize; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.boardSize; j++) {
                this.board[i][j] = CellStat.Empty;
            }
        }
    }
    setNought(row, col) {
        if (this.board[row][col] !== CellStat.Empty) {
            return false;
        }
        this.board[row][col] = CellStat.Nought;
        return true;
    }
    setCross(row, col) {
        if (this.board[row][col] !== CellStat.Empty) {
            return false;
        }
        this.board[row][col] = CellStat.Cross;
        return true;
    }
    getStat(row, col) {
        return this.board[row][col];
    }
    isFull() {
        return this.filledCells === this.boardSize * this.boardSize;
    }
    render() {
        for (let i = 0; i < this.boardSize; i++) {
            console.log(this.board[i]);
        }
    }
}
class TicTacToe {
    constructor() {
        this.board = new Board(3);
        this.turn = true;
        this.rl = readline.createInterface(process.stdin, process.stdout);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            while (!this.board.isFull()) {
                this.board.render();
                if (this.turn) {
                    const answer = yield this.ask('Player 1: ');
                    const pos = this.parse(answer);
                    if (pos.length < 2 || pos[0] >= 3 || pos[1] >= 3 || pos[0] < 0 || pos[1] < 0) {
                        console.log("Invalid input!");
                        continue;
                    }
                    if (!this.board.setNought(pos[0], pos[1])) {
                        console.log("Cell is already filled");
                        continue;
                    }
                }
                else {
                    const answer = yield this.ask('Player 2: ');
                    const pos = this.parse(answer);
                    if (pos.length < 2 || pos[0] >= 3 || pos[1] >= 3 || pos[0] < 0 || pos[1] < 0) {
                        console.log("Invalid input!");
                        continue;
                    }
                    if (!this.board.setCross(pos[0], pos[1])) {
                        console.log("Cell is already filled");
                        continue;
                    }
                }
                if (this.checkForRow()) {
                    console.log(`Hurray! Player ${this.turn ? '1' : '2'} Wins!`);
                    break;
                }
                this.turn = !this.turn;
            }
        });
    }
    parse(answer) {
        return answer.trim().split(' ').map((num) => Number(num));
    }
    ask(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }
    checkForRow() {
        for (let i = 0; i < 3; i++) {
            const stats = [];
            for (let j = 0; j < 3; j++) {
                stats.push(this.board.getStat(i, j));
            }
            if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            const stats = [];
            for (let j = 0; j < 3; j++) {
                stats.push(this.board.getStat(j, i));
            }
            if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
                return true;
            }
        }
        let stats = [];
        for (let i = 0; i < 3; i++) {
            stats.push(this.board.getStat(i, i));
        }
        if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
            return true;
        }
        stats = [];
        for (let i = 0; i < 3; i++) {
            stats.push(this.board.getStat(i, 2 - i));
        }
        if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
            return true;
        }
        return false;
    }
}
;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ticTacToe = new TicTacToe();
        yield ticTacToe.start();
    });
}
main().then(() => process.exit(0)).catch(() => process.exit(0));
