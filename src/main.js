import { renderBookCard } from './components/BookCard.js';
import './styles/main.css';

// Initialize the app
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
