load("galen-bootstrap/galen-bootstrap.js");


var TEST_USER = {
    username: "testuser@example.com",
    password: "test123"
};

$galen.settings.website = "http://testapp.galenframework.com";
//$galen.settings.website = "http://provost.utsa.edu";

//$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "450x700", ["mobile"]));
//$galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1200x2500", ["desktop"]));



(function (export) {
    export.TEST_USER = TEST_USER;
})(this);