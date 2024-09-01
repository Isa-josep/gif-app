import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inpuValue, setInpuValue] = useState('')

    const onInputChange=(e)=>{
        setInpuValue(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(inpuValue==='') return;
        onNewCategory(inpuValue.trim());
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
