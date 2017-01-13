/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true is the linked list has a cylical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {

  // let curr = head;

  // while (true) {
  //   if (curr === null) {
  //     return true;
  //   }
  //   if (!curr.visited) {
  //     curr.visited = true;
  //     curr = curr.next;
  //   } else {
  //     return false;
  //   }
  // }
  if (arguments.length < 1) {
    return false;
  }

  let pointer1, pointer2 = head;

  if (head.next) {
    pointer1 = head.next;

    if (pointer1.next === head) {
      return true;
    }

    if (head.next.next) {
      pointer1 = pointer1.next;
    }

    while (pointer1 !== pointer2) {
      pointer1 = pointer1.next;
      if (!pointer1) {
        return false;
      }  else if (pointer1 === pointer2) {
        return true;
      }
      pointer1 = pointer1.next;
      if (!pointer1) {
        return false;
      } else if (pointer1 === pointer2) {
        return true;
      }
      pointer2 = pointer2.next;
    }

    return false;

  } else {
    return false;
  }
}

module.exports = {Node: Node, hasCycle: hasCycle}
