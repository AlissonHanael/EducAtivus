import React, { Component } from 'react'
import backgroundIMG from '../assets/heroimg.jpg'
import './HeroImg.css'

class HeroImg extends Component {
  render() {
    return (
      <div className="hero">
        <div className="h-[50vh] w-full relative after:content-[''] after:w-full after:h-full after:bg-neutral-900/[.50] after:top-0 after:left-0 after:absolute ">
          <img
            alt=""
            className="h-[50vh] w-full object-cover z-0"
            src={backgroundIMG}
          />
        </div>
        <div className="content">
          <h1 className="text-7xl pt-2.5 pr-0 pb-6 text-white">
            {this.props.heading}
          </h1>
          <p className="text-slate-50">{this.props.text}</p>
        </div>
      </div>
    )
  }
}
export default HeroImg
