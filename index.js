var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
tl.from('.rectangle1', 1, {x:-200, opacity: 0, ease: Power1.easeInOut}, "=-5")
.from('.rectangle2', 1, {x: 200, opacity: 0, ease: Power1.easeInOut}, "=-5")
.from('#education', 1, {x: -200, opacity: 0, ease: Power1.easeInOut}, "=+1")
.from('#writing', 1, {y: 200, opacity: 0, ease: Power1.easeInOut}, "=+1")
.from('#writingabtedu', 1, {x:200, opacity: 0, ease: Power1.easeInOut}, "=+1");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "140%"
})
// .addIndicators({
//     name: "Animation",
//     colorTrigger: "black",
//     colorStart: "black",
//     colorEnd: "black"
//   })
  .setPin(".sticky")
  .setTween(tl)
  
	.addTo(controller);


function updatePercentage() {
  percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
 // console.log(tl.progress());
}