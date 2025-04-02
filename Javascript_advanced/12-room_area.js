const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
      return this.width * this.length;
    }
  };
  
  // Binding getArea function to the roomDimensions object
  const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
  
  // Test bound function
  console.log(boundGetArea()); // Should log 5000
  