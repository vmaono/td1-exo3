let nb = 0
input.onButtonPressed(Button.A, function () {
    nb = 1
    while (nb < 10) {
        nb += 1
        basic.showNumber(nb)
    }
})
basic.forever(function () {
	
})
