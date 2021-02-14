/**
 * TAREA
Link: https://www.figma.com/file/NnxNSgAtB4YZiNLrGGbH4l/Untitled?node-id=0%3A1
- Después de ver el mockup la idea es:
     - Con el scroll que aparezcan varios kilómetros de llegada (ejem. 500px = 'META 500')
     - Que el coche le aparezcan diferentes metas
     - El coche también tiene que poder controlarse con los cursores
 */

//const coche = document.getElementById("coche")
//const boxes = document.querySelectorAll('.box')

/*boxes.forEach(box => {

        box.addEventListener('dragover', e => {
            console.log("dragOver")
            e.preventDefault()
        })
        box.addEventListener('dragenter', e => {
            console.log("dragEnter")
            e.preventDefault()
        })
        box.addEventListener('dragleave', e => {
            console.log("dragleave")
            e.preventDefault()
        })
        box.addEventListener('drop', e => {
            console.log("Drop")
            e.preventDefault()
            var image = e.dataTransfer.getData("image")
            e.target.appendChild(image)
            document.getElementById("coche").style = "width:100%;"
        })
    })*/

/*
coche.addEventListener('dragstart', e => {
    console.log("dragStart")
    e.dataTransfer.setData("coche", e.target.id)
    setTimeout(() => {
            e.target.classList.add('hide')
        }, 0)*/
//e.dataTransfer.setDragImage(coche, 10, 10)
/*}) */


// control de cursores

let x = 0,
    y = 0
const cocheItem = document.getElementById('coche'),
    up = () => cocheItem.style.transform = `translate(${x}%, ${y -= 10}%)`
down = () => cocheItem.style.transform = `translate(${x}%, ${y += 10}%)`
right = () => cocheItem.style.transform = `translate(${x += 10}%, ${y}%)`
left = () => cocheItem.style.transform = `translate(${x -= 10}%, ${y}%)`


// mover coche
document.addEventListener('keyup', evento => {
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowRight':
            right()
            break
        case 'ArrowLeft':
            left()
            break
    }
})

//SCROLL

window.addEventListener('scroll', () => {
    // console.log(scrollX, Math.round(scrollY))
    switch (Math.round(scrollY)) {

        case 200:
            const meta3 = document.createElement('h1')
            meta3.style.fontSize = '5rem'
            meta3.style.position = 'absolute'
            meta3.style.left = '0px'
            meta3.textContent = 'META 500'
            meta3.style.top = '500px'
            document.body.appendChild(meta3)
            break
        case 350:
            const meta4 = document.createElement('h1')
            meta4.style.fontSize = '5rem'
            meta4.style.position = 'absolute'
            meta4.style.left = '0px'
            meta4.textContent = 'META 1000'
            meta4.style.top = '1000px'
            document.body.appendChild(meta4)
            break
        case 500:
            const metafinal = document.createElement('h1')
            metafinal.style.fontSize = '5rem'
            metafinal.style.position = 'absolute'
            metafinal.style.left = '0px'
            metafinal.textContent = 'META FINAL 2000'
            metafinal.style.top = '2000px'
            document.body.appendChild(metafinal)
            break
    }

})