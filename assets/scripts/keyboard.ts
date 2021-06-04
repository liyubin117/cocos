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

    direction:cc.Vec2 = null
    speed:number = 3
    @property
    isContinuous:boolean = true;    //是否按键后持续移动

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on("keydown", this.onPressKey, this)
    }

    start () {

    }

    onPressKey(e:cc.Event.EventKeyboard){
        if(e.keyCode==cc.macro.KEY.left) this.direction = cc.v2(-1,0)
        else if(e.keyCode==cc.macro.KEY.right) this.direction = cc.v2(1,0)
        else if(e.keyCode==cc.macro.KEY.up) this.direction = cc.v2(0,1)
        else if(e.keyCode==cc.macro.KEY.down) this.direction = cc.v2(0,-1)
        else if(e.keyCode==cc.macro.KEY.space) this.direction = null

    }

    update (dt) {
        if(this.direction==null) return
        let pos:cc.Vec2=this.node.getPosition()
        pos.x += this.speed*this.direction.x
        pos.y += this.speed*this.direction.y
        this.node.setPosition(pos)
        if(!this.isContinuous) this.direction=null
    }
}
