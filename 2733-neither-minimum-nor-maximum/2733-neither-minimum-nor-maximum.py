from typing import List
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        nums = sorted(nums)
        for i in range(1, len(nums) - 1):
            if nums[i] != nums[i - 1] and nums[i] != nums[i + 1]:
                return nums[i]
        return -1