$(document).ready(function() {
  //GreenSock animation
  let tween = TweenLite.fromTo(".company-title", 1, {scaleX:0, scaleY:0,},
  {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7)});
  //GreenSock animation
  let topNav = new TimelineLite();
  topNav.fromTo(".nav-item1", .5, {opacity:0, x:300}, {opacity:1, x:0}, "+=.5");
  topNav.fromTo(".nav-item2", .5, {opacity:0, x:300}, {opacity:1, x:0});
  topNav.fromTo(".nav-item3", .5, {opacity:0, x:300}, {opacity:1, x:0});
  //GreenSock animation
  let thumbs = new TimelineLite();
  thumbs.fromTo(".thumb-one", .5, {opacity:0, x:-300}, {opacity:1, x:0}, "+=1");
  thumbs.fromTo(".thumb-two", .5, {opacity:0, x:-300}, {opacity:1, x:0});
  thumbs.fromTo(".thumb-three", .5, {opacity:0, x:-300}, {opacity:1, x:0});
  thumbs.fromTo(".thumb-four", .5, {opacity:0, x:-300}, {opacity:1, x:0});

  //GreenSock stagger animation with repeat
  let stagg = new TimelineLite();
  stagg.staggerFrom(".thumb", 1.5, {scale:.9, ease:Elastic.easeOut, force3D:true}, .2);
  $(".thumb").on('click', function(event) {
    stagg.restart();
  })

  //GreenSock animation with ScrollMagic trigger
  //let footNav = new TimelineLite({paused:true});
  let footNav = new TimelineLite();
  footNav.fromTo(".footer-nav", .5, {opacity:0, y:-30}, {opacity:1, y:0});
  //ScrollMagic controller
  let controller = new ScrollMagic.Controller();
  //SrollMagic scene
  let scene = new ScrollMagic.Scene({triggerElement:".footer-nav", offset: -454}).setTween(footNav).addTo(controller);
  scene.addIndicators();
});
