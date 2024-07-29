litecanvas()

const ball = {
    x: 0,
    y: 0,
    radius: 50,
    color: 4,
}

const shake = {
    _enabled: false,
    amplitudeX: 4,
    amplitudeY: 5,
    speed: 100,
    x: 0,
    y: 0,

    update(dt) {
        if (!this._enabled) return
        this.x = this.amplitudeX * Math.cos(ELAPSED * this.speed)
        this.y = this.amplitudeY * Math.sin(ELAPSED * this.speed)
    },

    set enabled(value) {
        this._enabled = !!value
        if (!this._enabled) {
            this.x = this.y = 0
        }
    },
}

let ELAPSED = 0

function init() {
    textalign('center')
}

function tap() {
    shake.enabled = true
}

function untap() {
    shake.enabled = false
}

function update(dt) {
    ELAPSED += dt

    ball.x = CENTERX
    ball.y = CENTERY - ball.radius

    shake.update(dt)
}

function draw() {
    cls(0)

    rectfill(30, 30, 30, 30, 5) // this don't shakes

    push()
    translate(shake.x, shake.y)
    circfill(ball.x, ball.y, ball.radius, ball.color)
    text(ball.x, ball.y + ball.radius + 40, 'TAP TO SHAKE')
    pop()
}
