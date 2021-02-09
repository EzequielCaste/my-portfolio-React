import React from 'react'
import postImg from '../assets/blog_post.jpg'

export const Blog = () => {
  return (
    <div className="blog_post_2 card">
          <div className="post_main">
            <div className="title">Blog</div>
            <div className="post_title">JavaScriptmas Solutions</div>            
            
            
            
            
          </div>
          <div className="post_image">
              <img src={postImg} alt="" />
          </div>
          <div className="text">
              <p>
                Hi! 🖐 My name is Ezequiel. I've been learning JavaScript for a
                couple of years and when I found out that Scrimba was having a
                JavaScriptmas Advent Calendar I signed up right away.
              </p>
              <p>
                Challenges are a great way to flex that coding muscle and learn
                some new methods you were not familiar with.
              </p>
              <a
              href="https://dev.to/ezequiel_caste/javascriptmas-solutions-5gc8"
              className="link"
              alt="Read Article"
              >dev.to</a
            >
            </div>
            
        </div>
  )
}
