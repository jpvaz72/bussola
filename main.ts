input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Butterfly)
})
basic.forever(function () {
    led.enable(true)
    if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.North)
        basic.showString("Norte")
    }
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.East)
        basic.showString("Este")
    }
    if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.West)
        basic.showString("Oeste")
    }
    if (input.compassHeading() == 270) {
        basic.showArrow(ArrowNames.South)
        basic.showString("Sul")
    }
    led.enable(false)
})
