module.exports = (lang, separator) => {
    let ind = lang.lastIndexOf(separator);
    let title = ind === -1 ? "" : lang.slice(ind + separator.length);
    return title.length > 0 ? title : null;
};