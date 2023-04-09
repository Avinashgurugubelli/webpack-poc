
globalThis["UI_HANDLER"] = globalThis["UI_HANDLER"] || {};
const logPrefix = 'WEBPACK DEMO :| INDEX_JS :| ';

(function () {

    const LOGGER = globalThis["LOGGER"];
    const header = (() => {

        function setHeader(text) {
            const ele = document.getElementById('app-header');
            if (ele) {
                ele.innerHTML = text;
            }
            else {
                LOGGER.error(logPrefix, 'Unable to locate app-header element')
            }
        };


        function setHeaderSubText(text) {
            const ele = document.getElementById('app-title-sub-text');
            if (ele) {
                ele.innerHTML = text;
            }
            else {
                LOGGER.error(logPrefix, 'Unable to locate app-title-sub-text element')
            }
        };

        return {
            setHeader: setHeader,
            setHeaderSubText: setHeaderSubText
        };

    })();

    const messenger = (() => {

        function setMessage(text) {
            const ele = document.getElementById('message-holder');
            if (ele) {
                ele.innerHTML = text;
            }
            else {
                LOGGER.error(logPrefix, 'Unable to locate message-holder element')
            }
        };

        return {
            setMessage: setMessage
        }
    })();

    header.setHeader('welcome to web development !');
    header.setHeaderSubText('Avinash');

    globalThis["UI_HANDLER"].setHeader = header.setHeader;
    globalThis["UI_HANDLER"].setHeaderSubText = header.setHeaderSubText;
    globalThis["UI_HANDLER"].setMessage = messenger.setMessage;

    // LOADING THIRD PARTY FILES
    FILE_LOADER.loadScript('BootStrap', "./third-party/scripts/bootstrap.bundle.min.js");
    FILE_LOADER.loadScript('lodash', "./third-party/scripts/lodash.min.js");

    // LOADING CUSTOM FILES
    FILE_LOADER.loadScript('scope_declaration', 'scope_declaration.js');
    FILE_LOADER.loadScript('SCRIPT_A', './scripts/script_A.js');
    FILE_LOADER.loadScript('SCRIPT_B', './scripts/script_B.js');

})();