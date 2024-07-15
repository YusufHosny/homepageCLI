"use client"

import {ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState} from "react";
import { TerminalProps } from '@/app/terminal/types';

// eslint-disable-next-line react/display-name
export const Terminal = forwardRef(
  (props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history,
      promptLabel,
      commands,
      beforeCommands,
      notACommandHandler
    } = props;

    const inputRef = useRef<HTMLInputElement>();
    const [input, setInputValue] = useState<string>('');
    const [inputHistory, setInputHistory] = useState<string[]>([]);
    const [inputHistoryIndex, setInputHistoryIndex] = useState<number>(-1);

    /**
     * Focus on the input whenever we render the terminal or click in the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, []);


    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      []
    );

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          const commandToExecute = commands?.[input.toLowerCase()];
          beforeCommands(input);
          if (commandToExecute) {
            commandToExecute?.();
          } else {
            notACommandHandler(input);
          }
          setInputHistory([input, ...inputHistory]);
          setInputHistoryIndex(-1);
          setInputValue("");
        }
        else if (e.key == "ArrowUp" && inputHistoryIndex < inputHistory.length-1) {
          setInputHistoryIndex(inputHistoryIndex+1);
          setInputValue(inputHistory[inputHistoryIndex+1]);
        }
        else if (e.key == "ArrowDown" && inputHistoryIndex > 0) {
          setInputHistoryIndex(inputHistoryIndex-1);
          setInputValue(inputHistory[inputHistoryIndex-1]); 
        }
      },
      [beforeCommands, commands, input, inputHistory, inputHistoryIndex, notACommandHandler]
    );

    return (
    <div className="h-full overflow-y-auto bg-slate-950 text-green-500 px-9 py-11 text-sm font-mono" ref={ref} onClick={focusInput}>
      {history.map((line: any, index: number) => (
        <div className="leading-loose whitespace-pre-wrap" key={`terminal-line-${index}-${line}`}>
          {line}
        </div>
      ))}
      <div className="flex items-center">
        <div className="flex-[0_0_auto] text-green-500">{promptLabel}</div>
        <div className="flex flex-1 ml-4 items-center text-green-500">
          <input
            className='flex flex-1 ml-4 items-center text-green-500 w-full bg-transparent border-0 outline-none text-sm font-mono'
            type="text"
            value={input}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            // @ts-ignore
            ref={inputRef}
          />
        </div>
      </div>
    </div>
    
  );
});