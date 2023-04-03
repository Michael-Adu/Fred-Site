import React, { useState } from 'react'
import "./header.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircle from "@mui/icons-material/AccountCircle"
import Logout from "@mui/icons-material/Logout"
import Search from "@mui/icons-material/Search"


function Header() {
  return (
    <div class="site-header">
      <div class="site-image">
        <img src="https://c8.alamy.com/comp/2AW6RN7/cool-character-of-school-bus-working-with-laptop-2AW6RN7.jpg"></img>
      </div>
      <div class="site-title">
        SCHOOL ON THE GO
      </div>
      <div class="site-navigation">
        <IconButton id="account-icon">
          <AccountCircle />
        </IconButton>
        <div id="search-text">
          <TextField InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            placeholder: "Search",
            size: "small"
          }}>
          </TextField>
        </div>

        <IconButton id="logout-icon">
          <Logout />
        </IconButton>
        <Button id="SignOut-button" sx={[{
            backgroundColor: 'red',
            height: "70%",
            color: "white"
          }]}>
          SIGN OUT
        </Button>
      </div>

    </div>
  )
}

export default Header