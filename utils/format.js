//Format name-entry to uppercase
const formatName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = formatName
