import React, { useState } from "react";

function Navbar(){
    const[movie, setMovie]= useState('')
    

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Movie Detailer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0" onSubmit={(e)=>{
                        e.preventDefault();
                    }}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search" value={movie} onChange={(e)=>{
                        setMovie(e.target.value);
                    }}/>
                    <button className="btn my-2 my-sm-0" id="src-btn" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;