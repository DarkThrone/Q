/**
 * Created by Simbiotic Design.
 * User: Geronimo
 * Date: 26/05/11
 * Time: 09:02
 */
module('Module 1 - Queue consistency');

test('Size & isEmpty consistency Test', function(){
    expect(8);
    var q = Q();

    //Testing if the queue is empty
    ok(q.isEmpty(), "q.isEmpty() OK");

    //Testing size()
    equals(q.size(), 0, "size works correctly");

    //let's enqueue some things
    var number = 1;
    var string = 'abc';
    var bool = true;
    var array = [1, 2, 3];
    var date = new Date();

    q.enqueue(number);
    q.enqueue(string);
    q.enqueue(bool);
    q.enqueue(array);
    q.enqueue(date);

    equals(q.isEmpty(), false, "The queue is not empty anymore");

    equals(q.size(), 5, "Size displays the correct length of the queue");

    //dequeue all the elements
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();

    ok(q.isEmpty(), "The queue is empty againe");

    equals(q.size(), 0, "Size displays the correct length of the queue");

    //keep dequeueing
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();

    ok(q.isEmpty(), "isEmpty keeps consistency although dequeueing inexistente elements");

    equals(q.size(), 0, "Size is consistent although dequeueuing inexistente elements");
});

test('Enqueueing, dequeueing & peeking Consistency Test', function(){
    expect(25);

    //let's create a queue
    var q = Q();

    //Testing if the queue is empty
    ok(q.isEmpty(), "q.isEmpty() OK");

    //Testing size()
    equals(q.size(), 0, "size works correctly");

    //let's enqueue some things
    var number = 1;
    var string = 'abc';
    var bool = true;
    var array = [1, 2, 3];
    var date = new Date();

    //First test if enqueues an element
    q.enqueue(number);
    equals(q.size(), 1, 'First item enqueued correctly');
    //now test if is the SAME element
    strictEqual(q.peek(), number, 'q.peek() points to the top');
    q.enqueue(string);
    equals(q.size(), 2, 'Second item enqueued correctly');
    strictEqual(q.peek(), number, 'q.peek() points to the top');
    q.enqueue(bool);
    equals(q.size(), 3, 'Third item enqueued correctly');
    strictEqual(q.peek(), number, 'q.peek()  points to the top');
    q.enqueue(array);
    equals(q.size(), 4, 'Fourth item enqueued correctly');
    deepEqual(q.peek(), number, 'q.peek()  points to the top');
    q.enqueue(date);
    equals(q.size(), 5, 'Fifth item enqueued correctly');
    strictEqual(q.peek(), number, 'q.peek()  points to the top');

    var t;
    //Now we start dequeueing elements
    q.debug();
    t = q.dequeue();
    equals(q.size(), 4, 'Fifth item deenqueued correctly');
    strictEqual(t, number, 'dequeue returns correct elem');
    q.debug();
    t = q.dequeue();
    equals(q.size(), 3, 'Fourth item deenqueued correctly');
    strictEqual(t, string, 'dequeue returns correct elem');
    q.debug();
    t = q.dequeue();
    equals(q.size(), 2, 'Third item deenqueued correctly');
    strictEqual(t, bool, 'dequeue returns correct elem');
    q.debug();
    t = q.dequeue();
    equals(q.size(), 1, 'Second item deenqueued correctly');
    strictEqual(t, array, 'dequeue returns correct elem');
    q.debug();
    t = q.dequeue();
    q.debug();
    equals(q.size(), 0, 'First item deenqueued correctly');
    console.log(t);
    console.log(date);
    equals(t, date, 'dequeue returns correct elem');

    //Now the queue is empty again
    ok(q.isEmpty(), "q.isEmpty still works");

    //Now we test for undefined
    strictEqual(q.peek(), undefined, "An empty queue returns undefined");
    strictEqual(q.dequeue(), undefined, 'Dequeueing an empty queue returns undefined');

});