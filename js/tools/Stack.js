// 栈：数据一端进出，先进者后出
export default class JsStack{
    constructor(arr=[]){
        this.top = undefined;  //栈顶
        this.comps = arr;       //栈储存的元素
    }

    // 入栈
    push(comp){
        this.comps.unshift(comp);
        this.top = comp;
    }

    // 出栈
    pop(){
        this.comps.shift()
        this.top = this.comps[0];
    }

    getLength(){
        // 判断栈空，不要用top值undefined来判断
        return this.comps.length
    }

    clear(){
        this.top = undefined;
        this.comps = [];
    }
}