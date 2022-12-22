import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { TextField, MenuItem } from "@mui/material";

function App() {
  const [day, setDay] = useState("");

  const changeDay = (e) => setDay(e.target.value);

  return (
    <div className="App">
      <h1>Velocity Based Strength Training</h1>

      {/* Create upper/lower body selection menu */}
      <div style={{ margin: 10 }}>
        <TextField
          select
          onChange={changeDay}
          value={day}
          helperText="What day is it?"
        >
          <MenuItem onChange={changeDay} value="Lower Body">
            Lower Body
          </MenuItem>
          <MenuItem onChange={changeDay} value="Upper Body">
            Upper Body
          </MenuItem>
        </TextField>
      </div>

      <Form day={day} />
    </div>
  );
}

export default App;
