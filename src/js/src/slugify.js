const slugify = (str = "") => {
  const regex = /\s|,|-|\./;
  const arr = str.toLowerCase().split(regex);
  return arr.filter(char => char !== "").join("-");
};

module.exports = slugify;
