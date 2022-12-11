import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { BlocksGrid } from './BlocksGrid';
import { Vec2Int } from '../common/Vec2Int';
const { ccclass, property } = _decorator;

@ccclass('GridLayoutData')
export class GridLayoutData extends Component {
    @property(Vec2) public CellSize: Vec2 = new Vec2();
}


