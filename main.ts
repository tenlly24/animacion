input.onButtonPressed(Button.A, function () {
    animacion()
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
function animacion () {
	
}
basic.forever(function () {
	
})
