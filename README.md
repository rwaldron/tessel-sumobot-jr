# Tessel 2 Sumobot Jr.

Adapted from https://github.com/makenai/sumobot-jr


## Getting Started

```
git clone https://github.com/rwaldron/tessel-sumobot-jr.git
cd tessel-sumobot-jr
npm install 
```

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


