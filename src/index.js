
window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('coffee-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 1000;
    
    ctx.fillRect(0, 100, 1200, 1000);

    const coffeeShopBackground = new Image();
    coffeeShopBackground.src = "../dist/assets/images/cafe_background.png";
    ;

    const cashierPicture = new Image();
    cashierPicture.src = "../dist/assets/images/Alex_idle_16x16.png";
    ;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(coffeeShopBackground, 0, 100, canvas.width, canvas.height)
        ctx.drawImage(cashierPicture, 0, 0, 16, 32, 340, 340, 120, 200)
        requestAnimationFrame(animate);
    }
    animate();

});

