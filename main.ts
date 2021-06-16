radio.setGroup(1)
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Strength) - 1023,
    0
    )
    radio.sendValue("name", 0)
})
