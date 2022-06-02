//Keep project wide constants here

// Frontend
export const IN_PRODUCTION = true
export const PRODUCTION_SERVER_DOMAIN = 'localhost'             //API Domain
export const PRODUCTION_SERVER_PORT = 80

// Backend
export const LOGIN_ROUTE = 'test/login'
export const REGISTER_ROUTE = 'test/register'
export const CHECK_AUTH_ROUTE = 'test/checkAuth'
export const POST_TWEET_ROUTE = 'test/postTweet'
// API Proxy
export const SERVER = `${
    IN_PRODUCTION
        ? `http://${PRODUCTION_SERVER_DOMAIN}:${PRODUCTION_SERVER_PORT}`
        : null
}`


//Front-end project constants
export const SIDEMENU_BREAK_POINT = 1024     //in px
export const SMALL_SIDEMENU_WIDTH = 70      //in px
export const MOBILE_BREAK_POINT = 500
export const TABLET_BREAK_POINT = SIDEMENU_BREAK_POINT
