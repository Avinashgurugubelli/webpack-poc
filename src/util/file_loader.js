globalThis["FILE_LOADER"] = globalThis["FILE_LOADER"] || {};

FILE_LOADER.loadedScripts = {};
FILE_LOADER.loadedStyleSheets = {};

function setScriptState(name, state) {
    if (name in FILE_LOADER.loadedScripts) {
        FILE_LOADER.loadedScripts[name] = {
            isLoaded: state,
            ...FILE_LOADER.loadedScripts[name]
        }
    }
    else {
        FILE_LOADER.loadedScripts[name] = {
            isLoaded: state
        }
    }
}

function setStyleSheetState(name, state) {
    if (name in FILE_LOADER.loadedStyleSheets) {
        FILE_LOADER.loadedStyleSheets[name] = {
            isLoaded: state,
            ...FILE_LOADER.loadedStyleSheets[name]
        }
    }
    else {
        FILE_LOADER.loadedStyleSheets[name] = {
            isLoaded: state
        }
    }
}

function onStyleSheetLoad(name, callBackFn) {
    if (name) {
        setStyleSheetState(name, true);
    }
    if (callBackFn && typeof callBackFn === 'function') {
        callBackFn();
    }

}

function onStyleSheetLoadError(name) {
    if (name) {
        setStyleSheetState(name, false);
    }
}

function onScriptLoad(name, callBackFn) {
    if (name) {
        setScriptState(name, true);
    }
    if (callBackFn && typeof callBackFn === 'function') {
        callBackFn();
    }

}

function onScriptLoadError(name) {
    if (name) {
        setScriptState(name, false);
    }
}

function loadScript(name, srcUrl, locationRef, callbackFn) {
    var scriptTag = document.createElement('script');
    scriptTag.src = srcUrl;

    scriptTag.onload = onScriptLoad(name, callbackFn);
    scriptTag.onerror = onScriptLoadError(name);

    if (locationRef) {
        locationRef.appendChild(scriptTag);
    }
    else {
        const body = document.getElementsByTagName('body')[0];
        if (body) {
            body.appendChild(scriptTag);
        }
    }

}

function loadStyleSheet(name, href, locationRef, callbackFn) {
    // Create new link Element
    var link = document.createElement('link');
    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.setAttribute('data-name', name);
    link.onload = onStyleSheetLoad(name, callbackFn);
    if (locationRef) {
        locationRef.appendChild(link);
    }
    else {
        const head = document.getElementsByTagName('HEAD')[0];
        if (head) {
            head.appendChild(link);
        }
    }
}

globalThis["FILE_LOADER"].loadScript = loadScript;
globalThis["FILE_LOADER"].loadedStyleSheet = loadStyleSheet;

