class Queue {
    constructor() {
        this.items = [];
    }

    isSumOfHalvesEqual() {
        if(this.isEmpty() || this.items.length == 1){
            return true;
        }
        let leftSum = 0;
        let rightSum = 0;
        const queueLength = this.size();

        for(let i = 0; i < queueLength; i++){
            let tempVal = this.dequeue();
            if(i < Math.floor(queueLength / 2)){
                leftSum += tempVal;
            } else if(i >= Math.ceil(queueLength / 2)){
                rightSum += tempVal;
            }
            this.enqueue(tempVal);
            }
        return leftSum == rightSum;
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2){
        if(this.isEmpty()){
            return false;
        }
        if(this.size() != q2.size()){
            return false;
        }
        for(let i = 0; i < this.items.length; i++){
            let firstVal = this.dequeue();
            let secondVal = q2.dequeue();
            if(firstVal != secondVal){
                return false;
            }
            this.enqueue(firstVal);
            q2.enqueue(secondVal);
        }
        return true;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}

let qa = new Queue();
let qb = new Queue();

qa.enqueue(33);
qa.enqueue(66);
qa.enqueue(98);
qa.enqueue(1);

qb.enqueue(1);
qb.enqueue(3);
qb.enqueue(2);
qb.enqueue(2);

console.log(qa.items);
console.log(qb.items);

console.log(qa.isSumOfHalvesEqual());