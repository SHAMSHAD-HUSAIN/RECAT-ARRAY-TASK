// it is the file for for ouput of quetion no  second
// const Array = [1, 8, 9, 6, 3, 7, 5]
// and print after 2 sec of given array.
//please uncomment  file if it comment  in app file for answer 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SecondArray() {
  const initialArray = [1, 8, 9, 6, 3, 7, 5];
  const [finalArray, setFinalArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < initialArray.length) {
        setFinalArray(prevArray => [...prevArray, initialArray[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <>
    <div style={{marginLeft:"40px"}}>
      <div   style={{marginTop:"40px"}}>
        <p>
       Quetion no2: const Array = [1, 8, 9, 6, 3, 7, 5],

and print each value of Array after 2 sec.
        </p>
      </div>
    <div style={{height:"300px"}}>
      {finalArray.map((element, index) => (
        <h3 key={index}>{element} </h3>
      ))}
    </div>
       <div>
       <Link to="/" ><button>view first answer</button></Link>
   </div>
    </div>
    
    </>
  
  );
}

export default SecondArray;
