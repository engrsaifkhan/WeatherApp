let viewport = document.querySelector(‘meta[name=viewport]’);
 viewport.setAttribute(‘content’, ‘width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0’);

 document.documentElement.style.setProperty(‘overflow’, ‘auto’);
  const metaViewport = document.querySelector(‘meta[name=viewport]’);
  metaViewport.setAttribute(‘content’, ‘height=’ + initialHeight + ‘px, width=device-width, initial-scale=1.0’)

    if(window.innerHeight < initialHeight){
document.documentElement.style.setProperty(‘overflow’, ‘auto’)
viewport.setAttribute(‘content’, ‘height=’ + Security.initialHeight + ‘px, width=device-width, initial-scale=1.0’)
}
else if(window.innerHeight === initialHeight){

  document.documentElement.style.setProperty(‘overflow’, ‘hidden’)
viewport.setAttribute(‘content’, ‘width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0’)
}
