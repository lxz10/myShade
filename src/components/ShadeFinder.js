import React, {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import skin_color_wheel from '../assets/images/skin_color_wheel.png'

const rgbToHex = (r, g, b) => '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')

const ShadeCircle = props => {
  
  const canvasRef = useRef(null)
  
  const draw = ctx => {
    var lineWidth = 0
    var radius = Math.round(Math.min(props.width, props.height)/2 - lineWidth)
    var centerX = Math.round(props.width/2)
    var centerY = Math.round(props.height/2)
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = props.fillColor;
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#202020';
    ctx.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

function averageShade(arr) {
  let res = new Array(4).fill(0);
  for (let i = 0; i < arr.length; ++i) {
      res[i % 4] += arr[i]
  }
  return res.map(x => Math.round(4 * x / arr.length))
}

class ShadeFinder extends React.Component {

  constructor(props) {
    super(props)
    const src = ''
    this.state = {
      preview: skin_color_wheel,
      src,
      selectedShade:'#ffffff',
      template: true
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  getImageColor(imageId) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var image = new Image()
    
    image.onload = () => {
      ctx.drawImage(image, 0, 0)
      
      var topRightX = Math.round(0.5 * image.width * (1 - Math.sqrt(0.5)))
      var topRightY = Math.round(0.5 * image.height * (1 - Math.sqrt(0.5)))

      var selectionWidth = Math.round(image.width * Math.sqrt(0.5))
      var selectionHeight = Math.round(image.height * Math.sqrt(0.5))

      var pixel = ctx.getImageData(topRightX, topRightY, selectionWidth, selectionHeight);
      var data = averageShade(pixel.data)
      var hexcode = rgbToHex(data[0], data[1], data[2])
      this.setState({selectedShade: hexcode})
    }

    image.src = imageId;
    this.template = false;
  }

  onClose() {
    this.setState({preview: skin_color_wheel, selectedShade:'#ffffff'})
  }
  
  onCrop(preview) {
    this.getImageColor(preview);
    this.setState({preview});
    this.forceUpdate();
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 10000000){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  
  render () {
    return (
        <div>
        <form encType="multipart/form-data">
            <div className="form__img-input-container">
        <label htmlFor="photo" className="form-img__file-label">
        { this.state.template ? <svg width="100" height="100" viewBox="0 0 16 18" fill="none" stroke="rgba(244,244,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg> : null}
        </label> 
        <Avatar
          height={500}
          imageHeight={500}
          minCropRadius={10}
          cropRadius={15}
          onCrop={this.onCrop}
          onClose={this.onClose}
          shadingOpacity={0.4}
          exportQuality={1}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
          label="Upload a photo"
        />  
        <img
          src={this.state.preview}
          alt="Preview"
          width="150"
          height="150"
          />
        <ShadeCircle width={150} height={150} fillColor={this.state.selectedShade}/>
      </div>
    </form>
    </div>
     
    )
  }
}

export default ShadeFinder