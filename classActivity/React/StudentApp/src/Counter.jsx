import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const [rcount, setRcount] = useState(0);
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setRcount(rcount - 1)}>Decrease</button>
        </>
    );

}
export default Counter;