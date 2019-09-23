import http from "components/http/RequestBuilder";

export function saveFingerprint(e) {
    e.preventDefault();

    let WebGLFingerPrint =
        {
            $defaultVars: [],

            FindFingerPrint: function () {
                let options = {
                    excludes: {
                        availableScreenResolution: true,
                        enumerateDevices: true,
                        doNotTrack: true,
// userAgent: true,
// language: true,
// audio: true,
// fonts: true,
// webdriver: true,
// sessionStorage: true,
// localStorage: true,
// indexedDb: true,
// plugins: true,
// adBlock: true,
// fontsFlash: true,
// openDatabase: true,
// canvas: true,
// webgl: true,
// deviceMemory: true,
                    }
                };
                let fingerprint;

                let fingerPrintHandler = function (components) {
                    try {
                        let values = components.map(function (component) {
                            return component.key + ': ' + component.value
                        });
                        fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
                        sendPromise(fingerprint, values);
                        // console.log("JS1 finger print " + fingerprint);
                    }
                    catch (e) {
                        // console.log("JS2 finger error ");
                    }
                };

                if (window.requestIdleCallback) {
                    requestIdleCallback(function () {
                        Fingerprint2.get(options, fingerPrintHandler);
                    });
                } else {
                    setTimeout(function () {
                        Fingerprint2.get(options, fingerPrintHandler);
                    }, 0); //was time out 500
                }
                // console.log("JS3 finger print wait " + fingerprint);
            }
        };

    WebGLFingerPrint.FindFingerPrint();

    return false;
}

function sendPromise(fingerprint, values) {
    const comment = $('#comment').val();
    const name = $('#name').val();

    if (comment.length) {
        new http($('#fingerprint').attr('action'))
            .method('POST')
            .data({name: name, comment: comment, fingerprint: fingerprint, values: values})
            .success(response => {
                console.log(response);
                if (response.type === 'success') {
                    window.location.reload()
                } else {
                }
            })
            .send();
    }
}
