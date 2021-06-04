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
        let label:cc.Label = cc.find("Canvas/white/name").getComponent(cc.Label)
        if(this.isReset){
            node.setPosition(cc.v3(100,2,0))
            label.string = "一个白球"
            node.setRotation(0)
        }else{
            node.setPosition(node.position.x - 5, node.position.y - 5)
            
            label.string = "hello"
            node.setRotation(node.rotation+90)
        }
    }

    // update (dt) {}
}
