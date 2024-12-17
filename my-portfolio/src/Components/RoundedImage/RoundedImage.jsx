import React, { Component } from "react"
import ReactRoundedImage from "react-rounded-image"
import profilePic from "../Images/logo.png"


export default class App extends Component {
    render() {
      return (
        <div style={{ display: "flex" }}>
          <ReactRoundedImage image={profilePic} />
          <ReactRoundedImage
            image={profilePic}
            roundedColor="#321124"
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
          />
  
          <ReactRoundedImage
            image={profilePic}
            roundedColor="#66A5CC"
            imageWidth="120"
            imageHeight="120"
            roundedSize="8"
            borderRadius="15"
          />
  
          <ReactRoundedImage
            image={profilePic}
            roundedSize="0"
            imageWidth="110"
            imageHeight="110"
          />
        </div>
      )
    }
  }