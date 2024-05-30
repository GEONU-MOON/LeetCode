from typing import List
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        max_value = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                for k in range(j+1, len(nums)):
                    value = (nums[i] - nums[j]) * nums[k]
                    max_value = max(max_value, value)
        return max_value