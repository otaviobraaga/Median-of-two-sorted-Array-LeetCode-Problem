/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArr = []
    let a = 0
    let b = 0

    while (nums1.length > a && nums2.length > b) {
        if (nums1[a] > nums2[b]) {
            mergedArr.push(nums2[b]);
            b++
        } else if (nums1[a] <= nums2[b]) {
            mergedArr.push(nums1[a]);
            a++
        }
    }
    for (let i = a; i < nums1.length; i++) {
        mergedArr.push(nums1[i]);
    }
    for (let j = b; j < nums2.length; j++) {
        mergedArr.push(nums2[j]);
    }
    if (mergedArr.length % 2 !== 0) {
        let index = Math.floor(mergedArr.length / 2)
        return mergedArr[index];
    } else {
        let index = Math.floor((mergedArr.length - 1) / 2);
        return (mergedArr[index] + mergedArr[index + 1]) / 2;
    }
};

