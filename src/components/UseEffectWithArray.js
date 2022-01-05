import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function UseEffectWithArray() {

    const [books, setbooks] = useState([])

    useEffect(()=>{
        if(books.length>0){
            console.log("useEffect [books] executed");
        }
    },[books])

    let addBook=()=>{
        let booksCopy = [...books]
        booksCopy.push("Physics")
        setbooks(booksCopy)
    }
    return (
        <div>
            <button onClick={addBook}>Add book</button>
            {
                books.map((val,idx)=>{
                    return <p key={val+idx}>{val} at index {idx}</p>
                })
            }
        </div>
    )
}

export default UseEffectWithArray
