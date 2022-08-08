import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AccountFooter from '../Account/accountFooter';
import { useAuth } from '../../contexts/AuthContext';
import './signin.css';

function SignIn() {

  const { login, loggedIn, user } = useAuth();
  const navigate = useNavigate();

  if (loggedIn) {
    navigate("/profile", { replace: true });
  }

  // console.log("signin user:", user); 
  // userları çekebilmiş miyim kontrol etmek için kullanıyorum.

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      console.log("values signin :", values)
      try {
        {
          user.email == values.email && user.password == values.password ? login(user) : alert("Wrong email or password")
        }
      } catch (e) {
        console.log("error varsa :", e)
      }
    },
  });

  return (
    <div>
      <div className='container'>
        <div className='row'>

          <div className='col-5'>
            <h4 className='Apple-Title'>
              Apple Kimliği
            </h4>
          </div>


          <div className="col-5 ">
            <ul className="Apple-Title-ul">

              <li>
                <a href="#">
                  Giriş Yap
                </a>
              </li>

              <li>
                <a href="#">
                  Apple Kimliğinizi Oluşturun
                </a>
              </li>

              <li>
                <a href="#">
                  SSS
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <hr style={{ marginTop: "10px" }} />

      <div className='container'>
        <div className='row'>


          {/* SECTION TITLE and P */}
          <div className='col-12 account-title'>

            <h2 className='mt-3'>Apple Kimliğiniz ile Giriş Yapın</h2>
            <p style={{ fontSize: "14px" }}>
              Tüm Apple hizmetlerine erişim için tek ihtiyacınız olan bir Apple Kimliği.
              <br />Zaten Apple Kimliğiniz var mı? <a href="#">Burada bulabilirsiniz</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
            </p>
          </div>


          <form onSubmit={formik.handleSubmit}>
            
            {/* E-mail */}
            <div className='col-12 d-flex account-selected mt-5' >
              <div className='col'></div>

              <div className='col-4' style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.5em"}}>E-Mail</h2>
                <div className="form-floating mb-3  col" >

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  <label htmlFor="floatingInput">E-Mail</label>
                </div>

              </div>

              <div className='col'></div>
            </div>


            {/* Password */}
            <div className='col-12 d-flex account-selected mt-3' >
              <div className='col'></div>

              <div className='col-4' style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.5em"}}>Şifre</h2>
                <div className="form-floating mb-3  col" >

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  <label htmlFor="floatingInput">Şifre</label>
                </div>

              </div>

              <div className='col'></div>
            </div>




            {/* BUTTON*/}
            <div className='col-12 d-flex mt-1'>
              <div className='col'></div>

              <div className=" col-1 mt-3">
                <button
                  type="submit"
                  className="privacy-button"
                >
                  Giriş Yapın
                </button>
              </div>

              <div className='col'></div>
            </div>

          </form>

        </div>
      </div>

      <div className='footerSignin'>
        <AccountFooter />
      </div>

    </div >
  )
}



export default SignIn;