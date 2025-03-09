import { useState, useEffect } from "react"

const Flagship = () => {

    const [counter, setCounter] = useState(0)

    // useEffect(()=>{},[])

    useEffect(()=>{
        console.log('Flagship Mounted')
    },[])

    useEffect(()=>{
        console.log('counter changed!', counter)
    },[counter])

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <section className ='flagship' onClick={handleClick}>

            flagship {counter}

        </section>
    )
} 

export default Flagship