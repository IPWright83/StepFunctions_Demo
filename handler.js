module.exports.hello = async name => {
  return `Hello ${name}`
};

module.exports.add = async ({ x, y }) => x + y;
module.exports.double = async n => n * 2;
