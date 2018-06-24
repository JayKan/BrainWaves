const noble = require("noble-uwp");
const bluetooth = require("bleat").webbluetooth;
const { MUSE_SERVICE, MuseClient, zipSamples, channelNames } = require('muse-js');

const initMuseClient = () => {
  return new MuseClient();
};

async function createStream() {
  noble.startScanning();
  // let device = await bluetooth.requestDevice({
  //   filters: [{ services: [MUSE_SERVICE] }]
  // });
  // const gatt = await device.gatt.connect();
  // const client = new MuseClient();
  // await client.connect(gatt);
  // await client.start();
  // // Now do whatever with muse client...

  // client.eegReadings.subscribe(reading => {
  //   console.log(reading);
  // });
  // client.telemetryData.subscribe(telemetry => {
  //   console.log(telemetry);
  // });
  // client.accelerometerData.subscribe(acceleration => {
  //   console.log(acceleration);
  // });
}

module.exports = { createStream };
