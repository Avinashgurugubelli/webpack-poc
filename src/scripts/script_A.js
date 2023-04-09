const logPrefix = 'WEBPACK DEMO :| SCRIPT_A :|';

SCRIPT_A.add = (a, b) => {
    LOGGER.log(logPrefix + 'ADD FUNCTION :| RESULT :| ', a + b);
}

SCRIPT_A.subtract = (a, b) => {
    LOGGER.log(logPrefix + 'ADD subtract :| RESULT :| ', a - b);
}