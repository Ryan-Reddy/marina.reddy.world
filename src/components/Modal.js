import { renderAuroraBackground } from './AuroraBackground.js';

export function renderModal(id, auroraVariant = 'cool', contentHtml, showCloseButton = true) {
    return `
        <div class="modal-overlay" id="${id}">
            ${renderAuroraBackground(auroraVariant)}
            <div class="modal-container">
                ${showCloseButton ? `<button class="modal-close-btn" onclick="closeModal('${id}')" aria-label="Close">&times;</button>` : ''}
                <div class="modal-inner">
                    ${contentHtml}
                </div>
            </div>
        </div>
    `;
}

export function renderMenuModal(id, menuItems) {
    const menuHtml = `
        <nav class="menu-nav">
            ${menuItems.map(item => `
                <button class="menu-item" onclick="${item.onClick}">${item.label}</button>
            `).join('')}
        </nav>
    `;
    return renderModal(id, 'cool', menuHtml, true);
}

export function renderContentModal(id, title, contentHtml) {
    const content = `
        <div class="content-modal-wrapper">
            <h2 class="modal-title">${title}</h2>
            <div class="modal-content-text">
                ${contentHtml}
            </div>
        </div>
    `;
    return renderModal(id, 'cool', content, true);
}

// Global modal controls
window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.switchModal = function(fromModalId, toModalId) {
    const fromModal = document.getElementById(fromModalId);
    const toModal = document.getElementById(toModalId);
    
    if (fromModal) {
        fromModal.classList.add('transitioning-out');
        setTimeout(() => {
            fromModal.classList.remove('active', 'transitioning-out');
        }, 300);
    }
    
    if (toModal) {
        setTimeout(() => {
            toModal.classList.add('active');
        }, 200);
    }
}
