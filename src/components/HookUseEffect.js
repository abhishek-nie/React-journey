import React,{useState,useEffect} from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `clicked ${count}  times`
    })
    return (
        <div>
            <button onClick={() => setCount(count +1)}>clicked {count}</button>
        </div>
    )
}

export default HookUseEffect
