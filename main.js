const nav = document.querySelector('.header')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})

// if (window.location.pathname == '/veille.html') {
//     console.log("bite")
//     console.log(document.getElementsByClassName('veille')[0])
//     document.getElementsByClassName('veille')[0].classList.add('active')
// }