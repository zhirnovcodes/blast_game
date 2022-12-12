import { Vec2, Vec3 } from "cc";
import { Vec2Int } from "./Vec2Int";

export  class Algorithms{
    static shuffle2dArray<T>(array: T[][]) : void {
        let width = array.length;
        let height = array[0].length;

        let maxCount = width * height;
        for (let i = maxCount - 1; i > 0; i--) {

            let x = i % width;
            let y = Math.floor(i / width);

            let iRand =  Math.floor(Math.random() * (i + 1));

            let xRand = iRand % width;
            let yRand = Math.floor(iRand / width);

            let bckp = array[x][y];
            array[x][y] = array[x][y];
            array[xRand][yRand] = bckp;
        }
    }

    static Maps = class{
        static getCellSSize(gridSizePixels: Vec2, cellsCount: Vec2Int, cellsSize?: Vec2) : Vec2{
            cellsSize = cellsSize == null ? new Vec2() : cellsSize;

            let x = gridSizePixels.x / cellsCount.x;
            let y = gridSizePixels.y / cellsCount.y;

            cellsSize.x = Math.min(x, y);
            cellsSize.y = cellsSize.x;

            return cellsSize;
        }

        static getWorldPosition(cellIndex: Vec2Int, gridWorldPosition: Vec3, 
            cellsCount: Vec2Int, cellsSize: Vec2, worldPosition?: Vec3) : Vec3{
                worldPosition = worldPosition == null ? new Vec3() : worldPosition;

                worldPosition.x = cellIndex.x * cellsSize.x + 0.5 * cellsSize.x;
                worldPosition.y = (cellsCount.y - cellIndex.y - 1) * cellsSize.y + 0.5 * cellsSize.y;
                worldPosition.add(gridWorldPosition);

                return worldPosition;
        }

        static getCellIndex(worldPosition: Vec3, gridWorldPosition: Vec3,  cellsCount: Vec2Int, cellsSize: Vec2,
            cellIndex?: Vec2Int): Vec2Int{
                cellIndex = cellIndex == null ? new Vec2Int() : cellIndex;

                cellIndex.set(worldPosition.x, worldPosition.y);

                cellIndex.subtract2f(gridWorldPosition.x, gridWorldPosition.y);

                cellIndex.x = Math.floor(cellIndex.x / cellsSize.x);
                cellIndex.y = cellsCount.y - Math.floor(cellIndex.y / cellsSize.y) - 1;

                return cellIndex;
        }
    }

}


