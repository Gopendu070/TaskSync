
import React from 'react';
import { useState } from 'react';

function Form(props) {
    // console.log( typeof props);
    // console.log(props.Array[0]);
    const [name, setName] = useState('');
    const [val, setVal] = useState(null)

    // setVal(props)
    // console.log(val);
    const handleChange1 = (event) => {
        setName(event.target.value);

    };

    const [passWord, setPassword] = useState('');
    const handleChange2 = (event) => {
        setPassword(event.target.value);
    };

    function register() {
        window.open('http://localhost:5175/', '_blank');
    }







    const Match = () => {

        for (let i = 0; i < 10; i++) {
            if (name == props.Array[i].Name && passWord == props.Array[i].Password) {

                const url = `http://localhost:3000/todo_react_app/`;

                window.open(url, '_blank');
            }

        }

    }





    return (
        <>

            <div className="main-container h-screen w-full bg-gradient-to-r from-slate-500 to-gray-900 flex justify-center items-center">

                <div className="container h-96 w-80  border-2 rounded-md border-sky-800 bg-gradient-to-r from-slate-600 to-gray-900 flex flex-col  items-center ">
                    <div className=" h-10 w-80 bg-gradient-to-r from-slate-500 to-gray-900 rounded-md flex justify-center">
                        <h2 className=" font-extrabold text-2xl text-sky-400">Login</h2>
                    </div>

                    <form className=" h-80 mt-4 flex flex-col justify-around items-center">
                        <div className="flex">
                            <input type="text" name="userName" id="userName" placeholder="User Name" className="  h-10 w-60 p-4 border-2 rounded-md bg-gradient-to-r from-slate-500 to-gray-900  text-sky-400  border-sky-500"
                                value={name} onChange={handleChange1}

                            />
                        </div>

                        <div className="flex">
                            <input type="password" name="password" id="password" placeholder="Password" className="  h-10 w-60 p-4 border-2 rounded-md  bg-gradient-to-r from-slate-500 to-gray-900 text-sky-400  border-sky-500"
                                value={passWord} onChange={handleChange2}
                            />
                        </div>

                        <div className="flex">
                            <button className="h-10 w-20 rounded-md bg-gradient-to-r from-slate-500 to-gray-900 font-bold  text-sky-400 border-2 border-sky-500" onClick={() => Match()}>Login</button>
                        </div>
                        <button onClick={() => { register() }} className=' text-blue-900'>Register...</button>
                    </form>

                    <div>

                    </div>

                </div>

            </div>
        </>
    );


}

export default Form;

