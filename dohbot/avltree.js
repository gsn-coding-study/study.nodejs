function Node(key, value) {
  this.key = key;
  this.value = value;
  this.left = null;
  this.right = null;
};

function ll(parent) {
  var child = parent.left;
  parent.left = child.right;
  child.right = parent;
  return child;
}

function rr(parent) {
  var child = parent.right;
  parent.right = child.left;
  child.left = parent;
  return child;
}

function rl(parent) {
  var child = parent.right;
  parent.right = ll(child);
  return rr(paren);
}

function lr(parent) {
  var child = parent.left;
  parent.left = rr(child);
  return ll(parent);
}

function height(node) {
  if (null == node) return 0;
  return Math.max(height(node.left), height(node.right) + 1);
}

function balanceFactor(node) {
  if (null == node) return 0;
  return height(node.left) - height(node.right);
}

function balance(node) {
  var factor = balanceFactor(node);
  if (1 < factor) {
    if (0 < balanceFactor(node.left))
      node = ll(node);
    else
      node = lr(node);
  } else if (factor < -1) {
    if (balanceFactor(node.right) < 0)
      node = rr(node);
    else
      node = rl(node);
  }
  return node;
}

function insert(root, key, value) {
  if (null == root) {
    root = new Node(key, value);
  } else if (root.key < key) {
    root.right = insert(root.right, key, value);
    root = balance(root);
  } else if (key < root.key) {
    root.left = insert(root.left, key, value);
    root = balance(root);    
  } else {
    console.log('duplicated key insert', root, key, value);
  }
  return root;
}

function search(node, key) {
  if (null == node) return null;
  console.log('search', node, key);
  if (node.key == key) return node;
  if (key < node.key) return search(node.left, key);
  return search(node.right, key);
}
if (require.main == module) {
  var root = null;
  root = insert(root, 6, 'six');
  root = insert(root, 8, 'eight');
  root = insert(root, 9, 'nine');
  root = insert(root, 10, 'ten');
  root = insert(root, 2, 'two');
  root = insert(root, 1, 'one');
  root = insert(root, 4, 'four');
  root = insert(root, 5, 'five');
  root = insert(root, 7, 'seven');
  root = insert(root, 12, 'twelve');
  root = insert(root, 12, 'twelve');
  var node = search(root, 12);
  console.log(node);
}