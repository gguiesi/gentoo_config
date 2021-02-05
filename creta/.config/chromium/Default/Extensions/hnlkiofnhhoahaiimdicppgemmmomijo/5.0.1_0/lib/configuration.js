"use strict";

/*
 Use the debug constant to display log and exceptions.
 Please, complete the display when you fix/add features.
 */
const DEBUG  = false;
const XDEBUG = "XDEBUG_SESSION_START=vagrant";
/*
 Qwant related URLs
 If DEBUG is set to true, the extension is ready to work with local instances of the front.
 You may need to update the config to match your own local setup.
 */
const QWT_URL         = (DEBUG === false) ? "https://www.qwant.com" : "http://www.qwant.loc";
const QWT_SUBDOMAIN   = (DEBUG === false) ? "*.qwant.com" : "*.qwant.loc";
const SEARCH_API      = (DEBUG === false) ? "https://api.qwant.com/api" : "http://api.qwant.loc/api";
const BOARDS_API      = (DEBUG === false) ? "https://api-boards.qwant.com/api" : "http://api.qwant.loc/api";
const FAVICON_BASE_64 = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwALIQcACygHIDtM+GHsX/kCvNQAAAAAAAAAAA6n4bMPavJN//0ypgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYwRQDGz3oNuv+OKMv/kCvN/5ArzUAAAAAA6n4bMOp/Gu/7vBj//8ob7//JGiAAAAAAAAAAAAAAAAAAAOYQAADmzwAA5v9GIOb/kCvNv5ArzWCQK80QmnkOINaBFO/pjwv/9cgh//nFGUAAAAAAAAAAAAAAAAAAAAAAGSb7cAcL7P8VFvP/Kiv/YAAAAAAAAAAAAAAAAAAAAACaeQ5wmnkO/8mzMv/l1kdwAAAAAAAAAAAAAAAAAAAAAB0s/88iPv//Ki7/vwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZ/Dr+jhRX/5dZHzwAAAAAAAAAAAAAAAAAAAAAdLP//JEP//ylG/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRhw9gk4QP/9zQPv8AAAAAAAAAAAAAAAAAAAAAHUP//yZV//8rg/9QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkYcPYKCeEf/D0Rj/AAAAAAAAAAAAAAAAAAAAAB6r/d8lnv7/K4//nwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJOMD5+mqhH/w9EY3wAAAAAAAAAAAAAAAAAAAAAfs/2PIbD9/yqV/P8ktOkwAAAAAAAAAAAAAAAAAAAAAIbjojB8sx7/l9BE/7jXLo8AAAAAAAAAAAAAAAAAAAAAH7n9ICC8/e8ksfX/JLjj7yXA1YAlyMYwOeK5MDniuYA54rnvfd9f/5HtfO+R7XwQAAAAAAAAAAAAAAAAAAAAAAAAAAAgw/xQI8367yTN7v8lzd7/Jc3G/yvUvP8+6cn/TO/M/4fuiu+R7XxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTf/jAk4vy/MO/6/zj3+f8++/r/RfTl/0X05K9F9OQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD77+hA++/pAPvv6QD77+hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADwYwAA4EEAAMADAADDwwAAx+MAAMfjAADH4wAAx+MAAMPDAADAAwAA4AcAAPAPAAD8PwAA//8AAA==';

/*
 Firefox settings
 */
const TP_SETTING     = "privacy.trackingprotection.enabled";
const DNT_SETTING    = "privacy.donottrackheader.enabled";
const SEARCH_SUGGEST = "chrome.search.suggest.enabled";
const FIRST_RUN      = "extensions.qwant.firstrun";
const HOME_PAGE      = "chrome.startup.homepage";

const config = {
    DEBUG,
    XDEBUG,
    QWT_URL,
    QWT_SUBDOMAIN,
    SEARCH_API,
    BOARDS_API,
    FAVICON_BASE_64,
    TP_SETTING,
    DNT_SETTING,
    SEARCH_SUGGEST,
    FIRST_RUN,
    HOME_PAGE
};
