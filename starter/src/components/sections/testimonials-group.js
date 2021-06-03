import React from "react"
import classNames from "classnames"
import { useState } from "react"
import Image from "../image"
import CustomLink from "../elements/custom-link"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"; 

// import Img from "gatsby-plugin-image"


const TestimonialsGroup = () => {
  const data = useStaticQuery(graphql`{
    allStrapiPosts {
      nodes {
        id
        title
        body
        author
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`)
  console.log(data.allStrapiPosts.nodes);

  const setdata = data.allStrapiPosts.nodes;
  return (
    <div>
      
      <h2>Responsive Testimonials</h2>
      <p>Resize the browser window to see the effect.</p>
      <ul style={{ textAlign: "center", alignContent: "center" }}>
        {setdata.map(mydata => {
          return (
            <li key={mydata.id}>

              <div class="container" style={{
                border: "2px solid #ccc;",
                backgroundColor: "#eee", borderRadius: "5px", padding: "16px", margin: "16px 0px", display: "flex",
                alignItems: "center"}}>
                <div style={{ float: "left", marginRight: "20px", borderRadius: "50%" ,width:90}}> <Img fluid={mydata.image.localFile.childImageSharp.fluid} alt="load image" /></div>
                <p><span>{mydata.title}</span> {mydata.author}</p>
                <p> {mydata.body}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default TestimonialsGroup


