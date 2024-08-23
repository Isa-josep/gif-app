import { useState } from "react";

export const AddCategory = ({setCategories}) => {
    const [inpuValue, setInpuValue] = useState('')

    const onInputChange=(e)=>{
        setInpuValue(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(inpuValue==='') return;
        setCategories((categories)=>[inpuValue, ...categories]);
        setInpuValue('');
    }
  return (
      <form onSubmit={onSubmit}>
        <input 
        type="text"
            placeholder="Busacar"
            value={inpuValue}
            onChange={onInputChange}
        />
    </form>
  )
}
