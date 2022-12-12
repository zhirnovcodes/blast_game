/*
import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Vec2Int')
export class Vec2Int{
    @property  x: number = 0;
    @property  y: number = 0;

    public Vec2Int(x? : number, y?: number){
        this.x = x ?? 0;
        this.y = y ?? 0;
    }
}
*/

import { _decorator, Vec2 } from "cc";
const { ccclass, property } = _decorator;

@ccclass('Vec2Int')
export class Vec2Int extends Vec2{
    toVec2() : Vec2{
        return this as Vec2;
    }
}