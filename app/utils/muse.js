const noble = require("noble-uwp");
const bleat = require('bleat').webbluetooth;
const { MuseClient, MUSE_SERVICE } = require("muse-js");

const createStream = () => {
  async function connect() {
    console.log(bleat);
    console.log(MUSE_SERVICE)
    let device = await bleat.requestDevice({
      filters: [{ services: [MUSE_SERVICE] }]
    });
    console.log(device);
    const gatt = await device.gatt.connect();
    console.log('Device name:', gatt.device.name);
    const client = new MuseClient();
    await client.connect(gatt);
    await client.start();
    console.log('Connected!')
    return client
    // Now do whatever with muse client...
  }

  noble.on("stateChange", state => {
    if (state === "poweredOn") {
      console.log("powered on");
      connect();
    }
  });
};

module.exports = { createStream };
