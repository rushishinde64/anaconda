var tl = gsap.timeline();


tl.from('.left-nav ', {
    y: -50,
    opacity:0,
    duration: .3,
    delay : -1
})
tl.from('.mid-nav a',{
    y:-50,
    opacity:0,
    duration:.3,
    delay:.1,
    stagger:0.3
})
tl.from('.signin',{
    y:-50,
    opacity:0,
    duration:.1,
    delay:.1,
    stagger:.3
})
tl.from('.contact',{
    y:-50,
    opacity:0,
    duration:.1,
    delay:.1,
    stagger:.3
})
tl.from('.center',{
    opacity:0,
    y:-50,
    duration:.5,
    delay:.1
})
tl.from('.bottom',{
    x:-50,
    duration:.2,
    delay:.2,
    opacity:0

})

tl.from('.rushi',{
    scale:0,
    opacity:0,
    duration:.3,
    scrollTrigger:{
    trigger:'.rushi',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }
})

 tl.from('.ani',{
    x:-300,
    opacity:0,
    duration:.6,
    scrollTrigger:{
    trigger:'.ani',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 })

 tl.from('.pra',{
    x:300,
    opacity:0,
    duration:.6,
    scrollTrigger:{
    trigger:'.pra',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 })

 tl.from('.asu',{
    x:-300,
    opacity:0,
    duration:.6,
    scrollTrigger:{
    trigger:'.asu',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 }) 


 tl.from('.aa',{
    x:300,
    opacity:0,
    duration:.6,
    scrollTrigger:{
    trigger:'.aa',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 }) 
 /*tl.from('.aa',{
    scale:0,
    opacity:0,
    duration:.1,
    scrollTrigger:{
    trigger:'.aa',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }
})*/

tl.from('.card',{
    x:-300,
    opacity:0,
    duration:.2,
    scrollTrigger:{
    trigger:'.card',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 })

 
 tl.from('.as',{
    scale:0,
    opacity:0,
    duration:.3,
    scrollTrigger:{
    trigger:'.as',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }
})

tl.from('.rus',{
    x:300,
    opacity:0,
    duration:.3,
    scrollTrigger:{
    trigger:'.rus',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }

 })
 tl.from('.hey',{
    scale:0,
    opacity:0,
    duration:.1,
    scrollTrigger:{
    trigger:'.hey',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }
})

tl.from('.footer',{
    scale:0,
    opacity:0,
    duration:.3,
    scrollTrigger:{
    trigger:'.footer',
    scroll:'body',
    end:"0 70%",
    scrub:2
 }
})



