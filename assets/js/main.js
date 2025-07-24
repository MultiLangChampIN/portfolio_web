/*=============== EMAIL JS ===============*/

const contactForm=document.getElementById('contact-form'),
        contactMsg=document.getElementById('contact-msg')

const sendEmail=(e)=>{
    e.preventDefault()
    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_o7102yq','template_zr5pblo','#contact-form','op-UkcDHP5gBfM__s')
    .then(()=>{
        //show sent msg
        contactMsg.textContent='Message sent successfully ✅'

        //remove message after five seconds 
        setTimeout(() => {
            contactMsg.textContent=''
            
        }, 5000)

        //clear input fields

        contactForm.reset()
    },()=>{
        //show error mesasge
        contactMsg.textContent='message not sent (service error) ❌'
    })

}

contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true,

})

sr.reveal(`.profile, .contact__form`)
sr.reveal(`.info`,{origin:'left',delay:800})
sr.reveal(`.skills`,{origin:'left',delay:1000})
sr.reveal(`.about`,{origin:'right',delay:1200})
sr.reveal(`.project__card, .services__card, .experience__card`,{interval:1000})