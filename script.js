document.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.plan');
    plans.forEach((plan, index) => {
        setTimeout(() => {
            plan.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            plan.style.opacity = '1';
            plan.style.transform = 'scale(1)';
        }, 250 * index);
    });
});
