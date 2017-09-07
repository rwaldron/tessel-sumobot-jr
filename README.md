# Tessel 2 Sumobot Jr.

Adapted from https://github.com/makenai/sumobot-jr

## Requirements

The host computer running the `controller.js` program and the Tessel 2 running the `sumobot.jr` program **must** be able to connect via LAN—either by connecting to the same [Wifi network](https://tessel.gitbooks.io/t2-docs/content/API/CLI.html#using-wifi) (which **must** support **mdns**) or by [configuring the Tessel 2 to provide an access point of its own](https://tessel.gitbooks.io/t2-docs/content/API/CLI.html#create-an-access-point). 

## Getting Started

```
git clone https://github.com/rwaldron/tessel-sumobot-jr.git
cd tessel-sumobot-jr
npm install 
```


## Edit Configuration

Open the `config.yml` file and edit the `host` and `port` keys as needed. 


## Deployment

With a Tessel 2 connected via USB or LAN (Access Point supported), deploy the `sumobot.js` program to the Tessel 2: 

```
# For development and testing:
t2 run sumobot.js

# To set active program:
t2 push sumobot.js 
```

From a new terminal window, run the local `controller.js` program: 

```
node controller.js
```

## Usage

Once the `sumobot.js` program is deployed to the Tessel 2 and the `controller.js` program is running locally, use the following keys to control the Sumobot Jr. via the `controller.js` terminal window: 

| Keyboard Key | Description |
| ------------ | ----------- |
| `q` | Quit program |
| `space` | Stop |
| ⬆️ | Drive forward |
| ⬇️ | Drive backward |
| ➡️ | Turn Right |
| ⬅️ | Turn Left |

## Build

Here is a wiring diagram:

![Wiring Diagram for Tessel Sumobot](https://raw.githubusercontent.com/KatieK2/tessel-sumobot-jr/master/wiring-diagram.png)

Here is a close-up:

![Close-up of constructed Tessel Sumobot](https://raw.githubusercontent.com/KatieK2/tessel-sumobot-jr/master/hacky-close-up.jpg)

