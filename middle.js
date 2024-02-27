function counter(arr) {
    return arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function mode(arr) {
    let freqCounter = counter(arr);
    let count = 0;
    let mostFreq;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFreq = key;
            count = freqCounter[key];
        }
    }
    return +mostFreq;
}

function mean(nums) {
    if (nums.length === 0) return 0;
    return (
        nums.reduce(function (acc, cur) {
            return acc + cur;
        }) / nums.length
    );
}

function median(nums) {
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    let res;

    if (nums.length % 2 === 0) {
        res = (nums[mid] + nums[mid - 1]) / 2;
    } else {
        res = nums[mid];
    }
    return res;
}

module.exports = {
    mean,
    median,
    mode,
};
