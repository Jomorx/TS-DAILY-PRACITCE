function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let left = 0;
  let right = s.length-1;
  while (left < right) {
      if (s[left] === s[right]) {
          left++;
          right--;
      } else {
          return false;
      }
  }
  return true;
};



console.log(isPalindrome('A man, a plan, a canal: Panama'));
