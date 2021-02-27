import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useChallangesContext } from './useChallangesContext';

interface IContdownProviderProps {
  children: ReactNode;
}

interface IUseContdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as IUseContdownContextData);

let countdownTimeout: NodeJS.Timeout;
const countdown = 0.05 * 60;


export const CountdownProvider = (props: IContdownProviderProps) => {
  const { children } = props;

  const { startNewChallenge } = useChallangesContext();

  const [time, setTime] = useState(countdown);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = () => {
    setIsActive(true);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(countdown);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge()
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountdownContext = (): IUseContdownContextData => useContext(CountdownContext);
