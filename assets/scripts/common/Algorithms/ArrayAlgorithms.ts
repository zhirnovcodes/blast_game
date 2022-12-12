import { Vec2, Vec3 } from "cc";
import { Vec2Int } from "../Vec2Int";

export  class ArrayAlgorithms{
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

    static isInBoundaries<T>(array: T[][], pos: Vec2Int): boolean{
        return pos.x >= 0 && pos.y >= 0 && pos.x < array.length && pos.y < array[0].length;
    }

    static positionToNumber<T>(array: T[][], position: Vec2Int): number{
        return position.x + (Math.max(0, position.y - 1) * array.length);
    }

    static findNearestSimilar<T>(array: T[][], position: Vec2Int,  condition: (first: T, second: T) => boolean, set?: Set<number>, maxLength?: number): Set<number>{
        if ( set == null ){
            set = new Set<number>();
        }

        if (!this.isInBoundaries(array, position)){
            return set;
        }

        maxLength = maxLength == null ? array.length * array[0].length : maxLength;
        if (set.size >= maxLength){
            return set;
        }

        let t1 = array[position.x][position.y];
        let p1 = this.positionToNumber(array, position);
        set.add(p1);

        if (set.size > array.length * array[0].length){
            throw "For some reason set exceeded array size";
        }

        function checkNearest (x: number, y: number ) {
            position.add2f(x, y);

            if (this.isInBoundaries(array, position)) {
                let p2 = this.positionToNumber(array, position);
                if (!set.has(p2)){
                    let t2 = array[position.x][position.y];
                    if ( condition(t1, t2) ){
                        this.findNearestSimilar(array, position, condition, set);
                    }
                }

            }

            position.subtract2f(x, y);
        }

        checkNearest(-1, 0);
        checkNearest(0, -1);
        checkNearest(1, 0);
        checkNearest(0, 1);

        return set;
    }

    static hasSimilar<T>(array: T[][], condition: (first: T, second: T) => boolean, maxLength: number, set?: Set<number>): boolean{
        if ( set == null ){
            set = new Set<number>();
        }
        else{
            set.clear();
        }

        let position = new Vec2Int();
        for (let x = 0; x < array.length; x++){
            for (let y = 0; y < array[0].length; y++){
                position.set(x, y);
                if (set.has(this.positionToNumber(array, position))){
                    continue;
                }

                let lenBefore = set.size;
                this.findNearestSimilar(array, position, condition, set, maxLength);
                if (set.size - lenBefore >= maxLength){
                    return true;
                }
            }
        }

        return false;
    }
}


