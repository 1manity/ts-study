import React from "react";
import {ChessType, GameStatus} from "../types/enums";

import "./GameStatusComp.css"
interface IProp {
    status: GameStatus
    next: ChessType.red | ChessType.black
}
export function GameStatusComp({status,next}:IProp) {
    let content: React.ReactNode
    if (status === GameStatus.gaming) {
        if (next === ChessType.red) {
            content = <div className={"next red"}>红方落子</div>
        } else {
            content = <div className={"next black"}>黑方落子</div>
        }
    }
    else  {
        if (GameStatus.redWin === status) {
            content = <div className={"win red"}>红方胜利</div>
        } else if (GameStatus.blackWin === status)  {
            content = <div className={"win black"}>黑方胜利</div>
        }
        else {
            content = <div className={"win equal"}>平局</div>
        }
    }
    return (
        <div className={"status"}>
            {content}
        </div>
    );
}
