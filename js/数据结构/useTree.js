import TreeNode from '../tools/tree.js'

// 项目1：走迷宫，迷宫方阵内0为通道，1不通，起点(1,1)，终点(8,8)
// 思路：每次查找当前节点能走的下一个节点，直到无路可走
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //x0
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1], //x1
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1], //x2
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 1], //x3
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 1], //x4
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1], //x5
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1], //x6
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1], //x7
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 1], //x8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //x9
    //   y0 y1 y2 y3 y4 y5 y6 y7 y8 y9   
]

// 优先广度搜索
function getPath(maze){
    let copyMaze = JSON.parse(JSON.stringify(maze));

    // 走过的通道设置值为2
    copyMaze[1][1] = 2;
    let node = new TreeNode();
    node.init('x' + node.x + 'y' + node.y);
    node.__proto__._setPosition = function (x, y) {
        this.x = x;
        this.y = y
    }
    node._setPosition(1, 1);
    
    //多条路径同时走
    // TODO: bug-走过的节点不能再次走，会使部分正确的路径丢失
    let nowNode = [node]; //当前步骤,所有走到的节点
    let hasPath = true; //还有路径可走
    while (hasPath) {
        let length = nowNode.length;
        let canGetNode = false; //能找新的节点
        // 遍历当前步骤所有节点，找下一步骤的节点
        for (let i = 0; i < nowNode.length; i++) {
            if (copyMaze[nowNode[i].x][nowNode[i].y + 1] == 0) {
                copyMaze[nowNode[i].x][nowNode[i].y + 1] = 2;
                let childNode = new TreeNode();
                childNode.init('x' + nowNode[i].x + 'y' + (nowNode[i].y + 1), nowNode[i]);
                childNode._setPosition(nowNode[i].x, nowNode[i].y + 1);
                nowNode.push(childNode);
                canGetNode = true;
                if (childNode.x == 8 && childNode.y == 8) {
                    console.log(childNode)
                }
            }
            if (copyMaze[nowNode[i].x + 1][nowNode[i].y] == 0) {
                copyMaze[nowNode[i].x + 1][nowNode[i].y] = 2;
                let childNode = new TreeNode();
                childNode.init('x' + (nowNode[i].x + 1) + 'y' + nowNode[i].y, nowNode[i]);
                childNode._setPosition(nowNode[i].x + 1, nowNode[i].y);
                nowNode.push(childNode);
                canGetNode = true;
                if (childNode.x == 8 && childNode.y == 8) {
                    console.log(childNode)
                }
            }
            if (copyMaze[nowNode[i].x][nowNode[i].y - 1] == 0) {
                copyMaze[nowNode[i].x][nowNode[i].y - 1] = 2;
                let childNode = new TreeNode();
                childNode.init('x' + nowNode[i].x + 'y' + (nowNode[i].y - 1), nowNode[i]);
                childNode._setPosition(nowNode[i].x, nowNode[i].y - 1);
                nowNode.push(childNode);
                canGetNode = true;
                if (childNode.x == 8 && childNode.y == 8) {
                    console.log(childNode)
                }
            }
            if (copyMaze[nowNode[i].x - 1][nowNode[i].y] == 0) {
                copyMaze[nowNode[i].x - 1][nowNode[i].y] = 2;
                let childNode = new TreeNode();
                childNode.init('x' + (nowNode[i].x - 1) + 'y' + nowNode[i].y, nowNode[i]);
                childNode._setPosition(nowNode[i].x - 1, nowNode[i].y);
                nowNode.push(childNode);
                canGetNode = true;
                if (childNode.x == 8 && childNode.y == 8) {
                    console.log(childNode)
                }
            }
        }
        // 移除上一步骤的节点
        nowNode.splice(0, length);
        if (canGetNode) {
            hasPath = true;
        } else {
            hasPath = false;
        }
    }
}
