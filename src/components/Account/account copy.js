import React from 'react';
import './account.css';


function Account() {


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
                                <a href="/account">
                                    Giriş Yap
                                </a>
                            </li>

                            <li>
                                <a href="/account">
                                    Apple Kimliğinizi Oluşturun
                                </a>
                            </li>

                            <li>
                                <a href="/">
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

                    <div className='col-12 account-title'>
                        <h2 className=''>Apple Kimliğinizi Oluşturun</h2>
                        <p>
                            Tüm Apple hizmetlerine erişim için tek ihtiyacınız olan bir Apple Kimliği.
                           <br/>Zaten Apple Kimliğiniz var mı? <a href="/">Burada bulabilirsiniz<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>
                        </p>
                    </div>

<div className='account-input col-12'>
    <input type="text" id="fname"  name="fname" placeholder='Ad' />
    <input type="text" id="lname"  name="lname" placeholder='Soyad' style={{marginLeft:"1%"}}/>


<div className='col-12 mt-5  '>

    <label 
    htmlFor="" 
    className='col-12'
    >
     ÜLKE / BÖLGE
    </label>

    <select id="country" name="country" className='col-12' style={{width:"40%"}}>
    <option value="australia">Türkiye</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

</div>


<input 
type="number" 
className='mt-3' 
style={{width:"40%"}}  
id="birthday"  
name="birthday" 
placeholder='Doğum Tarihi' 
/>



</div>

                    <hr style={{ marginTop: "40px" }} />

                </div>
            </div>



        </div>
    )
}


export default Account;