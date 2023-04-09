globalThis["LOGGER"] = globalThis["LOGGER"] || {};

globalThis["LOGGER"].log = (prefix, msg) => {
    console.log(prefix, msg);
}

globalThis["LOGGER"].debug = (prefix, msg) => {
    console.debug(prefix, msg);
}

globalThis["LOGGER"].info = (prefix, msg) => {
    console.info(prefix, msg);
}

globalThis["LOGGER"].error = (prefix, msg) => {
    console.error(prefix, msg);
}