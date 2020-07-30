/**
 * Expects Query string to be in format ?query=string&...
 * Returns querystring parameters in object notation
 * @param {*} queryString Query string in format ?query=string&...
 */
function getParamFromQueryString(queryString) {
    const processStr = queryString.trim().substr(1);
    const params = processStr.split('&');
    const result = {};
    for (const param of params) {
        const query = param.split('=');
        result[query[0]] = decodeURI(query[1]);
    }
    return result;
}

export default {
    getParamFromQueryString
};