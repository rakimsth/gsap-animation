const tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from('.rectangle1', 1, { x: -200, opacity: 0, ease: Power1.easeInOut }, 'rectangleA')
  .from('.eduText', 1, { x: -200, opacity: 0, ease: Power1.easeInOut }, 'rectangleA+=1.0')
  .from('.eduTextDesc', 2, { x: -200, opacity: 0, ease: Power1.easeInOut }, 'rectangleA+=1.0')
  .from('.education', 1, { x: -1000, opacity: 0, ease: Power1.easeInOut }, 'rectangleA+=1.0')
  .from('.rectangle2', 1, { x: 200, opacity: 0, ease: Power1.easeInOut }, 'rectangleB')
  .from('.writingText', 1, { x: 200, opacity: 0, ease: Power1.easeInOut },'rectangleB+=1.0')
  .from('.writingTextDesc', 2, { x: 200, opacity: 0, ease: Power1.easeInOut }, 'rectangleB+=1.0')
  .from('.writings', 1, { x: 900, opacity: 0, ease: Power1.easeInOut }, 'rectangleB+=1.0')
  .from('.writingabtedu', 1, { y: 200, opacity: 0, ease: Power1.easeInOut }, 'writingAbtAnimation')
  .from('.writingAbtText', 1, { y: 200, opacity: 0, ease: Power1.easeInOut }, 'writingAbtAnimation+=1.0')
  .from('.writingAbtTextDesc', 2, { y: 800, opacity: 0, ease: Power1.easeInOut }, 'writingAbtAnimation+=1.0')
  .to('.education', 1, { x: -600, opacity: 0, ease: Power1.easeInOut }, 'animationOut')
  .to('.writings', 1, { x: 600, opacity: 0, ease: Power1.easeInOut }, 'animationWritingOut')
  .to('.writingabtedu', 1, { y: 600, opacity: 0, ease: Power1.easeInOut }, 'animationAbtOut')
  .to('.eduTextDesc', 1, { x: -600, opacity: 0, ease: Power1.easeInOut }, 'animationOut')
  .to('.writingTextDesc', 1, { x: 600, opacity: 0, ease: Power1.easeInOut }, 'animationWritingOut')
  .to('.writingAbtTextDesc', 1, { y: 600, opacity: 0, ease: Power1.easeInOut },'animationAbtOut')
  .to('.writingText', 1, { x: 140, y: 150 }, 'beta')
  .to('.writingAbtText', 1, { y: 50 }, 'gamma');

const scene = new ScrollMagic.Scene({
  triggerElement: '.sticky',
  triggerHook: 'onLeave',
  duration: '320%',
})
  // .addIndicators({
  //     name: "Animation",
  //     colorTrigger: "black",
  //     colorStart: "black",
  //     colorEnd: "black"
  //   })
  .setPin('.sticky')
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
}
