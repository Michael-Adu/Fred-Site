import React from 'react'
import "./homecontent.css"

function HomeContent() {
    return (
        <div class="home-content">
            <div class="home-content-header">
                WHAT ARE WE LEARNING TODAY?
            </div>
            <table class="home-content-topics">
                <tr>
                    <td class="home-content-container" style={{
                        backgroundColor: "blue"
                    }}>
                        MATHEMATICS
                    </td>
                    <td class="home-content-container" style={{
                        backgroundColor: "green"
                    }}>
                        GEOGRAPHY
                    </td>
                </tr>
                <tr>
                    <td class="home-content-container" style={{
                        backgroundColor: "orange"
                    }}>
                        ENGLISH
                    </td>
                    <td class="home-content-container" style={{
                        backgroundColor: "red"
                    }}>
                        EXTRA-CURRICULAR ACTIVITIES
                    </td>
                </tr>
                <tr>
                    <td class="home-content-container" style={{
                        backgroundColor: "purple"
                    }}>
                        SCIENCE
                    </td>
                    <td class="home-content-container" style={{
                        backgroundColor: "brown"
                    }}>
                        HISTORY/ART
                    </td>
                </tr>


        </table>

        </div >
    )
}

export default HomeContent