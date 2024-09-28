/*8. Merge Multiple Objects
Write a function that merges multiple objects into a single object. If there are duplicate keys among the
objects, the values from the later objects should overwrite those from earlier ones.

Input: 
const obj1 = {a: 1, b: 2, c: 3}
const obj2 = { b: 3, d: 4 };
const obj3 = { e: 5, c: 2 };;
Output: { a: 1, b: 3, c: 2, d: 4, e: 5 }
*/

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, d: 4 };
const obj3 = { e: 5, c: 2 };

const mergeObjs = (...objs) => {
	return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
};
console.log(mergeObjs(obj1, obj2, obj3));
