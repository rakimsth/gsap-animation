const tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('.rectangle1', 1, {x:-200, opacity: 0, ease: Power1.easeInOut}, "rectangleA")
.from('.eduText', 1, {x: -200, opacity: 0, ease: Power1.easeInOut}, "rectangleA+=1.0")
.from('.eduTextDesc', 2, {x: -200, opacity: 0, ease: Power1.easeInOut}, "rectangleA+=1.0")
.from('#education', 1, {x: -200, opacity: 0, ease: Power1.easeInOut}, "rectangleA+=1.0")
.from('.rectangle2', 1, {x: 200, opacity: 0, ease: Power1.easeInOut}, "rectangleB")
.from('.writingText', 1, {x: 200, opacity: 0, ease: Power1.easeInOut}, "rectangleB+=1.0")
.from('.writingTextDesc', 2, {x: 200, opacity: 0, ease: Power1.easeInOut}, "rectangleB+=1.0")
.from('#writing', 1, {x: 200, opacity: 0, ease: Power1.easeInOut}, "rectangleB+=1.0")
.from('#writingabtedu', 1, {y:200, opacity: 0, ease: Power1.easeInOut}, "writingAbtAnimation")
.from('.writingAbtText', 1, {y:200, opacity: 0, ease: Power1.easeInOut}, "writingAbtAnimation+=1.0")
.from('.writingAbtTextDesc', 2, {y:200, opacity: 0, ease: Power1.easeInOut}, "writingAbtAnimation+=1.0")
.from('#education', 1, {x: -200, opacity: 1, ease: Power1.easeInOut}, "animationOut")
.from('#writing', 1, {x: 200, opacity: 1, ease: Power1.easeInOut}, "animationWritingOut")
.from('#writingabtedu', 1, {y:200, opacity: 1, ease: Power1.easeInOut}, "animationAbtOut")
.from('.eduTextDesc', 1, {x: -200, opacity: 1, ease: Power1.easeInOut}, "animationOut")
.from('.writingTextDesc', 1, {x: 200, opacity: 1, ease: Power1.easeInOut}, "animationWritingOut")
.from('.writingAbtTextDesc', 1, {y:200, opacity: 1, ease: Power1.easeInOut}, "animationAbtOut")
.to(".writingText", 1, {x: 80, y: 110}, "beta")
.to(".writingAbtText", 1, { y: 50}, "gamma");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "140%"
})
.addIndicators({
    name: "Animation",
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black"
  })
  .setPin(".sticky")
  .setTween(tl)
	.addTo(controller);


function updatePercentage() {
  tl.progress();
}