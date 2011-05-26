/**
 * Copyright (c) by 2011 Geronimo Garcia Sgritt, Simbiotic Design (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * A simple and short queue. This helper class aids in the creation and walking of a queue. The implementation is rather
 * generic, mantaining the most common methods, size, peek, enqueue, dequeue and isEmpty.
 *
 * @author: Geronimo Garcia Sgritta
 * @version: 1.0
 */

/**
 * Creates a simple queue
 *
 * @constructor
 */
var Q = function(){
                var q = [], //The actual queue
                    l = 0; //The length, size & offset of the queue
                return {
                    /**
                     * returns the size of the queue
                     * @return size The size of the queue
                     */
                    size: function(){
                        return l>0 ? l : 0;
                    },
                    /**
                     * Returns the element that is in the top of the queue. If the queue is empty returns 'undefined'
                     * @return o An element that is at the top of the queue
                     */
                    peek: function(){
                        return q[l-1];
                    },
                    /**
                     * Dequeues and element and returns it. If the queue is empty returns 'undefined'
                     * @return o An element that is at the top of the queue
                     */
                    dequeue: function(){
                        if(l < q.length*0.9){
                             //Remove unnecessary and empty elements
                            q = q.slice(0,l);
                        }
                        return q[--l];
                    },
                    /**
                     * Enqueues an element
                     * @param o
                     */
                    enqueue: function(o){
                        q[l++] = o;
                    },
                    /**
                     * If the queue is empty returns true, otherwise false
                     * @return True if the queue is empty
                     *         False if there is an element
                     */
                    isEmpty: function(){
                        return l <= 0;
                    },
                    debug: function(){
                        console.log("===================================");
                        console.log("////Dumping debug information//////");
                        console.log("===================================");
                        console.log("Length of the array:       "+ q.length);
                        console.log("Length of the collection:  "+ l);
                        console.log("===================================");
                        console.log("////Collection detailed information");
                        console.log("===================================");
                        for(var i = 0; i < q.length; i++){
                            console.log("Index " + i + " contains: " + q[i] + (i < l ? ' TRUE' : ' FALSE'));
                        }
                        console.log("===================================");
                        console.log("////End of dump////////////////////");
                        console.log("===================================");
                    }
                }
            };