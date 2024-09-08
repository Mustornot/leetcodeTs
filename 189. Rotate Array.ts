/**
Сдвигает исходный массив на k вправо
 */
 function rotate(nums: number[], k: number): void {
	const nums2  = Object.assign([], nums);
	for (let index = 0; index < nums.length; index++) {
		nums[(index+k)%nums.length] = nums2[index]
	}
	console.log(nums);
 };

 const nums = [1,2,3,4,5,6,7]
 const k = 3
 rotate(nums, k);