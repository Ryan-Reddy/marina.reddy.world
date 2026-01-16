export function renderAuroraBackground(variant = 'warm') {
    const colors = {
        warm: {
            base: `linear-gradient(
                to bottom,
                #F5F9FB 0%,
                #EEF5F8 15%,
                #E5F0F5 30%,
                #DCE9EF 50%,
                #D3E2E9 70%,
                #C8DBE3 85%,
                #FFE8C8 100%
            )`,
            aurora1: `
                radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(248, 252, 254, 0.6) 35%, transparent 60%),
                radial-gradient(ellipse at 80% 20%, rgba(230, 240, 245, 0.4) 0%, transparent 55%),
                radial-gradient(ellipse at 40% 75%, rgba(255, 235, 200, 0.2) 0%, transparent 55%)
            `,
            aurora2: `
                radial-gradient(ellipse at 60% 40%, rgba(240, 248, 252, 0.5) 0%, transparent 55%),
                radial-gradient(ellipse at 30% 90%, rgba(255, 220, 170, 0.15) 0%, rgba(255, 235, 200, 0.1) 40%, transparent 60%),
                radial-gradient(ellipse at 70% 60%, rgba(220, 235, 240, 0.3) 0%, transparent 55%)
            `
        },
        cool: {
            base: `linear-gradient(
                to bottom,
                #B5E2F5 0%,
                #A5D8ED 15%,
                #95CEE5 30%,
                #A8D8E8 50%,
                #C5E5F0 70%,
                #D5EDF5 85%,
                #E8F5FA 100%
            )`,
            aurora1: `
                radial-gradient(ellipse at 20% 30%, rgba(140, 200, 240, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(160, 210, 245, 0.55) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 70%, rgba(180, 220, 250, 0.5) 0%, transparent 45%)
            `,
            aurora2: `
                radial-gradient(ellipse at 60% 40%, rgba(150, 190, 230, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 80%, rgba(170, 215, 245, 0.45) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 60%, rgba(190, 225, 250, 0.5) 0%, transparent 50%)
            `
        }
    };

    const theme = colors[variant] || colors.warm;
    
    return `
        <div class="aurora-background aurora-${variant}">
            <div class="aurora-base"></div>
            <div class="aurora-layer-1"></div>
            <div class="aurora-layer-2"></div>
        </div>
    `;
}
