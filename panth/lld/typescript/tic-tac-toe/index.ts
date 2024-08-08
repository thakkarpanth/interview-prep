import * as readline from 'readline';

class Player {}

enum CellStat {
    Empty,
    Nought,
    Cross
}

class Board {
    private board: CellStat[][];
    private boardSize: number;
    private filledCells: number;

    constructor(size: number) {
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


    setNought(row: number, col: number): boolean {
        if (this.board[row][col] !== CellStat.Empty) {
            return false;
        }
        this.board[row][col] = CellStat.Nought;
        return true;
    }

    setCross(row: number, col: number): boolean {
        if (this.board[row][col] !== CellStat.Empty) {
            return false;
        }
        this.board[row][col] = CellStat.Cross;
        return true;
    }

    getStat(row: number, col: number): CellStat {
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
    private turn: boolean;
    private board: Board;
    private rl: readline.Interface;

    constructor() {
        this.board = new Board(3);
        this.turn = true;
        this.rl = readline.createInterface(process.stdin, process.stdout);
    }

    async start() {
        while (!this.board.isFull()) {
            this.board.render();
            if (this.turn) {
                const answer = await this.ask('Player 1: ');
                const pos = this.parse(answer);
                if (pos.length < 2 || pos[0] >= 3 || pos[1] >= 3 || pos[0] < 0 || pos[1] < 0) {
                    console.log("Invalid input!");
                    continue;
                }
                if (!this.board.setNought(pos[0], pos[1])) {
                    console.log("Cell is already filled");
                    continue;
                }
            } else {
                const answer = await this.ask('Player 2: ');
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
    }

    private parse(answer: string) {
        return answer.trim().split(' ').map((num) => Number(num));
    }

    private ask(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer: string) => {
                resolve(answer);
            })
        });
    }

    private checkForRow(): boolean {
        for (let i = 0; i < 3; i++) {
            const stats: CellStat[] = [];
            for (let j = 0; j < 3; j++) {
                stats.push(this.board.getStat(i, j));
            }
            if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            const stats: CellStat[] = [];
            for (let j = 0; j < 3; j++) {
                stats.push(this.board.getStat(j, i));
            }
            if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
                return true;
            }
        }

        let stats: CellStat[] = [];
        for (let i = 0; i < 3; i++) {
            stats.push(this.board.getStat(i, i));
        }
        if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
            return true;
        }

        stats = [];
        for (let i = 0; i < 3; i++) {
            stats.push(this.board.getStat(i, 2-i));
        }
        if (stats[0] != CellStat.Empty && stats.every(x => x == stats[0])) {
            return true;
        }

        return false;
    }
};

async function main() {
    const ticTacToe = new TicTacToe();

    await ticTacToe.start();
}

main().then(() => process.exit(0)).catch(() => process.exit(0));

