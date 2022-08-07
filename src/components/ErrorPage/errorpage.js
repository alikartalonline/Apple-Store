import React from 'react';
import './errorpage.css';
import { Link } from "react-router-dom";

// img1: https://cdn.shopify.com/s/files/1/0094/1621/2537/files/3ab6d3fb26ab81aac2230bafef84e596ec379d6d.jpg?299469149236322367

// img2: https://itsdcdn.com/resources/services/logosvg/202109042117/apple-store.svg

function ErrorPage() {
    return (
        <div className='container' style={{ position: "relative" }}>
            <div className='row '>



                <div className='classContainer col-5'>
                    <img
                        src="https://itsdcdn.com/resources/services/logosvg/202109042117/apple-store.svg" alt=""
                        height="50"
                    />
                    <h3 className='mt-3'><strong>404. </strong>That's an error.</h3>
                    <p style={{ fontSize: "18px", marginTop: "20px" }}>The requested URL /doesntexist was not found on this <br />  server. <span>That's all we know</span></p>
                    <Link to='/'>
                    <button type="button" className="btn btn-dark mt-3">Go Back to Homepage</button>
                    </Link>
                </div>

                <div className='col mt-5' >
                    <img src="https://i.hizliresim.com/144zb80.png" alt="macBook" />
                </div>



            </div>
        </div>
    )
}


export default ErrorPage;







