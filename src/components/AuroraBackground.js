export function renderAuroraBackground(variant = 'warm') {
    const colors = {
        warm: {
            base: `linear-gradient(
                to bottom,
                #E8F4F8 0%,
                #D5E8F2 15%,
                #C8E0ED 30%,
                #B8D8E8 50%,
                #A8D0E0 70%,
                #98C8D8 85%,
                #FFD4A3 100%
            )`,
            aurora1: `
                radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.7) 0%, rgba(232, 244, 248, 0.5) 35%, transparent 55%),
                radial-gradient(ellipse at 80% 20%, rgba(200, 220, 235, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 75%, rgba(255, 210, 160, 0.3) 0%, transparent 50%)
            `,
            aurora2: `
                radial-gradient(ellipse at 60% 40%, rgba(213, 232, 242, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 90%, rgba(255, 200, 130, 0.25) 0%, rgba(255, 220, 170, 0.15) 40%, transparent 55%),
                radial-gradient(ellipse at 70% 60%, rgba(180, 200, 215, 0.4) 0%, transparent 50%)
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
