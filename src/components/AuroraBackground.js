export function renderAuroraBackground(variant = 'warm') {
    const colors = {
        warm: {
            base: `linear-gradient(
                to bottom,
                #F0F8FF 0%,
                #E5F3FF 15%,
                #D5EBFF 30%,
                #C5E5FF 50%,
                #B8DEFF 70%,
                #A8D5F0 85%,
                #9BC9E5 100%
            )`,
            aurora1: `
                radial-gradient(ellipse at 20% 30%, rgba(255, 220, 150, 0.85) 0%, rgba(255, 240, 200, 0.5) 30%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(150, 200, 255, 0.7) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 70%, rgba(180, 220, 255, 0.6) 0%, transparent 45%)
            `,
            aurora2: `
                radial-gradient(ellipse at 60% 40%, rgba(200, 230, 255, 0.65) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 80%, rgba(160, 210, 255, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 60%, rgba(255, 235, 180, 0.75) 0%, rgba(255, 250, 220, 0.4) 35%, transparent 50%)
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
