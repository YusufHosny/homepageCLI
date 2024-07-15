
export type TerminalHistoryItem = String | JSX.Element | undefined;

export type TerminalHistory = TerminalHistoryItem[];

export interface TerminalPushToHistoryWithDelayProps {
  delay: number;
  content: TerminalHistoryItem;
};

export interface TerminalProps {
    history: TerminalHistory;
    promptLabel: String;
    commands: { [id: string] : () => Promise<void> };
    beforeCommands: (command: String) => Promise<void>;
    notACommandHandler: (command: String) => Promise<void>;
};

