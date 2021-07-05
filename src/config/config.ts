require("dotenv").config()

module.exports = {
    SERVER_STARTED: "Server successfully started at",
    STATUS_CODE: {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        VALIDATION_ERROR:402
    },

    MONGO: {
		DB_NAME: process.env.DB_NAME,
		DB_URL: process.env.DB_URL
    },
    SERVER:{
        PORT:process.env.PORT
    },
    ARTICLE:{
        LIST:"Arcticle listed",
        ADD:"Article Added"
    },
    COMMENT:{
        LIST:"Comment listed",
        ADD:"Comment Added",
    },
    DB:{
        CONNECTED:"DATABASE IS CONNECTED"
    },
    ERROR:{
        BAD_REQUEST:"Bad Request"
    },
    PAGESIZE:3,
    
}