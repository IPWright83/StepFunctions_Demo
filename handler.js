module.exports.add = async ({ x, y }) => x + y;
module.exports.double = async n => n * 2;

let counter = 0;

module.exports.counter = async n => {
    if (++counter > 2) return n;
    throw new Error(`Counter value is only ${counter}`);
}
