import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { Snackbar, TextField, Typography, Grid, Box, Button } from "@mui/material";

import { useState } from "react";
import ActionAreaCard from "./components/cards";

function App() {
  // State
  //~ Data states
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [URL, setURL] = useState("");

  const [fruits, setFruits] = useState([]);

  //? UI
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const save = async () => {
    const response = await axios.post("http://localhost:9000/add_data", {
      name,
      URL,
      price,
    });

    if (response.status === 200) {
      setOpen(true);
      setStatus("Saved");
    } else {
      setOpen(true);
      setStatus("Failed");
    }
  };
  const get_list = async () => {
    const response = await axios.get("http://localhost:9000/get_data");
    if (response.status === 200) {
      setFruits(response.data.data); //! Explain

      setOpen(true);
      setStatus("Hurray");
    } else {
      setOpen(true);
      setStatus("Failed");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box style={{ flex: 1, flexDirection: "row" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant={"h6"}
              style={{
                color: "#b4b9d9",
                backgroundColor: "#0c143d",
                marginBottom: 20,
                borderRadius: 5,
                margin: 5,
                padding: 4,
                textAlign: "center",
              }}
            >
              List Of Things
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Button variant="contained" color="secondary" onClick={get_list}>
                  Show Fruit ! 🍇🍈🍉🍊
                </Button>
              </Grid>
              {
                //` condition  ? true : false

                fruits.length > 0
                  ? fruits.map((one_fruit) => {
                      return (
                        <Grid item xs={8}>
                          <ActionAreaCard fruit={one_fruit} />
                        </Grid>
                      );
                    })
                  : null
              }
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant={"h6"}
              style={{
                color: "#b4b9d9",
                backgroundColor: "#0c143d",
                marginBottom: 20,
                borderRadius: 5,
                margin: 5,
                padding: 4,
                textAlign: "center",
              }}
            >
              Add data here
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  value={name}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="URL"
                  variant="outlined"
                  size="small"
                  value={URL}
                  onChange={(e) => {
                    setURL(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Price ₹"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Button variant="contained" onClick={save}>
                  Save Fruit ! 🍇🍈🍉🍊
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              message={status}
              // action={action}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
