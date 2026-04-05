class Solution:
    def isPalindrome(self, s: str) -> bool:
        st = "".join(c for c in s if c.isalnum())
        if (st[::].lower() == st[::-1].lower()):
            return True
        return False