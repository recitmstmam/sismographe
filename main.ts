let Niveau = 0
let Vibrations = 0
radio.setGroup(1)
basic.forever(function () {
    Vibrations = input.acceleration(Dimension.Strength) - 1023
    Niveau = Vibrations * 100 / 1023
    radio.sendValue("Niveau", Niveau)
    led.plotBarGraph(
    Niveau,
    100
    )
})
