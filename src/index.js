// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createNotEnumerableProperty = (propertyName) => {var sym = Symbol(propertyName); return sym;};
const createProtoMagicObject = () => {};
const incrementor = () => {
  incrementor.number++;
  return incrementor;
};
incrementor.toString = () => incrementor.number;
incrementor.number = 0;

const asyncIncrementor = async function f(resolve) {return Promise.resolve(++asyncIncrementor.number); };
//asyncIncrementor.toString = () => asyncIncrementor.number;
asyncIncrementor.number = 0;
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
