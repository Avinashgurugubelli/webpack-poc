(() => {

    const SCRIPT_A = globalThis["SCRIPT_A"];
    const UI_HANDLER = globalThis["UI_HANDLER"];
    const setMessages = () => {
        let messages = [
            'connecting',
            'fetching configuration details',
            'setting up user profile',
            'applying configuration'
        ];

        for (let i = 1; i < messages.length; i++) {
            setTimeout(function () {
                UI_HANDLER.setMessage(messages[i]);
            }, i * 1000);
        }

    };

    setMessages();

    // CALLING SCRIPT A Functions for testing
    SCRIPT_A.add(2, 5);
    SCRIPT_A.subtract(5, 3);

})();