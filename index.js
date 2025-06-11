gsap.registerPlugin(SplitText);
var tl= gsap.timeline();

tl.to('.frame1',{height: '90%',width: '90%', duration: .3, ease: 'easeOut',delay:1.5});
tl.to('.box0',{height: '100%',width: '100%', duration: .3, ease: 'easeOut',delay:.2});
tl.to('.box1',{height: '100%',width: '100%', duration: .3, ease: 'easeOut',delay:.2});
tl.to('.box2',{height: '100%',width: '100%', duration: .3, ease: 'easeOut',delay:.2});
tl.from('.image',{scaleX:0,opacity:0, duration:0.3, ease:'easeOut'})
.to('.image',{opacity:1, scaleX:1, duration:0.3, ease:'easeOut'});



var split = SplitText.create(".headline2");
var chars = split.chars;
tl.from(chars, {
    yPercent: 100,
    opacity: 0,
    stagger:0.02,
    ease: "easeOut",
    duration: 0.5
  
}, "+=0.5");
var split = SplitText.create(".headline1");
var chars = split.chars;
tl.from(chars, {
 

   opacity: 0,
   ease: "easeOut",
   duration: 1
  
}, "+=0.5")
.to(chars, {
 

   opacity: 1,
   ease: "easeOut",
   duration: 1
  
}, "+=0.5");