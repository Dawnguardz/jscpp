// 使用栈结构来处理问题

import JsStack from '../tools/Stack.js';

// 项目1：判断括号组成的字符串是否能够前后对应匹配
// 匹配包括 '{}[]','([])' 
// 思路：'({['入栈，')}]'判断栈顶对应匹配再出栈
function isMatch(str){
    let matchStack = new JsStack();
    for (let item of str){
        switch (item){
            case '(':
                matchStack.push(item);
                break;
            case '{':
                matchStack.push(item);
                break;
            case '[':
                matchStack.push(item);
                break;
            case ')':
                if (matchStack.top == '('){
                    matchStack.pop();
                    break;
                }else{
                    return false
                }
            case '}':
                if (matchStack.top == '{'){
                    matchStack.pop();
                    break;
                }else{
                    return false
                }    
            case ']':
                if (matchStack.top == '['){
                    matchStack.pop();
                    break;
                }else{
                    return false
                }                
        }
    }
    return true
}
// console.log(isMatch('[]{(])}'))


// 项目2：走迷宫，迷宫方阵内0为通道，1不通，起点(1,1)，终点(8,8)
// 思路：可以走的节点位置入栈，走到无路可走就出栈回退，退到栈顶找其他路走
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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //x9
//   y0 y1 y2 y3 y4 y5 y6 y7 y8 y9   
]
// 优先深度搜索
function getPath(maze) {
    let mazeStack = new JsStack();
    let copyMaze = JSON.parse(JSON.stringify(maze));

    // 当前位置，x为横行，y为纵列，x1，y1为入口，x9，y9为出口
    let x = 1;
    let y = 1;

    // 初始化
    mazeStack.push({
        x: x,
        y: y
    });
    // 走过的通道设置值为2
    copyMaze[x][y] = 2;

    while (x != 8 || y != 8) {
        // 按照右、下、左、上顺序寻路
        if (copyMaze[x][y + 1] == 0) {
            copyMaze[x][y + 1] = 2;
            y++;
            mazeStack.push({
                x: x,
                y: y
            });
        } else {
            if (copyMaze[x + 1][y] == 0) {
                copyMaze[x + 1][y] = 2;
                x++;
                mazeStack.push({
                    x: x,
                    y: y
                });
            } else {
                if (copyMaze[x][y - 1] == 0) {
                    copyMaze[x][y - 1] = 2;
                    y--;
                    mazeStack.push({
                        x: x,
                        y: y
                    });
                } else {
                    if (copyMaze[x - 1][y] == 0) {
                        copyMaze[x - 1][y] = 2;
                        x--;
                        mazeStack.push({
                            x: x,
                            y: y
                        });
                    } else {
                        if (mazeStack.top.x==1&&mazeStack.top.y==1){
                            return 'no way to go'
                        }
                        mazeStack.pop();
                        x = mazeStack.top.x;
                        y = mazeStack.top.y;
                    }
                }
            }
        };
    }
    return mazeStack
}
// console.log(getPath(maze))