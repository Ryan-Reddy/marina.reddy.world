import { renderBookCard } from './components/BookCard.js';
import './styles/main.css';

// Initialize the app
const app = document.getElementById('app');
if (app) {
    app.innerHTML = renderBookCard();
}
