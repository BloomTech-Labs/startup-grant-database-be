module.exports = url => {
  try {
    const loc = new URL(url);
    return loc.hostname;
  } catch(error) {
    return url
  }
};
