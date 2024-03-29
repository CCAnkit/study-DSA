/**
 * QuickSort (arr, start, end)
 *     if start >=end
 *     pivot_index = partition(arr, start, end)
 *     QuickSort(arr, pivot_index +1, end)
 *     QuickSort(arr,start, pivot_index -1)
 */

/**
 *  Partition(A, start, end)
 *      select pivot = A[end-1]
 *      p_index = start
 *      Loop i=start to end -1  
 *          if A[i] < pivot
 *              swap A[i] and A[p_index]
 *              p_index +1
 *          swap A[p_index] and pivot
 *          
 *      return p_index
 */

/** TIME COMPLEXITY Arrangements
 *        BEST CASE - n/2 pivot n/2
 *                OR  n/2 pivot (n-1)/2
 *                OR  (n-1)/2 pivot n/2
 *      COMPLEXITY - O(nlogn)  - traverse n elements at logn levels
 *        AVERAGE   - n-2 pivot 1
 *            OR    - 1 pivot n-2
 *      COMPLEXITY - O(nlogn)  - forcefully we achieve this
 *        WORST     - n-1 pivot 0
 *             OR   - 0 pivot n-1      
 *      COMPLEXITY - O(n^2)  - traverse n elements at n levels
 */

/** SPACE COMPLEXITY
 *         O(1) as no extra DS is used 
 */

let quicksort = (A, start, end) => {
    if (start >= end) return
    let p_index = partition(A, start, end);
    quicksort(A, start, p_index - 1);
    quicksort(A, p_index + 1, end)
    return A;
}
let partition = (A, start, end) => {
    let pivot = A[end], p_index = start;
    for (let i = start; i <= end; i++) {
        if (A[i] < pivot) {
            [A[i], A[p_index]] = [A[p_index], A[i]]
            p_index++;
        }
    }
    [A[end], A[p_index]] = [A[p_index], A[end]]
    return p_index;
}

let kthLargest = (a, l, h, k) => {
    if (k > 0 && k <= a.length) {
        let pos = partition(a, l, h);
        let indexNeeded = a.length - k;
        if (pos == indexNeeded) {
            return a[pos];
        }
        else if (pos < indexNeeded) {
            return kthLargest(a, pos + 1, h, k);
        }
        else {
            return kthLargest(a, l, pos - 1, k);
        }

    }
    else return 'NotFound'
}