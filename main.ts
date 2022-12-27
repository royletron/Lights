let X = 0
scrollbit.setAll(0)
basic.forever(function () {
    X += 1
    scrollbit.setIcon(
    IconNames.Heart,
    X % 16,
    0,
    128
    )
})
