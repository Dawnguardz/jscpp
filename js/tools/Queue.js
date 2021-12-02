// 队列：数据队尾进队头出，先进者先出

export default class JsQueue{
    constructor(){
        this.top = undefined;  //队列头，拿数据
        this.bottom = undefined;  //队列尾，放数据
        this.comps = [];       //队列储存的元素
    }

    // 入队
    push(comp){
        this.comps.push(comp);
        this.top = this.comps[0];
        this.bottom = comp;
    }

    // 出队
    pop(){
        this.comps.shift();
        this.top = this.comps[0];
        this.bottom = this.comps[this.comps.length-1]
    }

    getLength(){
        return this.comps.length
    }

    clear(){
        this.top = undefined;
        this.bottom = undefined;
        this.comps = [];
    }
}