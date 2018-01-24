function getArea(arr) {
    if (Array.isArray(arr) && arr.length == 2) {
        if(Number.isInteger(arr[0])  &&  Number.isInteger(arr[1])) {
            var result = arr[0] *arr[1];
            if(result>= 0){
                return result;
            } else {
                return -1;
            }

        } else {
            return -1;
        }
    
    } else {
        return -1;
    }


};

module.exports = getArea;