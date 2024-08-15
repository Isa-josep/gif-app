import { useState } from "react";

export const AddCategory = () => {
    const [inpuValue, setInpuValue] = useState('')

    const onInputChange=(e)=>{
        setInpuValue(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(inpuValue);
    }
  return (
      <form onSubmit={(e)=>onSubmit(e)}>
        <input 
        type="text"
            placeholder="Busacar"
            value={inpuValue}
            onChange={onInputChange}
        />
    </form>
  )
}
