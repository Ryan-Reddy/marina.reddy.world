import { renderBookCard } from './components/BookCard.js';
import './components/Modal.js';
import './styles/main.css';

// Initialize the app - Auto-deployed to heart.reddy.world 💙
const app = document.getElementById('app');
if (app) {
    app.innerHTML = renderBookCard();
}

// Toggle description expansion
window.toggleDescription = function() {
    const description = document.getElementById('description');
    const btn = document.getElementById('readMoreBtn');
    
    if (description.classList.contains('collapsed')) {
        description.classList.remove('collapsed');
        btn.textContent = 'Read less';
    } else {
        description.classList.add('collapsed');
        btn.textContent = 'Read more';
    }
}

// Handle contact form submission
window.handleContactSubmit = async function(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Create mailto link as fallback
    const subject = encodeURIComponent(`Message from ${data.name}`);
    const body = encodeURIComponent(`From: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:marinaearthheartcollective@proton.me?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // Reset after 3 seconds
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        document.getElementById('formSuccess').style.display = 'none';
        closeContact();
    }, 3000);
}
