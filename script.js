const rating = [...document.querySelectorAll('.circles')]
const btn_submit = document.getElementById('btn_submit')
const rating_box = document.getElementById('rating-box')
const rating_range = document.getElementById('ratings-range')
const icon = document.getElementById('icon-container')
const title = document.getElementById('title')
const text = document.getElementById('txt')

rating.map((element)=>{
    element.addEventListener('click',(evt)=>{
        removeSelected()
        evt.target.classList.toggle('selected')
    })
})


removeSelected=()=>{
    const selected = [...document.querySelectorAll('.selected')]
    selected.map((el)=>{
        el.classList.remove('selected')
        
    })
}

// rating.map((el)=>{
//     if(el.classList.contains('selected')){
//         return el.innerHTML
//     }
// })

removeAll=()=>{ 
    icon.remove()
    title.remove()
    text.remove()
    rating_range.remove()
    btn_submit.remove()
}

btn_submit.addEventListener('click', ()=>{
    const yourRating=document.querySelector('.selected').innerHTML
    removeAll()
    
    //Adding thank you image
    const div = document.createElement('div')
    div.setAttribute('id','thank-you-img')
    const img = document.createElement('img')
    img.src = 'images/illustration-thank-you.svg'
    div.appendChild(img)
    rating_box.appendChild(div)

    //Adding rating results
    const results = document.createElement('p')
    results.setAttribute('id','rating_txt')
    results.innerHTML = `You selected ${yourRating} out of 5`
    rating_box.appendChild(results)

    //Adding message
    const messageTitle = document.createElement('h3')
    messageTitle.innerHTML = "Thank you!"
    messageTitle.setAttribute('id','title')
    messageTitle.setAttribute('class','res-title')
    rating_box.appendChild(messageTitle)

    const message_p = document.createElement('p')
    message_p.setAttribute('id','txt')
    message_p.setAttribute('class','res-p')
    message_p.innerHTML = "We appreciate you taking the time to give a rating.</br> if you ever need more support, don't hesitate to</br> get in touch"
    rating_box.appendChild(message_p)




   


})

