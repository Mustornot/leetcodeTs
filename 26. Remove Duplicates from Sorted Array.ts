//Чтобы не ругалось на одинаковые названия в других файлах
export {};

/**
 * Удаляет все дубликаты чисел в сортированном массиве
 * @param nums 
 * @returns 
 */
function removeDuplicates(nums: number[]): number {
    for (let index = nums.length-1; index >= 1; index--) {
        if(nums[index] === nums[index-1]) {
            nums.splice(index,1)
        }       
    }
    return nums.length;
};


//test data
const nums = [0,1,2,2,3,4,4,4];
console.log(removeDuplicates(nums));
console.log(nums);