import React from 'react'
import './Profile.scss'
import profile from './profile_pic.png'

export const Profile = () => {
  return (
    <div className="main_info card">
        <img src={profile} alt="" />
        <div className="container">
          <div className="info">
            <div>
              <div className="name_title">
                <p className="name">Ezequiel Castellanos</p>
                <p className="title">Front-end developer</p>
              </div>
              <div className="email_phone">
                <p className="email">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:ezequiel.caste@gmail.com"
                    >ezequiel.caste@gmail.com</a
                  >
                </p>
                <p className="tel">
                  <i className="fas fa-phone-alt"></i>
                  (+54) 387 543 2979
                </p>
              </div>
            </div>
            <div className="introduction">
              <p>
                Hi, I'm Ezequiel, a self-taught front-end developer, and Spanish
                translator. I discovered programming more than 15 years ago and
                since then I have continued to study on a self-taught basis. I
                started designing my own blog and from that moment I have been
                passionate about web development.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
