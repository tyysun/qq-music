(function(){
  let slider = new Slider({
    el: document.querySelector('#slider'),
    slides: [
      { link:'#1', image: 'images/lunbo1.png'},
      { link:'#2', image: 'images/lunbo2.png'},
      { link:'#3', image: 'images/lunbo3.png'},
      { link:'#4', image: 'images/lunbo4.png'},
      { link:'#5', image: 'images/lunbo5.png'}
    ]
  })
  window.slider = slider
})()