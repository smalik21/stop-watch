import '../App.css';
import Time from './time/Time';
import Laps from './laps/Laps';
import Buttons from './buttons/Buttons';

import { useState, useRef } from "react";

export default function App() {

    const [index, setIndex] = useState(1);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [currentLapTime, setCurrentLapTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const previousTimeRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            previousTimeRef.current = Date.now();
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const elapsedTime = now - previousTimeRef.current;
                setTime((time) => time + elapsedTime);
                setCurrentLapTime((currentLapTime) => currentLapTime + elapsedTime);
                previousTimeRef.current = now;
            }, 10);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setLaps([]);
        setCurrentLapTime(0);
        setIsRunning(false);
    };

    const lapTimer = () => {
        setLaps([...laps, [index, currentLapTime, time]]);
        setCurrentLapTime(0);
        setIndex(index + 1);
    };

    function handleStart() {
        startTimer();
    }

    function handlePause() {
        stopTimer();
        setTime(time);
    }

    function handleLap() {
        lapTimer();
    }

    function handleResume() {
        startTimer();
    }

    function handleReset() {
        resetTimer();
        setIndex(1);
    }


    return (
        <div className="App">
            <Time
                time={time}
                lapTime={currentLapTime}
            />
            <Laps
                laps={laps}
            />
            <Buttons
                onStart={handleStart}
                onPause={handlePause}
                onLap={handleLap}
                onResume={handleResume}
                onReset={handleReset}
            />
        </div>
    );
}

