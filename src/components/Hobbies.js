import React from 'react'
import cooking from '../assets/cooking.jpg'
import gaming from '../assets/gaming.jpg'
import gardening from '../assets/gardening.jpg'


export const Hobbies = () => {
  return (
    <div className="hobbies_2 card">
          <div className="title">Hobbies</div>
          <div className="content">
            <div className="hobby">
              <div className="image">
                <img src={cooking} alt="" />
              </div>
              <div className="title">Cooking</div>
              <div className="description">
                I enjoy cooking and baking bread. I also make some fine
                Neapolitan pizza.
              </div>
            </div>
            <div className="hobby">
              <div className="image">
                <img src={gaming} alt="" />
              </div>
              <div className="title">Gaming</div>
              <div className="description">
                Video games have always been a part of my weekends, from Super
                Mario Bros to The Witcher 3.
              </div>
            </div>
            <div className="hobby">
              <div className="image"><img src={gardening} alt="" /></div>
              <div className="title">Growning my own Vegetables</div>
              <div className="description">
                I love growing my own vegetables in my garden. I plant tomatoes,
                basil, celery and butternut squash.
              </div>
            </div>
          </div>
        </div>
  )
}
