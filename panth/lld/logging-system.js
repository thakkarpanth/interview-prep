/*
    chain of responsibility design pattern
    application usage : ATM , Vending Machine, Logger
*/

class Logger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;
    nextLogger;
    constructor(logger) {
        this.nextLogger = logger;
    }

    log(logLevel, message) {
        if (this.nextLogger) {
            this.nextLogger.log(logLevel, message);
        }
    }
}

class InfoLogger extends Logger {
    constructor(logger) {
        super(logger);
    }
    log(logLevel, message) {
        if (logLevel === InfoLogger.INFO) {
            console.log('INFO : ', message);
        }
        else {
            super.log(logLevel, message);
        }
    }
}

class ErrorLogger extends Logger {
    constructor(logger) {
        super(logger);
    }
    log(logLevel, message) {
        if (logLevel === ErrorLogger.ERROR) {
            console.log('ERROR : ', message);
        }
        else {
            super.log(logLevel, message);
        }
    }
}

class DebugLogger extends Logger {
    constructor(logger) {
        super(logger);
    }
    log(logLevel, message) {
        if (logLevel === DebugLogger.DEBUG) {
            console.log('DEBUG : ', message);
        }
        else {
            super.log(logLevel, message);
        }
    }
}

function main() {
    const errorObject = new ErrorLogger(null);
    const debugObject = new DebugLogger(errorObject);
    const logObject = new InfoLogger(debugObject);
    logObject.log(Logger.ERROR, 'error message');
    logObject.log(Logger.INFO, 'info message');
    logObject.log(Logger.DEBUG, 'debug message');

}

main();