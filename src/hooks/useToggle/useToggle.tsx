import React, {useState} from 'react';


const useToggle = (initialState:boolean) => {
    const [state, setState]=useState<boolean>(initialState);

    const toggle=()=>{
        setState(prevState => !prevState)
    }
    return (
      [state,toggle]
    );
};

export default useToggle;