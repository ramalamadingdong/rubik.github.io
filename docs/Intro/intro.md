---
sidebar_position: 2
---

# Power


### USB-C

The USB-C port adjacent to the buttons, labelled 'PWR IN', can be used to power the RUBIK Pi with a USB-C power supply or an external battery pack.

![Rightmost USB-C port](./img/usbc.png)

### GPIO

Either of the 5V pins and any of the GND pins on the GPIO header can be used to power the board. These can be powered in the same method as [recommended by PhotonVision](https://docs.photonvision.org/en/latest/docs/quick-start/common-setups.html#power) for other Pi development boards, using a voltage regulator like one of these:

- Pololu S13V30F5 Regulator
- Redux Robotics Zinc-V Regulator


![5V and GND GPIO pins](./img/gpio.png)

### Soldered

The RUBIK Pi can also be powered by soldering directly to the leads shown in the diagram below.

:::warning
This method has not been tested with typical FRC power supplies, which may have insufficient voltage regulation.
:::

![5V and GND connections](./img/header.png)

## Flashing Debian

1. Download the Debian image from https://www.thundercomm.com/rubik-pi-3/en/docs/image/.
2. Flash the image using the OS-specific instructions found in the user manual at https://www.thundercomm.com/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.1.0/quick-start/#13-preparations. Setup with a keyboard and display is recommended.

## Next Steps

Once Debian is set up, PhotonVision can be installed using [this guide](../Photonvision/index.md).
