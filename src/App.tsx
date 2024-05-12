import React, {useEffect, useState} from 'react';
import './App.css';
import useToggle from "./hooks/useToggle/useToggle";
import usePrevious from "./hooks/usePrevious/usePrevious";
import useStorage from "./hooks/useStorage/useStorage";

const App = () => {
    // const [isToggled, toggle] = useToggle(false)
    // return (
    //     <div>
    //         <button onClick={toggle}> Toggle</button>
    //         <p>{isToggled ? 'Toggle true' : 'Toggle false'}</p>
    //     </div>
    // );

    // const [count, setCount] = useState(0);
    // const prevCount = usePrevious(count);
    //
    // useEffect(() => {
    //     console.log('Current count:', count);
    //     console.log('Previous count:', prevCount);
    // }, [count, prevCount]);
    //
    // return (
    //     <div>
    //         <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    //         <p>Current count: {count}</p>
    //         <p>Previous count: {prevCount !== undefined ? prevCount : 'N/A'}</p>
    //     </div>
    // );

    // const [name, setName] = useStorage<any>('name',localStorage,'bla');
    //
    // return (
    //     <div>
    //         <input
    //             type="text"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //         <p>Name: {name}</p>
    //     </div>
    // );
};

export default App;