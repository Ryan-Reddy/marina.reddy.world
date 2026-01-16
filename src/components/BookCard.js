import { renderAuroraBackground } from './AuroraBackground.js';
import { renderContentModal, renderMenuModal } from './Modal.js';

export function renderBookCard() {
    const menuItems = [
        { label: 'About', onClick: "switchModal('menuOverlay', 'aboutModal')" },
        { label: 'Contact', onClick: "switchModal('menuOverlay', 'contactModal')" }
    ];
    
    const aboutContent = `
        <p>Marina Avram is a writer, researcher, and facilitator exploring the intersections of embodied practice, nervous system regulation, and ancestral wisdom.</p>
        <p>Her work invites a return to coherence—not as an escape from complexity, but as a grounded way of moving through it.</p>
        <p>Drawing from neuroscience, somatics, and traditional healing practices, Marina offers pathways for individuals and communities to reconnect with the intelligence of the heart and body.</p>
        <p><em>Returning to the Heart</em> is her first book—a gentle invitation to remember what we already know.</p>
    `;
    
    const contactContent = `
        <form class="contact-form" id="contactForm" onsubmit="handleContactSubmit(event)">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
        <div class="form-success" id="formSuccess">
            <p>Thank you for reaching out. Your message has been received. 💙</p>
        </div>
    `;
    
    return `
        ${renderAuroraBackground('warm')}
        
        <!-- Hamburger Menu -->
        <button class="hamburger-menu" id="hamburgerMenu" onclick="openModal('menuOverlay')" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <!-- Menu -->
        ${renderMenuModal('menuOverlay', menuItems)}
        
        <!-- About Page -->
        ${renderContentModal('aboutModal', 'About Marina Avram', aboutContent)}
        
        <!-- Contact Page -->
        ${renderContentModal('contactModal', 'Get in Touch', contactContent)}
        
        <div class="container">
            <div class="book-card">
                <div class="botanical-decoration top-left"></div>
                <div class="botanical-decoration top-right"></div>
                <div class="botanical-decoration bottom-left"></div>
                <div class="botanical-decoration bottom-right"></div>
                <div class="book-image-container">
                    <img src="/book-cover.png" alt="Returning to the Heart Book Cover" class="book-cover">
                </div>
                
                <div class="book-info">
                    <h1 class="book-title">Returning to the Heart</h1>
                    <p class="book-subtitle">Living Coherence in a Fast World</p>
                    <p class="author">by Marina Avram</p>
                    
                    <div class="description collapsed" id="description">
                        <p>Returning to the Heart is a gentle, grounded invitation to remember what the body already knows.</p>
                        <p>Blending neuroscience, ancestral wisdom, and embodied daily practice, this book explores the heart not only as an emotional center, but as an organ of perception — one that listens, regulates, and connects us to the Earth and to one another.</p>
                    </div>
                    <button class="read-more-btn" id="readMoreBtn" onclick="toggleDescription()" aria-label="Read more"></button>
                    
                    <div class="tagline">Right now.</div>
                    
                    <a href="https://www.amazon.nl/-/en/Marina-Avram/dp/B0GFGWVRR7" target="_blank" class="buy-button">
                        on Amazon
                    </a>
                </div>
            </div>
        </div>
    `;
}
