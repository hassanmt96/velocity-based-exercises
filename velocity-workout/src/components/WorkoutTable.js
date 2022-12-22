import React, { useState, useEffect } from 'react';
import { Data } from '../Data';
import {
    Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Container, Typography
} from "@mui/material"

const WorkoutTable = ({ day, velocityRange, velocityName }) => {

    const [mainLift, setMainLift] = useState("");
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        if (day === "Upper Body") {
          setUpperBody();
        } else if (day === "Lower Body") {
          setLowerBody();
        }
      }, [day]);

    const setUpperBody = () =>{
        setMainLift("Bench Press");
        setExercises(Data.UpperBody);
    }

    const setLowerBody = () => {
        setMainLift("Squat");
        setExercises(Data.LowerBody);
    }

      //Create copy of velocities array for readability.
  const velocities = Data.Velocities;

  const getPhaseIndex = () => {
    //Get the current velocity object based on the velocityName prop
    const currentVelocityObj = velocities.filter((velocity) => {
      return velocity.name === velocityName;
    });

    //Returns integer of the index of current velocity object
    return velocities.indexOf(currentVelocityObj[0]);
  };

  const thisPhaseIndex = getPhaseIndex();

  const getPhaseName = () => {
    //If the selected velocity is at the end, cycle back to the beginning
    if (thisPhaseIndex === velocities.length - 1) return velocities[0].name;
    //else return the name of the next velocity in the array
    return velocities[thisPhaseIndex + 1].name;
  };

  const getPhaseRange = () => {
    //If the selected velocity is at the end, cycle back to the beginning
    if (thisPhaseIndex === velocities.length - 1) return velocities[0].range;
    //else return the range of the next velocity in the array
    return velocities[thisPhaseIndex + 1].range;
  };

  const thisPhaseName = getPhaseName();

  const thisPhaseRange = getPhaseRange();

  return (
    <Container>
      {/* Don't render table until day and velocity have been selected */}
      {day && velocityRange ? (
        <>
          <Typography variant="h4">
            Focus this phase: {thisPhaseName}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Exercise</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Target Velocity (m/s)
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Sets X Reps
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {/* Return main lift and velocity in first row */}
                  <TableCell>{mainLift}</TableCell>
                  <TableCell>{thisPhaseRange}</TableCell>
                  <TableCell>
                    3 X N/A
                    <br />
                    Stop set at 20% drop in velocity
                  </TableCell>
                </TableRow>
                {/* Return the remainder of the exercises with sets x reps */}
                {exercises.map((exercise) => {
                  return (
                    <TableRow>
                      <TableCell>{exercise.name}</TableCell>
                      <TableCell>N/A</TableCell>
                      <TableCell>{exercise.setsReps}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography variant="h3" style={{ marginTop: 80 }}>
          Please Select A Day And Your Velocity Range From Last Phase From The
          Dropdown Menus Above
        </Typography>
      )}
    </Container>
  );
}

export default WorkoutTable;