module.exports = (lang, separator) => {
    let ind = lang.lastIndexOf(separator);
    return ind === -1 ? lang : lang.slice(0, ind);
};