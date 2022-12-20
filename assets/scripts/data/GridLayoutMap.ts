import { _decorator, Component, Node, Vec2, Vec3, Sprite, UITransform } from 'cc';
import { Vec2Int } from '../common/Vec2Int';
import { GameSettings } from './GameSettings';
const { ccclass, property } = _decorator;

@ccclass('GridLayoutMap')
export class GridLayoutMap extends Component {
    @property(GameSettings) private settings: GameSettings;
    @property(UITransform) private layoutTransform: UITransform;

    private position : Vec2;
}


