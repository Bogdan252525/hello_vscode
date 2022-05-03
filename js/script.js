let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = {};

for (let i = 0, k = 1; i < arr1.length; i ++, k ++) {
	arr2[arr1[i]] = k;
}