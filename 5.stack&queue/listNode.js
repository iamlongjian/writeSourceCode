// 链表

// 创建链表节点，需要一个构造函数
function listNode(val){
  this.val = val
  this.next = null
}

// 使用该构造函数创建节点，传入val，再指定next
const node = new listNode(1)
node.next = new listNode(2)

console.log(node)