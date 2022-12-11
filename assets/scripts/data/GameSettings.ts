import { _decorator, Component, Node, Vec2 } from 'cc';
import { Vec2Int } from '../common/Vec2Int';
const { ccclass, property } = _decorator;

@ccclass('GameSettings')
export class GameSettings extends Component {
    @property(Vec2Int) cellsCount: Vec2Int = new Vec2Int();
    @property timeoutTime: number = 100;
    @property nearCellsCount: number = 3;
    @property shuffleCount: number = 3;
}


