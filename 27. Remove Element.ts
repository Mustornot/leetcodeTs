/**
 * 
 * @param nums массив, из которого удаляются все вхождения val
 * @param val число, все вхождения которого будут удалены из массива
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
    for (let index = nums.length-1; index >= 0; index--) {
        if(nums[index] === val) {
            nums.splice(index,1)
        }       
    }
    return nums.length;
};


//test data
const nums = [0,1,2,2,3,0,4,2];
const val = 2;
console.log(removeElement(nums,val));
console.log(nums);