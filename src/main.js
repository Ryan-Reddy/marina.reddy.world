import './styles/main.css';
import { renderBookCard } from './components/BookCard.js';

// Initialize the app
const app = document.getElementById('app');
if (app) {
    app.innerHTML = renderBookCard();
}
