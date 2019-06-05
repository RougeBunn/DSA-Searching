const BinarySearchTree = require('./BST');
const Queue = require('./queue');

// 1.
// a. 11, 5, 6, 8
// b. 11, 15, 17

// 3.
function FindaBook(library, dewey, title) {
  for (const key in Object.entries) {
    if (dewey == key) {
      library.dewey.find(item => item.includes(title));
    }
    return item;
  }
}

//4.

// 1a) 91, 90, 89, 79, 35, 27, 25, 19, 15, 14
// 1b) 14, 19, 27, 89, 79, 91, 90, 15, 25, 35

// 2) 8, 6, 5, 7, 10, 9, 11

// 5.
function treeTraversals() {
  let BST = new BinarySearchTree();
  BST.insert(25, '25');
  BST.insert(15, '15');
  BST.insert(50, '50');
  BST.insert(10, '10');
  BST.insert(24, '24');
  BST.insert(35, '35');
  BST.insert(70, '70');
  BST.insert(4, '4');
  BST.insert(12, '12');
  BST.insert(18, '18');
  BST.insert(31, '31');
  BST.insert(44, '44');
  BST.insert(66, '66');
  BST.insert(90, '90');
  BST.insert(22, '22');

  const preOrder = bst => {
    console.log({ preOrder: bst.key });
    if (bst.left) {
      preOrder(bst.left);
    }
    if (bst.right) {
      preOrder(bst.right);
    }
  };

  const inOrder = bst => {
    if (bst.left) {
      inOrder(bst.left);
    }
    console.log({ inOrder: bst.key });
    if (bst.right) {
      inOrder(bst.right);
    }
  };

  const postOrder = bst => {
    if (bst.left) {
      postOrder(bst.left);
    }
    if (bst.right) {
      postOrder(bst.right);
    }
    console.log({ postOrder: bst.key });
  };

  preOrder(BST);
  inOrder(BST);
  postOrder(BST);
}
// treeTraversals();

//6.
function commanders(bst, result = []) {
  const queue = new Queue();
  queue.enqueue(bst);

  while (queue.first !== null) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  result.forEach(officers => console.log(officers));
}

function nextCommandingOfficer() {
  let BST = new BinarySearchTree();
  BST.insert(5, 'Captain Picard');
  BST.insert(3, 'Commander Riker');
  BST.insert(6, 'Commander Data');
  BST.insert(8, 'Lt. Cmdr. Crusher');
  BST.insert(7, 'Lieutenant Selar');
  BST.insert(2, 'Lt. Cmdr. Worf');
  BST.insert(4, 'Lt. Cmdr. LaForge');
  BST.insert(1, 'Lt. security-officer');

  commanders(BST);
}

nextCommandingOfficer();

// 7.
function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > max) {
      max = arr[i + 1] - arr[i];
    }
  }
  console.log(max);
  return max;
}
maxProfit([128, 97, 121, 123, 98, 97, 105]);
