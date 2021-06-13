import React from 'react'

export const About = () => {
    let myStyle= {
        minHeight : "70vh",
        margin: "40px auto"

    }
    return (
        <div className="container" style={myStyle}>
            <p> This is about page</p>
        </div>
    )
}
