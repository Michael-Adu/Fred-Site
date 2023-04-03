import React from 'react'
import Phone from "@mui/icons-material/Phone"
import Twitter from "@mui/icons-material/Twitter"
import Email from "@mui/icons-material/Email"
import Button from '@mui/material/Button';
import "./footer.css"

function Footer() {
  return (
    <div class="site-footer">
        <div class="help-button">
            <Button>
                Help/Support
            </Button>
        </div>
        <div id = "phone-number" class="information-container">
            <Phone/>
            <a>+44554645</a>
        </div>
        <div id = "twitter-handle" class="information-container">
            <Twitter/>
            <a>+44554645</a>
        </div>
        <div id = "email" class="information-container">
            <Email/>
            <a>+44554645</a>
        </div>


    </div>
  )
}

export default Footer