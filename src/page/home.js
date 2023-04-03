import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import UserMap from '../components/UserMap'
import Registration from '../components/Registration'
import House from "@mui/icons-material/House"
import Map from "@mui/icons-material/Map"
import Assignment from "@mui/icons-material/Assignment"
import MenuBook from "@mui/icons-material/MenuBook"
import People from "@mui/icons-material/People"
import Reviews from "@mui/icons-material/Reviews"
import "./home.css"
import HomeContent from '../components/HomeContent'


function Home() {

    const [mainContent, setMainContent] = useState(<HomeContent/>);
    
    const sideBarButtons = [
        {
            name: "Home",
            icon: <House />,
            onTap: () => {
                setMainContent(<HomeContent/>)
            }
        },
        {
            name: "User's Map",
            icon: <Map />,
            onTap: () => {
                setMainContent(
                    <UserMap/>
                )
            }
        },
        {
            name: "Register",
            icon: <Assignment />,
            onTap: () => {
                setMainContent(Registration);
            }
        },
        {
            name: "Assessments",
            icon: <MenuBook />,
            onTap: () => { }
        },
        {
            name: "Tutors",
            icon: <People />,
            onTap: () => { }
        },
        {
            name: "Reviews",
            icon: <Reviews />,
            onTap: () => { }
        },

    ];



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
                    {mainContent}
                </div>
            </div>
            <div class="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Home