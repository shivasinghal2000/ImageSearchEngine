import React, { Component } from 'react'

class ImageCard extends Component {
  constructor (props) {
    super(props)
    this.state = {spans: 0 }
    this.imageRef = React.createRef() // created for handling/refering image heights
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setSpans)
    console.log(this.imageRef.current.clientHeight)
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
    const height=this.imageRef.current.clientHeight
    const spans= Math.ceil(height/10)
    this.setState({spans: spans})
  }
  
  render () {
    const { id, description, urls } = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          key={id}
          src={urls.regular}
          alt={description}
        />
      </div>
    )
  }
}

export default ImageCard
