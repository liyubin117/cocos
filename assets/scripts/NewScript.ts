// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    date:string = "2021-10-12"

    @property
    step:number = 20

    @property
    isGoRight:boolean = true

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    onLoad() {
      this.node.on("mousedown", this.move, this)
    }

    start () {
      cc.log("组件 start...");
    }

    moveLeft(){
      this.node.x -= 20;
      var x = this.node.x;
      var y = this.node.y;
      cc.log("x y is:"+x+" "+y);
      let m:string = "hello"
      let n:number = 10
      cc.warn(m + n)
      cc.warn(this.sum(n,20))
      cc.warn(this.text)
    }

    move(){
      if(this.isGoRight) this.node.x+=this.step
      else this.node.x-=this.step
    }

    sum(x:number, y:number):number {
      return x+y
    }

    // update (dt) {}
}
