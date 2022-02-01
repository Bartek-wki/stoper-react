import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from './Time.module.scss';

const Time = () => {
  

  const [timer, setTimer] = useState()
  const [time, setTime] = useState(0) 
  
  const start = () => {
    clearInterval(timer)
    setTimer(setInterval(() => {
      setTime(time => time + 1)
    }, 1))
  };

  const stop = () => {
    clearInterval(timer)
  }

  const reset = () => {
    clearInterval(timer)
    setTime(0);
  }
  
  let h = Math.floor(time / 3600000);
  let min = Math.floor((time - h * 3600000) / 60000);
  let sec = Math.floor((time - h * 3600000 - min * 60000) / 1000);
  let msec = (time - h * 3600000 - min * 60000 - sec * 1000);

  let hh;
  let mm;
  let ss;
  let ms = msec;

  if (h <= 9) {
    hh = '0' + h;
  } else{
    hh = h;
  }

  if (min <= 9) {
    mm = '0' + min;
  } else {
    mm = min;
  }

  if (sec <= 9) {
    ss = '0' + sec;
  } else {
    ss = sec;
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.stopwatchWrapper}>
      <h1>{hh} : {mm} : {ss} . {ms}</h1>
      <Button action={start}>START</Button>
      <Button action={stop}>STOP</Button>
      <Button action={reset}>RESET</Button>
    </div>
  )
}

export default Time;