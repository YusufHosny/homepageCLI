
export type TerminalHistoryItem = String | JSX.Element | undefined;

export type TerminalHistory = TerminalHistoryItem[];

export interface TerminalPushToHistoryWithDelayProps {
  delay: number;
  content: TerminalHistoryItem;
};

export interface TerminalProps {
    history: TerminalHistory;
    promptLabel: String;
    commands: any;
    notACommand: (command: String) => Promise<void>;
};

