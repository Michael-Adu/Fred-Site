import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import "./sidebar.css";
import PropTypes from 'prop-types'

function SideBar(props) {
    const [buttons, setButtons] = useState(<div></div>);

    useEffect (() =>{
        var tempButtons = [];
        for(var i = 0; i < props.buttons.length; i++){
          tempButtons.push(<Button fullWidth={true} size="small" sx={[{
            backgroundColor: 'white',
            height: "70%",
            borderTop: "1px solid gray",
            borderBottom: "1px solid gray",
            color: "gray",
            borderRadius: "0px",
          }]} startIcon={props.buttons[i].icon}>
            {props.buttons[i].name}
          </Button> );

        }
        setButtons(tempButtons);
    },[]);

    return (
        <div class="site-sidebar">{buttons}</div>
    )
}

SideBar.propTypes = {};
export default SideBar