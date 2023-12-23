import React, {useEffect, useState} from "react";
import {ChessType, GameStatus} from "../types/enums";
import {BoardComp} from "./BoardComp";
import {GameStatusComp} from "./GameStatusComp";

// interface IState {
//     chess: ChessType[]
//     gameStatus: GameStatus
// }

export function GameComp() {
    const [chess, setChess] =
        useState<ChessType[]>([])
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.gaming)
    const [nextChess, setNextChess]
        = useState<ChessType.red | ChessType.black>(ChessType.red)

    function init() {
        const arr: ChessType[] = []
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none)
        }
        setChess(arr)
        setGameStatus(GameStatus.gaming)
        setNextChess(ChessType.red)
    }

    useEffect(() => {
        init()
    }, [])

    /**
     * 处理棋子点击事件
     * @param i
     */
    function handleChessClick(i: number) {
        const tmpChess: ChessType[] = [...chess]
        tmpChess[i] = nextChess
        setChess(tmpChess)
        setNextChess(nextChess === ChessType.red ? ChessType.black : ChessType.red)
        setGameStatus(getStatus(tmpChess, i))
    }

    function getStatus(chess: ChessType[], index: number): GameStatus {
        const horMin = Math.floor(index / 3) * 3
        const verMin = index % 3
        // console.log(chess)
        if ((chess[horMin] === chess[horMin + 1] && chess[horMin + 1] === chess[horMin + 2])
            || (chess[verMin] === chess[verMin + 3] && chess[verMin + 3] === chess[verMin + 6])
            || (chess[0] === chess[4] && chess[4] === chess[8] && chess[4] !== ChessType.none)
            || (chess[2] === chess[4] && chess[4] === chess[6] && chess[4] !== ChessType.none)) {
            if (chess[index] === ChessType.red) {
                // console.log(" GameStatus.redWin")
                return GameStatus.redWin
            } else {
                // console.log(" GameStatus.blackWin")
                return GameStatus.blackWin
            }
        }

        if (!chess.includes(ChessType.none)) {
            return GameStatus.equal
        }
        return GameStatus.gaming
    }

    return (
        <div className={"game"} style={{textAlign:"center"}}>
            <h1>井字棋游戏</h1>
            <GameStatusComp
                status={gameStatus}
                next={nextChess}
            ></GameStatusComp>
            <BoardComp
                chess={chess}
                isGameOver={gameStatus !== GameStatus.gaming}
                onClick={i => {
                    handleChessClick(i)
                }}
            ></BoardComp>
            <button onClick={init}>重新开始</button>
        </div>
    );
}
