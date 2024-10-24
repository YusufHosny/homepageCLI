"use client"

import React, {useEffect, useMemo} from 'react';
import {Terminal} from "@/app/terminal/terminal";
import {useTerminal} from "@/app/terminal/hooks";
import Link from 'next/link';

function Core() {
  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
  } = useTerminal();


  const promptLabel = "/info/yusuf>";

  const commands = useMemo(() => ({
    'help': async () => {
      pushToHistory(
          "Here is a list of currently supported commands:\n\tintroduction, education, socials, cv, contact, clear."
          );
    },
    'introduction': async () => {
      pushToHistory(
          "Hello, I'm Yusuf Hussein, a student of 'Engineering Technology - Electronics and ICT' in KU Leuven's Group T Campus. I am passionate about learning more about all things software, hardware, and more."
          );
    },
    'education': async () => {
      pushToHistory(
          "I am currently studying Master's of Engineering Technology - Electronics and ICT at KU Leuven."
          );
    },
    'socials': async () => {
      pushToHistory(
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p>Click to find me on: </p>

          <Link className="ml-3 text-green-500" href='https://github.com/YusufHosny/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"   viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </Link>

        <Link className="ml-3 text-green-500" href='https://www.linkedin.com/in/yusuf-hussein-75956323b/'>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
          );
    },
    'cv': async () => {
      pushToHistory(
          <Link 
          href="https://drive.google.com/file/d/1FSCvrsojw5X68WUNzcjk2DjScZc39OS9/view?usp=sharing"
          >
              You can view my CV here.
          </Link>
          );
    },
    'contact': async () => {
      pushToHistory(
          "Phone: +32 496 61 67 25 \t Email: yusufyy2004@hotmail.com"
          );
    },
    'clear': async () => {
      resetTerminal();
    },
  }), [pushToHistory, resetTerminal]);

  const notACommandHandler = async (command: String) => {
    await pushToHistory(
      <div>
        <strong>{command} is not a command.</strong> Try help.
      </div>
      );
  }

  const beforeCommands = async (command: String) => {
    await pushToHistory(
      <div>
        {promptLabel}    {command}
      </div>
      );
  }

  return (
    <div className="w-full h-full">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={promptLabel}
        commands={commands}
        beforeCommands={beforeCommands}
        notACommandHandler={notACommandHandler}
      />
    </div>
  );
}

export default Core;
