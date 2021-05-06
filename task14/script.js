const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
///....jquery.....////
// $(document).ready(function(){
//     $("#toggle").click(()=>{
//         $("#nav").toggleclass("active")
//     });
// });