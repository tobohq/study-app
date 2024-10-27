"use client";

import { useState, useRef } from 'react';
import { clearInterval } from 'timers';
// use state manages the state 
// use ref lets us store an id reference

export default function useTimer(initial_time = 25 * 60){ // might make it more than 25 minutes
    const [time, set_time] = useState(initial_time);
    const [is_active, set_is_active] = useState(false);
    const [is_break, set_is_break] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // start or pause
    const toggle_timer = () => {
        if (is_active == true){ // if it is already running we want it to pause
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
        } else {
            intervalRef.current = window.setInterval(() => { // creating a new interval
                set_time((prev_time) => {
                    if (prev_time > 0){
                        return prev_time - 1;
                    } else {
                        clearInterval(intervalRef.current!);
                        intervalRef.current = null;
                        return 0;
                    }
                });
            }, 1000);
        }
        set_is_active(!is_active);
    };
    
    // timer for break
    const start_break = () =>{
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        set_time(5 * 60);
        set_is_active(false);
        set_is_break(true);
    };


    // timer to reset the timer
    const reset_timer = () => {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        set_time(initial_time);
        set_is_active(false);
    };

    // formatting the time as MM:SS
    const format_time = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
    };

    return { 
        time: format_time(time), 
        // raw_time: time,
        is_active, 
        is_break, 
        toggle_timer, 
        reset_timer, 
        start_break };
}