const canvas2 = document.getElementById('canvas2');
const ctx = canvas2.getContext('2d');

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
ctx.font = "2rem 'Press Start 2P'";

class Particle {
    constructor(effect, index) {
        this.effect = effect;
        this.radius = 5;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 4 - 2;
        this.index = index;
        this.myarray = ['<html>', '<html/>', '?', '<body>', '?', '<body/>', '<b>', '<span>', '?', '<span/>', '?', '<br/>', '<hr/>', '<a>', '?', '<a/>', '<img>', '<div>', '<div/>', '<section>', '<section>', 'NaN', '?', 'undefined', 'infinity', '<', '>', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?'];

    }
    draw(context) {
        context.beginPath();
        context.fillStyle = 'hsl(' + Math.random() * 360 + ',50%,50%)';
        context.fillText(this.myarray[this.index], this.x, this.y);
    }
    update() {
        this.x += this.vx;
        if (this.x > this.effect.width - this.radius || this.x < this.radius) {
            this.vx *= -1;
        }
        this.y += this.vy;
        if (this.y > this.effect.height - this.radius || this.y < this.radius) this.vy *= -1;

    }
}
class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 45;
        this.createParticles();
    }
    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this, i));
        }
    }
    handleParticles(context) {
        this.particles.forEach((particle) => {
            particle.draw(context);
            particle.update();
        });
    }
}
const effect = new Effect(canvas2);
function animate() {
    ctx.clearRect(0, 0, canvas2.width, canvas2.height)
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();