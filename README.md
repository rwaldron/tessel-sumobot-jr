# Tessel 2 Sumobot Jr.

## Getting Started

```
git clone https://github.com/rwaldron/tessel-sumobot-jr.git
cd tessel-sumobot-jr
npm install 
```

With a Tessel 2 connected via USB or LAN (Access Point supported), deploy the Sumobot Jr. program to the Tessel 2: 

```
# For development and testing:
t2 run deploy-to-tessel.js

# To set active program:
t2 push deploy-to-tessel.js 
```

From a new terminal window, run the local "controller" program: 

```
node local-controller.js
```


