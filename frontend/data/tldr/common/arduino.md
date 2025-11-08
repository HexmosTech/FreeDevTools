---
title: "Arduino IDE - Control Sketches & Upload Code | Online Free DevTools by Hexmos"
name: arduino
path: "/freedevtools/tldr/common/arduino/"
canonical: "https://hexmos.com/freedevtools/tldr/common/arduino/"
description: "Control Arduino IDE sketches with this command-line interface. Build, upload, and manage your Arduino projects efficiently. Free online tool, no registration required."
category: common
keywords:
- Arduino IDE control
- Arduino sketch build
- Arduino code upload
- Arduino command line
- Arduino CLI
- AVR microcontroller
- Arduino Nano
- IoT development
- Embedded programming
- Firmware upload
features:
- Build and verify Arduino sketches
- Upload code to Arduino boards
- Set and save Arduino IDE preferences
- Install Arduino boards and libraries
- Target specific boards and ports
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arduino

> Arduino Studio - Integrated Development Environment for the Arduino platform.
> More information: <https://github.com/arduino/Arduino/blob/master/build/shared/manpage.adoc>.

- Build a sketch:

`arduino --verify {{path/to/file.ino}}`

- Build and upload a sketch:

`arduino --upload {{path/to/file.ino}}`

- Build and upload a sketch to an Arduino Nano with an Atmega328p CPU, connected on port `/dev/ttyACM0`:

`arduino --board {{arduino:avr:nano:cpu=atmega328p}} --port {{/dev/ttyACM0}} --upload {{path/to/file.ino}}`

- Set the preference `name` to a given `value`:

`arduino --pref {{name}}={{value}}`

- Build a sketch, put the build results in the build directory, and reuse any previous build results in that directory:

`arduino --pref build.path={{path/to/build_directory}} --verify {{path/to/file.ino}}`

- Save any (changed) preferences to `preferences.txt`:

`arduino --save-prefs`

- Install the latest SAM board:

`arduino --install-boards "{{arduino:sam}}"`

- Install Bridge and Servo libraries:

`arduino --install-library "{{Bridge:1.0.0,Servo:1.2.0}}"`
