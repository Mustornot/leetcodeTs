//Чтобы не ругалось на одинаковые названия в других файлах
export {};

/**
 * Удаляет дубликаты чисел в сортированном массиве, если дубликатов больше 2
 * @param nums 
 * @returns 
 */
function majorityElement(nums: number[]): number {
    nums.sort((a,b)=>a-b);
    let majorityElement = nums[0];
    let count = 1;
    let maxCount = 1;
    const halfLen = nums.length/2;
    for (let index = 1; index < nums.length; index++) {
        if(nums[index] === nums[index - 1]) {
            count++;
            if (maxCount < count) {
                maxCount = count;
                majorityElement = nums[index];
            } 
        }       
        else{
            count = 1;
        }

        if (maxCount > halfLen) break;
    }
    return majorityElement;
};


//test data
const nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));
