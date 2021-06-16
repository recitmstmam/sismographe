radio.setGroup(1)
let Vibrations = input.acceleration(Dimension.Strength) - 1023
basic.forever(function () {
    led.plotBarGraph(
    Vibrations,
    0
    )
    radio.sendValue("Vibrations", Vibrations)
})
