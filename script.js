function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

function handleFormSubmit(event){
    event.preventDefault();

    //Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //Show success message 
    alert('Thank you'+ name + '!Your message has been received. We will get back to you at' + email + 'within 24 hours.');

    //Reset form
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
}

//Simple smooth scrolling for navigation links
document.querySelectorAll('nav a [href^="#"]').forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior:'smooth'
            });
        }
    });

});