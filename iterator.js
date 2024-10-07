const myArray = [1, 2, 3]; 
const myIterator = { 
    currentIndex: 0, 
    next: function () { 
        if (this.currentIndex < myArray.length) { 
            const value = myArray[this.currentIndex] ** 2;
            this.currentIndex++;
            return {  
                value: value, 
                done: false 
            }; 
        } else { 
            return { done: true }; 
        } 
    } 
}; 
console.log(myIterator.next());
console.log(myIterator.next()); 
console.log(myIterator.next()); 
console.log(myIterator.next()); 
