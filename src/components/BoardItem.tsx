import { useState, useEffect } from "react";

import { BoardProps } from "../interface/BoardInterface";

import "../styles/repositories.scss";

export function BoardItem(props: BoardProps) {
    return (
        <section className="board">
            <div className="row">
                <div className="card green">
                    <h2>{props.board.name}</h2>
                    <p>{props.board.description}</p>
                </div>
            </div>
        </section>
    );
}
