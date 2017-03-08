Some Sums
=========

Given an array of numbers and a desired sum, return the earliest starting subarray of length num whose entries add up to sum from the input array. Return null if no such subarray exists.

Examples:
---------

**test case:** someSums([ 1, 2, 3 ], 6, 3) 
**solution:** [ 1, 2, 3 ]

---

**test case:** someSums([ -1, -6, -2, -10, 4, 5, 1, -2 ], -10, 3)
**solution:** [ -1, -10, 1 ]

---

**test case:** someSums([ 1, 4, 1, 1, 1, 1, 2, 3 ], 5, 2)
**solution:** [ 1, 4 ]

---

**test case:** someSums([ 1, 3, 6, 9, 16, 1, 18 ], 18, 3)
**solution:** [ 1, 16, 1 ]