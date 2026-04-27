class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // pointers approach -> brute forcing
        
        // setup a var for managing the farthest non-target arrived car's index
        // setup done/need for counting how many cars have/haven't reached target
        // iterate WHILE not all cars have reached goal
            // check stack for recording the farthest car and its speed 
            // each iteration, each car moves
                // if any car "caught up" to the stack's recorded car
                    // that car moves stack's recorded speed, not its own speed
                // if not, move with its own speed
                // ----------
                // if a car, after moving, reached target - record the position(s)
            // if at least one car reached to goal
                // increment done by finished car(s) count.
                // increment output(res) by 1 -> no matter how many cars here are, its all 1 fleet
                // update the reached vehicles' position and speed as 0.
                // update the farthest non-target arrived car's index
        // O(n*k), n: position.length, k: 999 (max target - min speed)

        // things I can speed up from brute forcing:
            // checking for the "farthest" car multiple times
                // -> sort the "cars", can find it O(1)
            // "moving" the cars
                // -> can just measure "when" a car is going to reach with constant speed
                // Math.upper((target - car's position) / car's speed)
            // counting # of fleets
                // since we know each car's respective time to reach the target,
                // we also know that one is a fleet with other if it got a 
                // same or lower (faster) time than the other that is positioned farther.
        
        // use stack to manage each car's "time to arrive"
            // do math to find out time, and utilize fleet's conditions
        // we re-order the "cars" from farthest to closest positioned
            // have easy access to the farthest car
            // ex: car at [1] will only be located closer than the car at [0]
        // iterate through the re-ordered car's list
            // calculate each car's "time"
            // if ((stack.length === 0) || (time > stack.at(-1))) stack.push(time)
                // if cannot be the same fleet (meaning arriving later), its time will be
                // added to the top of the stack, becoming the next "farthest" car
        // return stack.length; -> holding each unique  
        let timeStack = new Array();
        let cars = new Array();            
        for (let i = 0; i < position.length; i++) cars.push([position[i],speed[i]]);

        let sortedCars = cars.sort((c1, c2) => (c2[0] - c1[0]));
        for (let car of sortedCars) {
            let timeToArrive = (target - car[0]) / car[1];
            if ((timeStack.length === 0) || (timeToArrive > timeStack.at(-1))) timeStack.push(timeToArrive);
        }
        return timeStack.length;
    }
}
