const arr = [5, 6, 1, 2, 4, 3, 5, 74];
const temp = [];
const mergeSort = (arr, l, r) => {
  if (l === r) return;
  let m = (l + r) >> 1,
    i = l,
    j = m + 1;
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  while (i <= m && j <= r) {
    if (arr[i] <= arr[j]) temp.push(arr[i++]);
    if (arr[i] > arr[j]) temp.push(arr[j++]);
  }
  while (i <= m) temp.push(arr[i++]);
  while (j <= r) temp.push(arr[j++]);
  for (let i = l, j = 0; i <= r; i++, j++) {
    arr[i] = temp[j];
  }
  temp.length=0
};
mergeSort(arr,0,arr.length-1)
console.log(arr);