import { _decorator, Component, Node, Color, Sprite } from 'cc';
import { BlockBase } from './BlockBase';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('ColorBlock')
@executeInEditMode
export class ColorBlock extends BlockBase {
    @property(Color) color: Color = Color.WHITE.clone();
    private sprite: Sprite;
    
    onEnable(){
        if (this.sprite == null){
            this.sprite = this.node.getComponent(Sprite);
            if (this.sprite == null){
                return;
            }
        }
        console.log(1);
        this.sprite.color = this.color;
    }
}


