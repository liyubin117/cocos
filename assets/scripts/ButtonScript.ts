// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    @property
    isReset:boolean = false;

    onLoad () {
        this.node.on("mousedown", this.onClicked, this)
    }

    start () {

    }

    onClicked(){
        let node:cc.Node = cc.find("Canvas/white")
        let ball:cc.Node = cc.find("Canvas/ball")
        let label:cc.Label = cc.find("Canvas/white/name").getComponent(cc.Label)
        if(this.isReset){
            // node.setPosition(cc.v3(100,2,0))
            cc.tween(node)
             .to(1, {position:cc.v3(300,200,0), rotation:0})  //缓动，1秒内移动到指定位置，旋转角度归0
             .to(0.5, {rotation:360}, {easing:"quadOut"})
             .start()
            node.setScale(cc.v2(4,4))
            label.string = "一个矩形"
            cc.tween(ball).to(1, {position:cc.v3(100,280,0)}, {easing:"quadIn"}).start()
        }else{
            node.setPosition(node.position.x - 5, node.position.y - 5)
            node.setScale(cc.v2(6,6))
            label.string = "hello"
            node.setRotation(node.rotation+90)
        }
    }

    // update (dt) {}
}
