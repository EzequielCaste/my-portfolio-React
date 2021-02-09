import React from 'react'
import javascript from '../assets/javascript.png'
import fecIcon from '../assets/FEC_icon.png'
import devChallenges from '../assets/devchallenges.jpg'

export const Experience = () => {
  return (
    <div className="experiences_2 card">
          <div className="title">Experiences</div>
          <div className="content">
            <div className="job">
              <div className="logo"><img src={javascript} alt="" /></div>
              <div className="job_description">
                <div className="date">April - September 2020</div>
                <div className="position">Spanish Repo Maintainer</div>
                <div className="summary">
                  Article translation, maintenance and review of articles.
                  Coordinating with the team of translator through Discord.
                </div>
              </div>
            </div>
            <div className="job">
              <div className="logo"><img src={fecIcon} alt="" /></div>
              <div className="job_description">
                <div className="date">Dec 2020 - January 2021</div>
                <div className="position">Frontend Cafe Group Project</div>
                <div className="summary">
                  Frontend Cafe is an online developer community with 6000+
                  members. Several groups were formed and each group built a
                  project in 3 weeks. My team built a <a href="https://cmyk-tiger.netlify.app/">Movie Recommendation App</a>.
                </div>
              </div>
            </div>
            <div className="job">
              <div className="logo"><img src={devChallenges} alt=""/></div>
              <div className="job_description">
                <div className="date">Feb 2021 - Current</div>
                <div className="position">Responsive Web Developer Path</div>
                <div className="summary">
                The only way to become a web developer is to start building websites with real-life practices. If you want to be a better developer, practice your development skills or learn to work with other developers.
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
