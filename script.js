<document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress) {
            const fill = bar.querySelector('.progress-bar');
            if (fill) {
                fill.style.width = progress + '%';
            }
        }
    });
});
