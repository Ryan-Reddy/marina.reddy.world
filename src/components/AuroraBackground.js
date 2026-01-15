export function renderAuroraBackground(variant = 'warm') {
    const colors = {
        warm: {
            base: `linear-gradient(
                to bottom,
                #87CEEB 0%,
                #A8D5E2 15%,
                #B8E5E8 30%,
                #C8E8D8 50%,
                #E8D4B8 70%,
                #FFD4A3 85%,
                #FFB366 100%
            )`,
            aurora1: `
                radial-gradient(ellipse at 20% 30%, rgba(255, 180, 102, 0.7) 0%, rgba(255, 212, 163, 0.5) 35%, transparent 55%),
                radial-gradient(ellipse at 80% 20%, rgba(135, 206, 235, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 75%, rgba(255, 200, 120, 0.65) 0%, transparent 50%)
            `,
            aurora2: `
                radial-gradient(ellipse at 60% 40%, rgba(168, 213, 226, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 85%, rgba(255, 165, 80, 0.7) 0%, rgba(255, 190, 120, 0.5) 40%, transparent 55%),
                radial-gradient(ellipse at 70% 60%, rgba(200, 225, 235, 0.5) 0%, transparent 50%)
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
