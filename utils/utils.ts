const delay = (time) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(true);
      }, time);
    } catch {
      reject(false);
    }
  });
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const getListNums = (nums) => {
  const getNode = (nums) => {
    if (nums.length === 0) return null;
    const [num] = nums.slice(0, 1);
    const node = new ListNode(num);
    node.next = getNode(nums.slice(1));
    return node;
  };
  return getNode(nums);
};

const getTree = (nums) => {
  const breadthEach = (node, nums: number[]) => {
    const itemList = [node];
    let index = 0;
    while (nums.length && index < itemList.length) {
      const item = itemList[index++];

      const val = nums.shift();
      if (val !== null) {
        item.left = new TreeNode(val);
        itemList.push(item.left);
      }

      if (nums.length) {
        const val = nums.shift();
        if (val !== null) {
          item.right = new TreeNode(val);
          itemList.push(item.right);
        }
      }
    }
    return node;
  };
  return breadthEach(new TreeNode(nums[0]), nums.slice(1));
};

const getTreeNums = (tree) => {
  const breadthEach = (node, nums: number[] = []) => {
    const itemList = [node];
    nums.push(node.val);
    let index = 0;
    while (index < itemList.length) {
      const item = itemList[index++];

      if (item.left !== null) {
        itemList.push(item.left);
      }

      nums.push(item.left && item.left.val);

      if (item.right !== null) {
        itemList.push(item.right);
      }

      nums.push(item.right && item.right.val);
    }

    let end = nums.length - 1;
    while (nums[end] === null) {
      end--;
    }

    return nums.slice(0, end + 1);
  };

  return breadthEach(tree);
};

export { delay, ListNode, TreeNode, getListNums, getTree, getTreeNums };
