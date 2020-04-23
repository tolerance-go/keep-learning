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

const getNodeList = (nums) => {
  const getNode = (nums) => {
    if (nums.length === 0) return null;
    const [num] = nums.slice(0, 1);
    const node = new ListNode(num);
    node.next = getNode(nums.slice(1));
    return node;
  };
  return getNode(nums);
};

export { delay, ListNode, getNodeList };
