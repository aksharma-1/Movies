import React from 'react'


function Card(){
    return(
        <>

            







          <div className="container1">
                <div className="movie-card">
                        <div className='Img-title'>
                            <img className='card-img' src='./image/STRANGER-THINGS.jpg' alt='image not loaded'/>
                            <span className="movie-title">Stranger things</span>   
                        </div>
                        <div className="movie-info">
                            <h4 className="movie-epi">Released:- 2022</h4>    
                            <a href='#'><button className='learn-btn' type="button"  data-toggle="modal" data-target="#exampleModal">Learn more</button></a>    
                        </div>        
                        
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Movie Description</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    </div>
                </div>
                </div>

                <div className="movie-card">
                    <div className='Img-title'>
                        <img className='card-img' src='./image/wensday.jpg' alt='s'/>
                        <span className="movie-title">Wednesday</span>   
                    </div>
                    <div className="movie-info">
                        <h4 className="movie-epi">Released:- 2022</h4>    
                        <a href='#'><button className='learn-btn' type="button"  data-toggle="modal" data-target="#exampleModal">Learn more</button></a> 
                    </div>
                </div>

                <div className="movie-card">
                    <div className='Img-title'>
                        <img className='card-img' src='./image/squid.jpg' alt='s'/>
                        <span className="movie-title">Squid Game</span>   
                    </div>
                    <div className="movie-info">
                        <h4 className="movie-epi">Released:- 2022</h4>    
                        <a href='#'><button className='learn-btn' type="button"  data-toggle="modal" data-target="#exampleModal">Learn more</button></a>     
                    </div>
                </div>

                <div className="movie-card">
                    <div className='Img-title'>
                        <img className='card-img' src='./image/Dark.jpg' alt='s'/>
                        <span className="movie-title">Dark</span>   
                    </div>
                    <div className="movie-info">
                        <h4 className="movie-epi">Released:- 2022</h4>    
                        <a href='#'><button className='learn-btn' type="button"  data-toggle="modal" data-target="#exampleModal">Learn more</button></a>     
                    </div>
                </div>

                <div className="movie-card">
                    <div className='Img-title'>
                        <img className='card-img' src='./image/1899.jpg' alt='s'/>
                        <span className="movie-title">1899</span>   
                    </div>
                    <div className="movie-info">
                        <h4 className="movie-epi">Released:- 2022</h4>    
                        <a href='#'><button className='learn-btn' type="button"  data-toggle="modal" data-target="#exampleModal">Learn more</button></a>     
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Card;