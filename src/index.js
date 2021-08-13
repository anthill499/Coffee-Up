
window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('coffee-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 1000;
    
    ctx.fillRect(0, 100, 1200, 1000);

    const coffeeShopBackground = new Image();
    coffeeShopBackground.src = "../dist/assets/images/cafe_background.png";
    ;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(coffeeShopBackground, 0, 100, canvas.width, canvas.height)
        requestAnimationFrame(animate);
    }

    animate();
});

