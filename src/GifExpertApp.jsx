import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Resident Evil", "Silent Hill", "Dead Space"]);
  const onAddCategory=(newCategoty)=>{
    console.log(newCategoty);
    if(categories.includes(newCategoty) )return;
    setCategories([newCategoty, ...categories]);

  }
  return (
    <>
      <h1>Gif expert app</h1>
      <AddCategory
        onNewCategory={event => onAddCategory(event) }
      />


        {
        categories.map((category) => {
          return (
              <GifGrid 
              key={category} 
              category={category}
              />
            )
          })
        }
    </>
  )
}
