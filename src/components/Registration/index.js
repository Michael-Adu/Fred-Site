import React from 'react'
import "./registration.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Check from "@mui/icons-material/Check"

function Registration() {
    var registerData = {
        name: '',
        dob: '',
        age: '',
        gender: '',
        grade: '',
        courses: '',
        username: '',
        email: ''
    };
    return (
        <div class="registration">
            <div class="registration-header">START YOUR JOURNEY WITH SCHOOL ON THE GO HERE!!! REGISTER NOW</div>
            <table class="form">
                <td class="form-data">
                    <a>NAME: </a>
                    <TextField  size='small' onChange={(event)=>{
                        registerData.name = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>DATE OF BIRTH: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.dob = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>AGE: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.age = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>GENDER: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.gender = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>GRADE/YEAR: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.grade = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>COURSES/SUBJECTS: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.courses = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>SELECT USERNAME: </a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.username = event.target.value
                    }}
                    >
                    </TextField>
                </td>
                <td class="form-data">
                    <a>{"EMAIL ADDRESS(PARENT/GUARDIAN): "}</a>
                    <TextField size='small' onChange={(event)=>{
                        registerData.email = event.target.value
                    }}
                    >
                    </TextField>
                </td>
            </table>
            <div class="save-button">
                <Button onClick={()=>{
                    console.log(registerData.name);
                }}
                endIcon={<Check/>}
                sx={[{
                    color: "blue",
                    backgroundColor: "white"
                }]}
                >
                    SAVE AND CONFIRM
                </Button>
            </div>


        </div>
    )
}

export default Registration