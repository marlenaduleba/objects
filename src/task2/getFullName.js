const getFullName = ({ firstName = "", lastName = "" }) => {
  return `${firstName} ${lastName}`.trim();
};

module.exports = getFullName;
