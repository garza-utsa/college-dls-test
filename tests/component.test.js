load("init.js");
load("components/component.js");

testOnAllDevices("Component page", "/", function (driver, device) {
    console.log(driver);
    new Component(driver).waitForIt();
    checkLayout(driver, "specs/components/component.gspec", device.tags);
});
