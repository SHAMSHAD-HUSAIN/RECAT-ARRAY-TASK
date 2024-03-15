// it is the file for for ouput of qeution no  first 
// const Array = [1, 8, 9, 6, 3, 7, 5]
// multyply to 5
// and print after 2 sec.
//please uncomment  file in app file for answer 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Firstarray = () => {
    const initialArray = [1, 8, 9, 6, 3, 7, 5];
    // const finalArray= initialArray;
    const [finalArray, setfinalArray] = useState(initialArray);

    const [val, setVal] = useState(initialArray);
    const [currentIndex, setCurrentIndex] = useState(0);
    //  console.log()
    useEffect(() => {

        if (currentIndex < initialArray.length) {

            const timer = setTimeout(() => {
                const updatedArray = [...val];
                updatedArray[currentIndex] *= 5; // Multiply the current element by 5
                setVal(updatedArray); // Update the state with the modified array
                setCurrentIndex(prevIndex => prevIndex + 1); // Move to the next index
            }, 2000);



            // Cleanup function to clear the timeout when the component unmounts
            return () => clearTimeout(timer);
        }

    }, [val, currentIndex]); // Include val and currentIndex in the dependency array to ensure useEffect runs when they change

    return (
        <>
            <div >

            <div style={{ marginTop: "40px" }}>
                        <p>
                          Quetion no1:  const Array = [1, 8, 9, 6, 3, 7, 5],
                            multyply to 5
                            and print after 2 sec.
                        </p>
                    </div>
                <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    {
                        finalArray.map((value, i) => (
                            <h2 key={i}>{value} X 5 =</h2>
                        ))
                    }
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    {val.map((result, index) => (
                        <h2 key={index}>{result}</h2>
                    ))}
                </div>
            </div>
            <div>
                <Link to="/two" ><button>view second answer</button></Link>
            </div>
                </div>
              
        </>
    );
};

export default Firstarray;
