import { WriteStream } from "fs";
import { Chrome } from "./chrome";
import { Column, Card, Pull, ProjectService } from "./github";
import { Screen } from "./screen";

export interface ColumnRunDownState {
    column: Column;
    cards: Card[];
    offset: number;
    oldestFirst: boolean;
}

export interface WorkArea {
    column: ColumnRunDownState;
    card: Card;
}

export interface Context {
    actionState: ColumnRunDownState | undefined;
    reviewState: ColumnRunDownState | undefined;
    workArea: WorkArea | undefined;
    currentPull: Pull | undefined;
    skipped: Set<number>;
    screen: Screen;
    service: ProjectService;
    chrome: Chrome;
    log: WriteStream;
}