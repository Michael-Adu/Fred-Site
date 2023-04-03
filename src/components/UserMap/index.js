import React, { useState } from 'react'
import { Button } from '@mui/material'
import "./usermap.css"

function UserMap() {
    const [embeddedContent, setEmbeddedContent] = useState(<iframe src="https://opendata.bristol.gov.uk/explore/embed/dataset/gullies/map/?location=13,51.47807,-2.5993&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=false" width="800" height="600" frameborder="0"></iframe>);
    return (
        <div class="usermap">
            <div class="button-group">
                <Button 
                sx={[{
                    backgroundColor: "white",
                    color: "black"
                }]}
                onClick={() => {
                    setEmbeddedContent(<iframe src="https://opendata.bristol.gov.uk/explore/embed/dataset/gullies/map/?location=13,51.47807,-2.5993&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=false" frameborder="0"></iframe>);
                }}
                >
                    Map
                </Button>
                <Button sx={[{
                    backgroundColor: "white",
                    color: "black"
                }]} onClick={() => {
                    setEmbeddedContent(<iframe src="https://opendata.bristol.gov.uk/explore/embed/dataset/children-electively-home-educated-in-bristol/table/?disjunctive.ward_name&location=11,51.47125,-2.61622&basemap=jawg.streets&static=false&datasetcard=false" width="800" height="600" frameborder="0"></iframe>);
                }}>
                    Table
                </Button>
                <Button sx={[{
                    backgroundColor: "white",
                    color: "black"
                }]} onClick={() => {
                    setEmbeddedContent(<iframe src="https://opendata.bristol.gov.uk/explore/embed/dataset/children-electively-home-educated-in-bristol/analyze/?disjunctive.ward_name&location=11,51.47125,-2.61622&basemap=jawg.streets&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQVZHIiwieUF4aXMiOiJlbGVjdGl2ZWx5X2hvbWVfZWR1Y2F0ZWRfcmF0ZV9wZXJfMV8wMDBfY2hpbGRfcG9wdWxhdGlvbiIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6InJhbmdlLWN1c3RvbSJ9XSwieEF4aXMiOiJ3YXJkX25hbWUiLCJtYXhwb2ludHMiOjEwMCwidGltZXNjYWxlIjoiIiwic29ydCI6IiIsInNlcmllc0JyZWFrZG93biI6InBlcmlvZCIsInNlcmllc0JyZWFrZG93blRpbWVzY2FsZSI6Im1vbnRoIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJjaGlsZHJlbi1lbGVjdGl2ZWx5LWhvbWUtZWR1Y2F0ZWQtaW4tYnJpc3RvbCIsIm9wdGlvbnMiOnsiZGlzanVuY3RpdmUud2FyZF9uYW1lIjp0cnVlfX19XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZSwidGltZXNjYWxlIjoiIn0%3D&static=false&datasetcard=false" width="800" height="600" frameborder="0"></iframe>)
                }}>
                    Graph
                </Button>
            </div>
            <div class="embedded-content">
                {embeddedContent}
            </div>
        </div>
    )
}

export default UserMap