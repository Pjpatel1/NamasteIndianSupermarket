import React, { useState } from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const navigate = useNavigate();
    // const handleRedirect = () =>
    // {
    //     navigate('/');
    // };
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [Password, setPassword] = useState();
    const [Email, setEmail] = useState();
    const handleSignup = async (e) =>
    {
      e.preventDefault();
      if(Password === confirmPassword)
      {
         try{
          const response =  await axios.post('https://sampleserver-96f7c60072ed.herokuapp.com/register',{
            FirstName: Fname,
            LastName: Lname,
            Email: Email,
            Password: Password,
          });
          if(response.status === 200)
          {
            alert('User created Successfully go ahead and sign in');
            navigate('/login');
          }
         
          else
          {
            alert('Signup failed. Please try again.');
          }
          
         } 
         catch(error)
         {
            if(error.message === "Request failed with status code 400")
            {
              alert("User already exist use different email")
            }
          console.error('Error', error);
          console.log(' An error occured while SigningUp.');
         }
      }
      else
      {
        console.log('Password do not match');
      }
    };
    
  return (
    <div className='LSpage'> 
      <div className='Logincover'>
              <span className="LoginLabel"> Register </span>
              <div className="FLInputs">
                <div className='FName'>
                  <div className='FN-Label'>
                    First Name
                  </div>
                  <input 
                    className="FLName_input" 
                    type="text"
                    placeholder="First-Name"
                    onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className='LName'>   
                  <div className='FN-Label'>
                    Last Name
                  </div>
                  <input
                   className="FLName_input" 
                   type="text"
                   placeholder="Last-Name"
                   onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
             
              <div className="LSInputs">
                  <div>Email</div>
                  <input 
                  type="text" 
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="LSInputs">
                  <div>Password</div>
                  <input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                  <div>Confirm Password</div>
                  <input type="Password" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
              <div>
                <Link to ="/Login">
                  Already have an account
                </Link>
              </div>
              <button className="Registerbtn" onClick={handleSignup} >
                        Sign Up
              </button>
                  
              <p className='text'>
                  Or Signup Using
              </p>
              <div className='alt-login'>
                  <div className='facebook'>
                    Facebook
                  </div>
                  <div className='Google'>
                    Google 
                  </div>
              </div>
          </div>
        </div>
  )
}

export default Signup