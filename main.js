alert('1.3.0');
AFRAME.registerComponent('rotating-camera', {
  schema: {
    target: { type: 'selector' }
  },

  tick: function() {
    var currentRotation = this.el.object3D.rotation;
    var targetRotation = this.data.target.object3D.rotation;

    console.log(targetRotation);

    this.el.setAttribute('rotation', {
      x: -90,
      y: THREE.Math.radToDeg(targetRotation.y),
      z: 0
    });
  }
});
