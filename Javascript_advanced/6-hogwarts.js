class studentHogwarts {
    constructor() {
      let privateScore = 0;
      let name = null;
  
      // Private method to change score
      function changeScoreBy(points) {
        privateScore += points;
      }
  
      // Public methods
      this.setName = function(newName) {
        name = newName;
      };
  
      this.rewardStudent = function() {
        changeScoreBy(1);
      };
  
      this.penalizeStudent = function() {
        changeScoreBy(-1);
      };
  
      this.getScore = function() {
        return `${name}: ${privateScore}`;
      };
    }
  }
  
  // Harry instance
  const harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());  // Output: Harry: 4
  
  // Draco instance
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore());  // Output: Draco: -2
  