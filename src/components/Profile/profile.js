import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import './profile.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(() => {
            navigate("/", { replace: true });
        });
    }

    return (
        <div>

            {/* Profile Container Start */}
            <div className='container'>
                <div className='row '>

                    {/* Profile Start */}
                    <div className='profilecontainer col-12'>
                        <h2 className='profile-title mt-4'>Profil Bilgileri</h2>

                        <div className='mt-5 d-flex'>
                            <div >
                                <ul>
                                    <li>
                                        < img
                                            src="https://i.hizliresim.com/c9pmp3e.png"
                                            alt="profilpic"
                                            height={250}
                                        />
                                    </li>

                                    <li>

                                        <button
                                            className='btn btn-dark'
                                            style={{ width: "100%" }}
                                            onClick={handleLogout}
                                        >Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>


                            <ul>
                                <li>
                                    <h3 className='ms-5 mt-3 user-titles'>
                                        <img
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/signIn.svg"
                                            height="35"
                                            alt="nameSurname"
                                        /> {user.name} {user.surname}
                                    </h3>
                                </li>

                                <li>
                                    <h3 className='ms-5 mt-4 user-titles'>
                                        <img
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/account.svg"
                                            height="35"
                                            alt="email"
                                        /> {user.email}
                                    </h3>
                                </li>

                                <li>
                                    <h3 className='ms-5 mt-4 user-titles'>
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png"
                                            height="25"
                                            alt="password"
                                        /> {user.password}
                                    </h3>
                                </li>


                                <li>
                                    <h3 className='ms-5 mt-4 user-titles'>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1182/1182778.png?w=826&t=st=1659969818~exp=1659970418~hmac=9191db8f26e02949f3b165808f3ab0d7587b8c98b3152589ca319750dbcd5a8f"
                                            height="30"
                                            alt="birthday"
                                        /> {user.birthday}
                                    </h3>
                                </li>

                                <li>
                                    <h3 className='ms-5 mt-4 user-titles'>
                                        <img
                                            // src="https://upload.wikimedia.org/wikipedia/commons/6/63/Black_telephone_icon_from_DejaVu_Sans.svg"
                                            src="https://storage.googleapis.com/proudcity/sanrafaelcaemployees/uploads/2019/10/Phone-Icon.jpg"
                                            height="33"
                                            alt="telNumber"
                                        /> {user.telNumber}
                                    </h3>
                                </li>
                            </ul>

                            <div className='ms-5'>
                                <ul className='ms-5'>
                                    <li>
                                        <img
                                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653498040386"
                                            alt="storePictures"
                                            height={275}
                                        />
                                    </li>
                                    <li>
                                        <Link to='/Store'>
                                            <button
                                                type="button"
                                                className="btn btn-dark store-button-container"
                                            >Go to The Store Page.</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* Profile Finish */}

                </div>
            </div>
            {/* Profile Container Finish */}

            {/* Footer Start */}
            <div className='profile-footer'>

                <div>
                    {new Date().getFullYear()} Copyright: <a href="https://github.com/alikartalonline"> github.com/alikartalonline<svg
                        height="32"
                        width="20"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="ms-1"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg></a>
                </div>
            </div>
            {/* Footer Finish */}

        </div>
    )
}

export default Profile;