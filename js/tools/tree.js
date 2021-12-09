// 树；根据DOM树来做

// 普通树节点
export default class TreeNode {
    constructor() {
        this.name = undefined;
        this.idx = undefined; //唯一标识，会传承祖代的idx
        this.children = []; //子节点
        this.parent = undefined; //父节点
    };

    // 初始化
    init(name, parent) {
        this.name = name;
        this.parent = parent;
        if (parent) {
            if (this.parent.children.length > 0) {
                // 父节点最后一个子节点的idx加一就是新节点的idx
                let prevNodeIdx = this.parent.children[this.parent.children.length - 1].idx;
                let lastSymbolIdx = prevNodeIdx.lastIndexOf('-') + 1;
                this.idx = prevNodeIdx.substring(0, lastSymbolIdx) + (Number(prevNodeIdx.substring(
                    lastSymbolIdx)) + 1)
            } else {
                this.idx = this.parent.idx + '-0'
            }
            this.parent.appendChild(this);
        } else {
            this.idx = '0'
        }
    }

    // 添加子节点
    appendChild(node) {
        this.children.push(node)
    }

    // 移除子节点
    removeChildByIdx(idx) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].idx == idx) {
                this.children.splice(i, 1)
            }
        }
    }

    // 移除子节点
    // 会移除所有该名称的子节点
    removeChildByName(name) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].name == name) {
                this.children.splice(i, 1)
            }
        }
    }

    // 移除所有子节点
    clearChild() {
        this.children = []
    }
}

// 普通树
class JsTree{
    constructor(){
        this.root = null;  //根节点
    }

    // 初始化根节点
    init(node){
        this.root = node;
    }

    //TODO: 树结构的遍历
}

// 二叉树节点
class BTreeNode{
    constructor(){
        this.parent = null;
        this.lChild = null; // 左子节点
        this.rChild = null; // 右子节点
    }
}

// 二叉树
class BinaryTree{

}