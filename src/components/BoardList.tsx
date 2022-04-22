import { useState, useEffect } from "react";

import { Board, BoardProps } from  "../interface/BoardInterface";
import { BoardItem } from "./BoardItem";

import "../styles/repositories.scss";
import "../styles/boards.scss";

const mockup: Board[] = [
    {
        name: "Trabalho",
        description: "Coisas de Trabalho",
    },
    {
        name: "TODO",
        description: "Coisas a serem feitas",
    }
]; 

export function BoardList(props: BoardProps) {
    const [boards, setBoards] = useState<Board[]>(mockup);

    return (
        <section className="board-list">
            <ul>
                {boards.map((board) => {
                    return (
                        <BoardItem
                            key={board.name}
                            board={board}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
