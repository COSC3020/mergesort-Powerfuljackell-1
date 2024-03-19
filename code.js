function mergesort(array) {
    var n = array.length;
    //if(n <= 1) return;
    //if(n = 0) return -1;
    for (i = 1; i <= n - 1; i = 2 * i) {
        for (j = 0; j < n - 1; j += 2 * i) {
            var mid = Math.min(j + i - 1, n - 1);
            var right_end = Math.min(j + 2 * i - 1, n - 1);
            //merge(arr, j, mid, right_end);
            mergeInPlace(array, j, mid, right_end);
        }
    }
    return array;
}

function mergeInPlace(a, l, m, r) {
    let max = Math.max(a[m], a[r]) + 1;
 
    let i = l, j = m + 1, k = l;
    while (i <= m && j <= r && k <= r) {
     
    // recover back original element to compare
        let elem1 = a[i] % max;
        let elem2 = a[j] % max;
        if (elem1 <= elem2) {
            a[k] += (elem1 * max);
            i++;
            k++;
        }
        else {
            a[k] += (elem2 * max);
            j++;
            k++;
        }
    }
    //increases time complexity
    while (i <= m) {
        let el = a[i] % max;
        a[k] += (el * max);
        i++;
        k++;
    }
 
    while (j <= r) {
        let el = a[j] % max;
        a[k] += (el * max);
        j++;
        k++;
    }
 
    for (let i = l; i <= r; i++)
        a[i]= Math.floor(a[i] / max);
}

//flawed design
/*
//figure out how many times it is divisibe by 2 and 3
    var length = array.length;
    var residual = 0; //checks for residual single value at the end
    if(length % 2){
        length--;
        residual++;
    }
    var divby2 = 0;
    var divby3 = 0;
    while(length % 2 == 0){
        length /= 2;
        divby2 += 1;
    }
    while(length % 3 == 0){
        length /= 3;
        divby3 += 1;
    }

    console.log(divby2);
    console.log(divby3);
    console.log(residual);
function merge3()
function mergelem2(ar1,ar2){

}
*/

var list = [0,5,4,1,3,5,7,8,4];
mergesort(list);
console.log(list);

