import React, { useState, useEffect } from 'react';
import { Data } from '../Data';
import {
    Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Container, Typography
} from "@mui/material"

const WorkoutTable = ({ day, velocityRange, velocityName }) => {

    const [mainLift, setMainLift] = useState("");
    const [exercises, setExercises] = useState([]);

    const setUpperBody = () =>{
        setMainLift("Bench Press");
        setExercises(Data.UpperBody);
    }

    const setLowerBody = () => {
        setMainLift("Squat");
        setExercises(Data.LowerBody);
    }


  return (
    <div>WorkoutTable</div>
  )
}

export default WorkoutTable;