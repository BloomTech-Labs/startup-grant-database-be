module.exports = url => {
    const loc = new URL(url);
    return loc.hostname;
};
