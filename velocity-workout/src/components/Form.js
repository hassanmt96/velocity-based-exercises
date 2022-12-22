import React, { useState, useEffect } from "react";
import WorkoutTable from "./WorkoutTable";
import { Data } from "../Data";
import { TextField, MenuItem } from "@mui/material";

const Form = ({ day }) => {
  const [velocityRange, setVelocityRange] = useState("");
  const [velocityName, setVelocityName] = useState("");

  const changeVelocity = (e) => setVelocityRange(e.target.value);


  const getVelocityName = () => {

    //find matching velocity object
    const currentVelocity = Data.Velocities.filter((velocity) =>{
        return velocity.range == velocityRange;
    });
    // Statment needed to prevent property name "undefined"
    if(currentVelocity[0]){
        setVelocityName(currentVelocity[0].name);
    }
  }

  useEffect(() => getVelocityName(), [velocityRange]);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <TextField
          select
          onChange={changeVelocity}
          value={velocityRange}
          helperText="Please select your max velocity from last phase."
        >
          {Data.Velocities.map((velocity) => {
            return (
              <MenuItem onChange={changeVelocity} value={velocity.range}>
                {velocity.range}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
      <div>
        <WorkoutTable
          day={day}
          velocityRange={velocityRange}
          velocityName={velocityName}
        />
      </div>
    </>
  );
};

export default Form;
