/**
 * Created by lethe on 17-1-20.
 */
function momFruitCollision() {
    for(var i = 0,fru = fruit.num; i < fru; i++){
        if(fruit.alive[i]) {
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (l < 900) {
                fruit.dead(i);
            }
        }
    }
}