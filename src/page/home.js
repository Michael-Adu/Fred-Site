import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import House from "@mui/icons-material/House"
import Map from "@mui/icons-material/Map"
import Assignment from "@mui/icons-material/Assignment"
import MenuBook from "@mui/icons-material/MenuBook"
import People from "@mui/icons-material/People"
import Reviews from "@mui/icons-material/Reviews"
import "./home.css"

function Home() {
    const sideBarButtons = [
        {
            name: "Home",
            icon: <House />
        },
        {
            name: "User's Map",
            icon: <Map />
        },
        {
            name: "Register",
            icon: <Assignment />
        },
        {
            name: "Assessments",
            icon: <MenuBook />
        },
        {
            name: "Tutors",
            icon: <People />
        },
        {
            name: "Reviews",
            icon: <Reviews />
        },

    ]
    return (
        <div class="site-home">
            <div class="header">
                <Header />
            </div>
            <div class="main">
            <div class="sideBar">
                <SideBar buttons={sideBarButtons} />
            </div>

            <div class="main-content">
            </div>
            </div>
            

            <div class="footer">
                <Footer/>
            </div>

        </div>
    )
}

export default Home