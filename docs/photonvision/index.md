---
sidebar_position: 2
---

# Installation

1. The required Debian package repositories must first be configured. Open `/etc/apt/sources.list` in a text editor:
```
sudo nano /etc/apt/sources.list
```
2. Add the following lines to the file:
```
deb http://deb.debian.org/debian/ bookworm main contrib non-free
deb-src http://deb.debian.org/debian/ bookworm main contrib non-free
deb http://security.debian.org/debian-security bookworm-security main contrib non-free
deb-src http://security.debian.org/debian-security bookworm-security main contrib non-free
deb http://deb.debian.org/debian/ bookworm-updates main contrib non-free
deb-src http://deb.debian.org/debian/ bookworm-updates main contrib non-free
```
3. After saving and closing the file, update `apt`'s package list:
```
sudo apt update
```

4. Install pacakges that are a little different than the classic install script
```
 sudo apt install libsqlite3-0:arm64=3.40.1-2+deb12u1
```

5. Finally, follow PhotonVision's instructions for setup on Debian, which can be found at https://docs.photonvision.org/en/latest/docs/advanced-installation/sw_install/other-coprocessors.html#installing-photonvision.
