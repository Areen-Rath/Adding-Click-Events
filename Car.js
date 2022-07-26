AFRAME.registerComponent("car", {
    schema: {
        rotate: {
            type: "number",
            default: 90
        }
    },
    tick: function() {
        window.addEventListener("click", e => this.data.rotate += 90)
        var rotation = this.el.getAttribute("rotation");
        rotation.y = this.data.rotate;
        this.el.setAttribute("rotation", {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        })
    }
});