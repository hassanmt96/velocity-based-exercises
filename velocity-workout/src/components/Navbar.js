import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";

// Using Inline Styling
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
// }));

// Exporting Default Navbar to the App.js File
export default function Navbar() {
    // const classes = useStyles();

    return (
        <div >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start"
                        color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Build your Strength
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}