const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


// $(document).ready(function(){
//     $(".faq-toggle").each( function toggle(){
//         $("toggle").click(function (){
//             $("toggle").parentNode.classList.toggle('active')
//         })
//     })
// })