function punkt_nach_rechts () {
    xpos += 1
    if (xpos > 4) {
        xpos = 0
    }
    zeigeBildschirm()
    prüfeobgleich()
    control.waitMicros(250000)
}
function punkt_nach_oben () {
    ypos += -1
    if (ypos < 0) {
        ypos = 4
    }
    zeigeBildschirm()
    prüfeobgleich()
    control.waitMicros(250000)
}
function prüfeobgleich () {
    if (ypos == ypos2 && xpos == xpos2) {
        zufallspunkt()
        zeigeBildschirm()
    }
}
function punkt_nach_links () {
    xpos += -1
    if (xpos < 0) {
        xpos = 4
    }
    zeigeBildschirm()
    prüfeobgleich()
    control.waitMicros(250000)
}
function zeigeBildschirm () {
    basic.clearScreen()
    led.plot(xpos2, ypos2)
    led.plot(xpos, ypos)
}
function zufallspunkt () {
    xpos2 = randint(0, 4)
    ypos2 = randint(0, 4)
}
function initPin () {
    pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
    pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
    pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
}
function punkt_nach_unten () {
    ypos += 1
    if (ypos > 4) {
        ypos = 0
    }
    zeigeBildschirm()
    prüfeobgleich()
    control.waitMicros(250000)
}
let xpos2 = 0
let ypos2 = 0
let ypos = 0
let xpos = 0
radio.setGroup(1)
initPin()
xpos = 0
ypos = 4
zufallspunkt()
zeigeBildschirm()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        punkt_nach_unten()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        punkt_nach_rechts()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        punkt_nach_oben()
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        punkt_nach_links()
    } else {
    	
    }
})
