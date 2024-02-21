import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    console.log(blogs)
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} style={{height:"50vh", objectFit:"contain"}} alt='' />
            </div>
            <div className='right'>
            
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
