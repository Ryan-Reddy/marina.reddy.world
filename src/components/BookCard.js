export function renderBookCard() {
    return `
        <div class="background-gradient"></div>
        
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
                    <button class="read-more-btn" id="readMoreBtn" onclick="toggleDescription()">Read more</button>
                    
                    <div class="tagline">Right now.</div>
                    
                    <a href="https://www.amazon.nl/-/en/Marina-Avram/dp/B0GFGWVRR7" target="_blank" class="buy-button">
                        Available on Amazon
                    </a>
                </div>
            </div>
        </div>
    `;
}
