// Smooth scroll only for internal links (IMPORTANT FIX)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to contact button
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = this.querySelector('#name').value.trim();
    const email = this.querySelector('#email').value.trim();
    const message = this.querySelector('#message').value.trim();

    if(!name || !email || !message){
        alert("Please fill all fields");
        return;
    }

    // Inline success message
    let successMsg = document.querySelector('.success-message');
    if(!successMsg){
        successMsg = document.createElement('p');
        successMsg.className = 'success-message';
        this.appendChild(successMsg);
    }

    successMsg.textContent = "Message sent successfully! 🎉";

    setTimeout(() => {
        successMsg.textContent = "";
    }, 3000);

    this.reset();
});