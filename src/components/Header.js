import React from "react"


export default function Header(){
        let date = new Date().toUTCString().slice(5, 16);
    return(    
              <div className="header-section">
                <h1>Website Todo List</h1>
                <p> Task 10 | {date}</p>
              </div> 
    )
}