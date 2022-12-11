import { Vec2Int } from "./Vec2Int";

export  class Algorithms{
    static shuffle2dArray(array: Vec2Int[][]) : void {
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
}


