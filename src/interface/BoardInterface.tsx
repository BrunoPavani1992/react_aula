import { useState, useEffect } from "react";

export interface Board {
    name: string;
    description: string;
    html_url?: string;    
}

export interface BoardProps {
    board : Board;
}

