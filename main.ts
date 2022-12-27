input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    strip.rotate(1)
    strip.show()
})
