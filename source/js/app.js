// JavaScript
function showNav () {
  console.log('this is working')
  var x = document.getElementById('responsive-nav')
  if (x.className === 'responsive-nav') {
    x.className += ' unfold'
  } else {
    x.className = 'responsive-nav'
  }
}

window.sr = ScrollReveal()

sr.reveal('#header img.phone-hero', {
  delay: 0,
  duration: 1500,
  origin: 'bottom',
  distance: '200px'
})

sr.reveal('#features div.car', {
  delay: 200,
  duration: 300,
  origin: 'bottom',
  distance: '100px'
})
sr.reveal('#features div.shoe', {
  delay: 400,
  duration: 300,
  origin: 'bottom',
  distance: '100px'
})

sr.reveal('#features div.phone', {
  delay: 600,
  duration: 300,
  origin: 'bottom',
  distance: '100px'
})

sr.reveal('#discount .offer', {
  delay: 600,
  duration: 300,
  origin: 'right',
  distance: '200px'
})

sr.reveal('#discount picture', {
  delay: 600,
  duration: 300,
  origin: 'left',
  distance: '200px'
})
