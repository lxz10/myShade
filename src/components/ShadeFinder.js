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
     
    )
  }
}

export default ShadeFinder