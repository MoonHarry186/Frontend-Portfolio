import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'

import { AppWrap } from '../../wrapper' 

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1], 
      opacity: [0, 1], 
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0],  opacity: [0, 1]}}
        transition={{duration: 3}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cpm app__flex">
            <span>👋</span>
            <div className="" style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Harry Moon</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
          < p className='p-text'>Web Developer</p>
            <h1 className="head-text">Freelancer</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
       whileInView={{ opacity: [0, 1]}}
       transition={{duration: 5, delayChildren: 0.5}}
       className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circle'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="Circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
