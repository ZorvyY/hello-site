//const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Raleway'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

//   const font = new FontFaceObserver('Montserrat')

//   font.load().then(() => {
//     //document.documentElement.classList.add('montserrat')
//   })
}

export default Fonts