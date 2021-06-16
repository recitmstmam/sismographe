let Vibrations = 0
radio.setGroup(1)
basic.forever(function () {
    Vibrations = input.acceleration(Dimension.Strength) - 1023
    radio.sendValue("Vibrations", Vibrations)
    led.plotBarGraph(
    Vibrations,
    0
    )
})
