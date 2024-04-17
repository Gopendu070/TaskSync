import { useEffect, useState } from 'react';
import './App.css';

import Form from './component/Form';


function App() {
  const [count, setCount] = useState(0);
  const [studentName, setStudentName] = useState(null);
  const [passWord, setPassword] = useState(null); // Initialize with null
  const [data ,setData]=useState();
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/user');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setData(data)
        // console.log(data);

        
        setStudentName(data[1].Name);
        setPassword(data[1].Password); // Update state with fetched name
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

 

  return (
    <>


    <Form Array={data}/>
      {/* <Form name={studentName} passWord={passWord}/> */}
    </>
  );
}

export default App;




















//----------------

// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {


//   const [count, setCount] = useState(0)
  
//   useEffect(()=>{
//     fetch('http://localhost:8081/student')
//     .then(res=>res.json())
//     .then(data=> console.log(data[0].Name))
//     .catch(err=> console.log(err))
//   },[count])
  
//   console.log(count);

//   return (
//     <>
//       <button onClick={()=>setCount(count+1)}>Click</button>

//       <h3>{Name}</h3>
//     </>
//   )
// }

// export default App
