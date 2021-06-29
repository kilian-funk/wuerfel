input.onGesture(Gesture.ScreenDown, function () {
    augen = 0
})
input.onButtonPressed(Button.A, function () {
    augen = 0
})
input.onGesture(Gesture.Shake, function () {
    augen = randint(1, 6)
})
let augen = 0
augen = 0
basic.forever(function () {
    if (augen == 0) {
        basic.clearScreen()
    } else {
        basic.showNumber(augen)
    }
})
