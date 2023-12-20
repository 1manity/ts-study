import React from "react";
import {ChessType} from "../types/enums";
import {ChessComp} from "./ChessComp";

import "./BoardComp.css"

interface IProps {
    chess: ChessType[]
    isGameOver?: boolean
    onClick?: (index: number) => void
}

const BoardComp:React.FC<IProps> = function ({chess,onClick,isGameOver}: IProps) {

    const chessGroup = chess.map((type, i) =>
        <ChessComp
            key={i}
            type={type}
            onClick={() => {
                if (onClick && !isGameOver) {
                    onClick(i)
                }
            }}></ChessComp>)
    return (
        <div className={"board"}>
            {chessGroup}
        </div>

    );
}

BoardComp.defaultProps = {
    isGameOver: false
}

export { BoardComp }
