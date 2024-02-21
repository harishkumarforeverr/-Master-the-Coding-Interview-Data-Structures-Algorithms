```javascript
const mergeSortedArrays = (arr1, arr2) => {
  let maxLength = Math.max(arr1.length, arr2.length);
  let newarr=[...arr1,...arr2].sort((a,b)=>String(a)-String(b));
  return newarr;
};

mergeSortedArrays([0, 3, 14, 4, 23, 31], [3, 4, 6, 30]);


or using Quick sort

const quickSort = (arr1, arr2) => {
  return quickSortHandler([...arr1,...arr2])
};

const quickSortHandler=(arr)=>{
  if(arr.length<=1) return arr;
  let pivot=arr[0];
  let leftArr=[];
  let rightArr=[];
  for(let i=1;i<arr.length;i++){
    if(arr[i]<pivot){
     leftArr.push(arr[i])
    }else{
     rightArr.push(arr[i])
    }
  }
  return [...quickSortHandler(leftArr), pivot,...quickSortHandler(rightArr)]
}

quickSort([0, 3, 14, 4, 23, 31], [3, 4, 6, 30]);

```
