// 定义一颗二叉树
/**
 * 二叉树的特点
 * 1. 可以没有根节点，作为一颗空树存在
 * 2、如果它不是空树，那么必须由根节点、左子树和右子树组成，且左右子树都是二叉树
 */
function TreeNode(val){
  this.val = val // 数据域
  this.left = this.right = null //左子树和右子树
}

const node  = new TreeNode(1)