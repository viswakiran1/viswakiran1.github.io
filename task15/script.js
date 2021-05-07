const counters=document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
 })
////.....jquery..../////
// $(".counter").each(counter => {
// $(".counter").text("0")
// const updateCounter = () =>{
//     const target = Number($(".counter").attr("data-target"))
//     const c = Number($("counter").text())
//     console.log(c)
//     const increment= target / 200
//     if(c<target){
//         $(".counter").text(`${Math.ceil((c+increment))}`)
//         setTimeout(updateCounter,1)
//     }else{
//         $(".counter").text(target)
//     }
// }
// updateCounter()
// })