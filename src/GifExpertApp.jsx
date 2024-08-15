import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Resident Evil", "Silent Hill", "Dead Space"]);
  const onAddCategory=()=>{
    // console.log("Gears of War");
    setCategories([...categories, "Gears of War"]);
  }
  return (
    <>
      <h1>Gif expert app</h1>
      <input type="text" placeholder="Ingrese Una Categoria" />
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
