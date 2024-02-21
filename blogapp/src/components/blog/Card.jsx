import React,{useState} from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai"
import { Link } from "react-router-dom"


export const Card = () => {
  const [search,setSearch]= useState("")
  console.log(blog)

  return (
    <>

   
<section className="image-generator">
    <div className="content">
      <h1>Search Blog Post By Title & Filter</h1>
      <form action="#" className="generate-form">
        <input className="prompt-input" type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" />
        <div className="controls">
          
       
        <div className="generate-btn">
        {blog.map((d)=>
          {
          <h1 key={d.id}> {d.category}</h1>    
        })}
        </div>
            
        
         
        </div>
       
    <script src="script.js" defer></script>
    <script src="https://unpkg.com/phosphor-icons"></script>
      </form>
    </div>
  </section>


      <section className='blog'>
        <div className='container grid3'>
          {blog.filter((item)=>{
            return search.toLowerCase()=== "" ? item : item.title.toLowerCase().includes(search)
          })
          
         .map((item) => (
             <Link to={`/details/${item.id}`} className='link'>
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.category}
                </div>
               
                  <h3>{item.title}</h3>
               
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                </div>
              </div>
            </div>
             </Link>
          ))}
        </div>
      </section>
    </>
  )
}
