import React, { useState } from 'react';
import axios from 'axios';

function Form() {

  function login(){
    window.open('http://localhost:5173/?userName=&password=p', '_blank')
  }


    const [values, setValues] = useState({
        Name: '',
        UserID: '',
        Password: '',
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        try {
          const response = await axios.post('http://localhost:8082/user', values);
          console.log("Success:", response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      }

  return (
    <>
      <div className="main-container h-screen w-full bg-gradient-to-r from-slate-500 to-gray-900 flex justify-center items-center">
        <div className="container h-96 w-80 border-2 rounded-md border-sky-800 bg-gradient-to-r from-slate-600 to-gray-900 flex flex-col items-center">
          <div className="h-10 w-80 bg-gradient-to-r from-slate-500 to-gray-900 rounded-md flex justify-center">
            <h2 className="font-extrabold text-2xl text-sky-400">Register</h2>
          </div>

          <form onSubmit={handleSubmit} className="h-80 mt-4 flex flex-col justify-around items-center">
            <div className="flex">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="User Name"
                className="h-10 w-60 p-4 border-2 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 text-sky-400 border-sky-500"
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <input
                type='number'
                name="UserID"
                id="UserID"
                placeholder="User Id"
                className="h-10 w-60 p-4 border-2 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 text-sky-400 border-sky-500"
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                className="h-10 w-60 p-4 border-2 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 text-sky-400 border-sky-500"
                onChange={handleChange}
              />
            </div>
            <div className=" w-48 flex justify-around">
            <button className="h-10 w-20 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 font-bold text-sky-400 border-2 border-sky-500" onClick={()=>{login()}}>
                Back
              </button>
              <button className="h-10 w-20 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 font-bold text-sky-400 border-2 border-sky-500" onClick={()=>{
                
                if(values.Name!='' || values.Password!='')login()}}>
                Register
              </button>
              
            </div>
           
          </form>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Form;
