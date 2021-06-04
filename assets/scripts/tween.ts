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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("mousedown", this.onClicked, this)
    }

    start () {
        
    }
    onClicked(){
        cc.log("click")
        let height=280
        cc.tween(this.node).by(0.7, {position:cc.v3(0,-height,0)}, {easing:"quadIn"})
            .by(0.3, {position:cc.v3(0,height/6,0)}, {easing:"quadOut"})
            .by(0.3, {position:cc.v3(0,-height/6,0)}, {easing:"quadIn"})
            .start()
    }

    // update (dt) {}
}
