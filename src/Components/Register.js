import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function () {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (userData.password === userData.confirmpassword) {
      alert("Registered successfully")
    } else {
      alert("password must match!")
    }
  }

  return (
    <form onSubmitCapture={submitHandler}>
      <Box sx={{ width: '100%', maxWidth: 500, maxHeight: 700, backgroundColor: "white", padding: 4, borderRadius: 5, }}>
        <Typography variant="h2" gutterBottom>
          Register
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm password"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />

        <Box sx={{ textAlign: "left", margin: 1 }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant="p" gutterBottom>
            Accept Terms and Conditions
          </Typography>
          <Button type='submit' variant="contained" sx={{ margin: 1 }} fullWidth>Register</Button>
        </Box>
      </Box>
    </form>

  )
}
