input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        game.addScore(1)
        for (let x = 0; x <= 3; x++) {
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            basic.pause(200)
        }
        for (let x = 0; x <= 3; x++) {
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(1, 2)
            led.plot(3, 1)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 2)
            led.plot(3, 3)
            basic.pause(200)
            led.unplot(1, 1)
            led.unplot(2, 1)
            led.unplot(1, 2)
            led.unplot(3, 1)
            led.unplot(1, 3)
            led.unplot(2, 3)
            led.unplot(3, 2)
            led.unplot(3, 3)
            basic.pause(200)
        }
        for (let x = 0; x <= 3; x++) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(0, 1)
            led.plot(2, 0)
            led.plot(0, 2)
            led.plot(3, 0)
            led.plot(0, 3)
            led.plot(4, 0)
            led.plot(0, 4)
            led.plot(4, 1)
            led.plot(1, 4)
            led.plot(4, 2)
            led.plot(2, 4)
            led.plot(4, 3)
            led.plot(3, 4)
            led.plot(4, 4)
            basic.pause(200)
            led.unplot(0, 0)
            led.unplot(1, 0)
            led.unplot(0, 1)
            led.unplot(2, 0)
            led.unplot(0, 2)
            led.unplot(3, 0)
            led.unplot(0, 3)
            led.unplot(4, 0)
            led.unplot(0, 4)
            led.unplot(4, 1)
            led.unplot(1, 4)
            led.unplot(4, 2)
            led.unplot(2, 4)
            led.unplot(4, 3)
            led.unplot(3, 4)
            led.unplot(4, 4)
            basic.pause(200)
        }
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        game.addScore(1)
        for (let x = 0; x <= 3; x++) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(0, 1)
            led.plot(2, 0)
            led.plot(0, 2)
            led.plot(3, 0)
            led.plot(0, 3)
            led.plot(4, 0)
            led.plot(0, 4)
            led.plot(4, 1)
            led.plot(1, 4)
            led.plot(4, 2)
            led.plot(2, 4)
            led.plot(4, 3)
            led.plot(3, 4)
            led.plot(4, 4)
            basic.pause(200)
            led.unplot(0, 0)
            led.unplot(1, 0)
            led.unplot(0, 1)
            led.unplot(2, 0)
            led.unplot(0, 2)
            led.unplot(3, 0)
            led.unplot(0, 3)
            led.unplot(4, 0)
            led.unplot(0, 4)
            led.unplot(4, 1)
            led.unplot(1, 4)
            led.unplot(4, 2)
            led.unplot(2, 4)
            led.unplot(4, 3)
            led.unplot(3, 4)
            led.unplot(4, 4)
            basic.pause(200)
        }
        for (let x = 0; x <= 3; x++) {
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(1, 2)
            led.plot(3, 1)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 2)
            led.plot(3, 3)
            basic.pause(200)
            led.unplot(1, 1)
            led.unplot(2, 1)
            led.unplot(1, 2)
            led.unplot(3, 1)
            led.unplot(1, 3)
            led.unplot(2, 3)
            led.unplot(3, 2)
            led.unplot(3, 3)
            basic.pause(200)
        }
        for (let x = 0; x <= 3; x++) {
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            basic.pause(200)
        }
        game.addScore(1)
    }
})
basic.showIcon(IconNames.Heart)
basic.clearScreen()
