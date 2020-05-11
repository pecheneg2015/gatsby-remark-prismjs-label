module.exports = (title, templateGenerator) => {
    if (!templateGenerator) {
        return `<div>${title}</div>`;
    } else {
        return templateGenerator(title);
    }
};