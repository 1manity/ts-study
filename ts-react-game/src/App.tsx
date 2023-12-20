import React from 'react';
import {ChessType} from "./types/enums";
import {BoardComp} from "./components/BoardComp";


const types: ChessType[] = [
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
]

function App() {
    return (
        <div>
            <BoardComp
                chess={types}
                // isGameOver={true}
                onClick={(i)=> {
                    console.log(i)
                }}
            ></BoardComp>

        </div>
    );
}

export default App;
