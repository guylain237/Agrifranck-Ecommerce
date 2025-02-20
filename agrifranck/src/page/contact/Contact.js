import React, { useEffect, useState } from 'react';

import { validateEmail, validateFullName, validateMessage, validatePhone } from './validation/Validation';
import InlineError from './validation/InlineError';

import { toast } from 'react-toastify';
import Toast from './validation/Toast';
import Loading from './validation/Loading';
import { IpAddress } from './API';
import { GetContries} from './API';
import { SendEmail } from './API/send';

import './contact.css';


const InputClass = 'w-full py-4 placeholder:text-gray px-6 text-orange-400 border-2 mt-2 border-border rounded-md';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('France');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState(false);

  // Supprimer les variables inutiles
  const result = Object.keys(countries).map((key) => countries[key]);
  const output = result.find((x) => x.country_name === country);
  const outputResult = output ? output.dialling_code : '';
  const phoneFull = outputResult + phone;

  useEffect (() =>{

    if (!ipData && country) {
      IpAddress({setLoading,  setIpData });
      GetContries({setLoading,  setCountries });
    }

    /*  validation  */
    validateFullName({fullName , setFullNameError});
    validateEmail({email, setEmailError});
    validateMessage({message, setMessageError});
    validatePhone({phone, setPhoneError});
    
    // ***********
    if (send) {
    toast.success(send.msg);
      setFullName("")
      setEmail("")
      setMessage("")
      setSend()
      setPhone("")
    }

  }, [fullName, email,phone,message ,ipData,countries,send]);

console.log(send);



const submitHandler = (e) => {
  e.preventDefault();
  setButtonLoading(true);
  if (!fullNameError & !emailError & !phoneError & !messageError) {
    SendEmail({ fullName, email, phone: phoneFull, message, setSend }).then(
      () => {
        setButtonLoading(false);
      }
    );
  }
};


  return (
    <>
    <Toast/>
      <div className="containerContact flex-col py-12 mx-auto min-h-screen sm:py-18 px-4">
      
      { 
        loading? ( <Loading/>  ): (
        
        
          <div className="main-box lg:w-3/4 w-full flex box-shadow rounded-lg overflow-hidden">
              
            <div className="box-1 text-center bg-white flex-col py-10 sm:py-0">
            
             
              <p className="italic text-7sm mx-10 text-black">
            Nous avons détecté que vous êtes actuellement  à {"  "}
              <span className="font-bold">({ipData && ipData})</span>
            </p>
          </div>
          <form onSubmit={submitHandler} className="box-2 bg-white pt-12 pb-6 sm:px-12 px-6">
            <h2 className="sm:text-2xl text-xl text-center mb-12 font-semibold">Contactez-Nous</h2>
            {/* fullName */}
            <div className="my-6">
              <label>Nom </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                type="text"
                placeholder="User Doe"
                className={InputClass}
              />
              {fullNameError && <InlineError error={fullNameError} />}
            </div>
            {/* email */}
            <div className="my-6">
              <label>Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                className={InputClass}
              />
                {emailError && <InlineError error={emailError} />}
            </div>
            {/* phone */}
            <div className="my-6">
              <label>Telephone</label>
              <div className="grid gap-3 grid-cols-12 border-2 mt-2 border-border rounded-md w-full px-2">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="col-span-3 bg-orange-400 py-3 px-2 my-2 text-sm rounded"
                >
                  {result &&
                      result.map((e, index) => (
                        <option key={index} value={e.country_name}>
                          {e.country_name}
                        </option>
                      ))}
                </select>
                <div className="tracking-widest col-span-2 border-x-2 border-border flex-colo">
                  {outputResult}
                </div>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="0765452312"
                  className="placeholder:text-gray text-orange-400 col-span-7 px-3"
                />
                 
              </div>
              {phoneError && <InlineError error={phoneError} />}
            </div>
            {/* message */}
            <div className="my-6">
              <label>Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="comment pouvons nous vous aidez"
                rows={3}
                className="mt-2 w-full border-2 border-border py-4 placeholder:text-gray px-6 text-orange-400 rounded-md"
              />
                {messageError && <InlineError error={messageError} />}
            </div>
            {/* submit */}
            <button
              type="submit"
              disabled={buttonLoading && true}
              className="w-full border-2 border-main text-black  hover:bg-white trans bg-main mt-8 rounded-md tracking-widest py-4 font-subMain font-bold"
            >
               {buttonLoading ? 'Loading..' : 'ENVOYER'}
            </button>
           
          </form>
        </div>
         )
        }
      </div>
     
    </>
  );
}

export default Contact;
