const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
///
// $(document).ready(function(){
//     $(".form-control label").each(function(){
//         alert($(this).text().split(''))
    
//     });
        
    
// });
