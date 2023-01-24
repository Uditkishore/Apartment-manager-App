import React, { useState } from "react";
import { Box, Button, Stack, Paper, TextField, Alert, AlertTitle, CircularProgress } from '@mui/material';
import { SignupBox } from "./SignupStyles"
import { useNavigate } from "react-router-dom";
import baseUrl from '../../Api'
import axios from 'axios'


export const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setData({
      ...data,
      [id]: value
    })
  };

  const handleSubmit = async () => {
    try {

      await axios.post(`${baseUrl}/register`, data).then((res) => {
        setAlert(!alert);
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(res.data))
          navigate('/login')
        }, 2000)
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SignupBox>
      <Paper
        sx={{
          width: { xs: '80%', sm: "30%" },
          p: { xs: 3, sm: 5 }
        }}
        elevation={3}
      >
        <h1>Signup</h1>
        <Stack
          direction={'column'}
          spacing={2}
        >
          <TextField
            onChange={handleChange}
            id="name"
            type={'name'}
            label="Name"
            variant="standard"
            required />
          <TextField
            onChange={handleChange}
            id="email"
            type={'email'}
            label="User Name"
            variant="standard"
            required />
          <TextField
            onChange={handleChange}
            id="password"
            type={'password'}
            label="Password"
            variant="standard"
            required />
          <Alert sx={{ display: alert ? "block" : "none" }} severity="success">
            <AlertTitle>Success</AlertTitle>
            Signup Successful — <strong>Redirecting!</strong>
            <br />
            <CircularProgress color="inherit" />
          </Alert>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Button
              size='small'
              variant="contained"
              sx={{ mt: 5 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              onClick={() => navigate('/login')}
              size='small'
              variant="contained"
              sx={{ mt: 5 }}
            >
              Login
            </Button>
          </Box>
        </Stack>
      </Paper>
    </SignupBox>
  );
};
