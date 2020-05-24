class Shape {
  constructor(option, position = new THREE.Vector3(), rotation = new THREE.Vector3()) {
    this.option = option;

    this.draw();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.copy(position);

    this.position = this.mesh.position;
  }

  draw() { }
}

class Box extends Shape {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.geometry = new THREE.Geometry();
    this.geometry.vertices = [
      new THREE.Vector3(-this.option[0] / 2, 0, -this.option[1] / 2),
      new THREE.Vector3(this.option[0] / 2, 0, -this.option[1] / 2),
      new THREE.Vector3(this.option[0] / 2, 0, this.option[1] / 2),
      new THREE.Vector3(-this.option[0] / 2, 0, this.option[1] / 2),
      new THREE.Vector3(-this.option[2] / 2, this.option[4], -this.option[3] / 2),
      new THREE.Vector3(this.option[2] / 2, this.option[4], -this.option[3] / 2),
      new THREE.Vector3(this.option[2] / 2, this.option[4], this.option[3] / 2),
      new THREE.Vector3(-this.option[2] / 2, this.option[4], this.option[3] / 2)
    ];

    this.color = new THREE.Color(0x000000);
    this.materialIndex = 0;
    this.geometry.computeFaceNormals();
    this.geometry.computeVertexNormals();
    this.material = this.option[5];

    this.initFace([3, 2, 1, 0]);
    this.initFace([4, 5, 1, 0]);
    this.initFace([5, 6, 2, 1]);
    this.initFace([6, 7, 3, 2]);
    this.initFace([7, 4, 0, 3]);
    this.initFace([7, 6, 5, 4]);

    let geo = this.geometry;
    this.geometry = new THREE.BufferGeometry().fromGeometry(this.geometry);
    geo.dispose();
  }

  initFace(array) {
    let normal = new THREE.Vector3(0, 0, 1);
    let face1 = new THREE.Face3(array[0], array[1], array[2], normal, this.color, this.materialIndex);
    let face2 = new THREE.Face3(array[2], array[3], array[0], normal, this.color, this.materialIndex);
    this.geometry.faces.push(face1);
    this.geometry.faces.push(face2);
  }
}

class Part {
  constructor(option, position, rotation) {
    this.group = new THREE.Group();
    this.position = this.group.position;
    this.rotation = this.group.rotation;

    this.option = option;
    this.position.copy(position);
    this.rotation.x = rotation.x;
    this.rotation.y = rotation.y;
    this.rotation.z = rotation.z;

    this.draw();
  }

  add(shape) {
    this.group.add(shape.mesh);
  }

  draw() { }
}



class Ground extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.add(new Box([this.option.width, this.option.depth, this.option.width, this.option.depth, 0.1, materials[0]], new THREE.Vector3(0, 0, 0)));
    this.add(new Box([this.option.width, this.option.depth, this.option.width, this.option.depth, 0.05, materials[1]], new THREE.Vector3(0, 0.1, 0)));
  }
}

class Body extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.add(new Box([this.option.width, this.option.depth, this.option.width, this.option.depth, this.option.height, materials[0]], new THREE.Vector3(0, 0.15, 0)));
  }
}

class FloorDivision extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.add(new Box([this.option.width, this.option.depth, this.option.width, this.option.depth, this.option.height, materials[4]], new THREE.Vector3(0, 0.15, 0)));
  }
}

class Window extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.add(new Box([0.2, 0.01, 0.2, 0.01, 0.4, materials[6]], new THREE.Vector3(0, 0.15, 0)));
    this.add(new Box([0.22, 0.05, 0.22, 0.05, 0.05, materials[2]], new THREE.Vector3(0, 0.15, 0)));
    this.add(new Box([0.05, 0.05, 0.05, 0.05, 0.4, materials[2]], new THREE.Vector3(0.11, 0.15, 0)));
    this.add(new Box([0.05, 0.05, 0.05, 0.05, 0.4, materials[2]], new THREE.Vector3(-0.11, 0.15, 0)));
    this.add(new Box([0.22, 0.05, 0.22, 0.05, 0.05, materials[2]], new THREE.Vector3(0, 0.15 + 0.4, 0)));
  }
}

class Door extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    this.add(new Box([0.2, 0.01, 0.2, 0.01, 0.5, materials[5]], new THREE.Vector3(0, 0.15, 0)));
    this.add(new Box([0.22, 0.1, 0.22, 0.01, 0.05, materials[4]], new THREE.Vector3(0, 0.15 + 0.5, 0)));
  }
}

class Roof extends Part {
  constructor(option, position, rotation) {
    super(option, position, rotation);
  }

  draw() {
    if (Math.random() > 0.5) {
      this.add(new Box([this.option.width, this.option.depth - 0.01, 0, this.option.depth - 0.01, 0.3, materials[4]], new THREE.Vector3(0, 0.15, 0)));
      this.add(new Box([this.option.width - 0.01, this.option.depth, 0, this.option.depth, 0.3 - 0.01, materials[0]], new THREE.Vector3(0, 0.15, 0)));
    }
    else
      this.add(new Box([this.option.width, this.option.depth, 0, 0, 0.3, materials[4]], new THREE.Vector3(0, 0.15, 0)));
  }
}

class Building {
  constructor(position) {
    this.group = new THREE.Group();
    this.group.position.copy(position);
    let angle = 0;
    let ran = Math.random();

    if (ran > 0.75) angle = Math.PI + Math.PI / 2;
    else if (ran > 0.5) angle = Math.PI;
    else if (ran > 0.25) angle = Math.PI / 2;

    this.group.rotation.y = angle;

    scene.add(this.group);
  }

  add(part) {
    this.group.add(part.group);
  }

  generate() {

    this.add(new Ground({ width: 2, depth: 2 }, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)));

    let floor = Math.floor(random(1, 4));
    let x = 0;
    let z = 0;
    let y = 0;
    let minSize = 0.5;
    let maxWidth = 1.5;
    let maxDepth = 1.5;
    for (let f = 0; f < floor; f++) {
      if (f > 0) this.add(new FloorDivision({ width: maxWidth + 0.01, depth: maxDepth + 0.01, height: 0.1 }, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 0, 0)));


      let height = random(0.7, 1.2);
      let prevWidth = maxWidth;
      let prevDepth = maxDepth;
      maxWidth = random(minSize, maxWidth);
      maxDepth = random(minSize, maxDepth);

      let w_h = (prevWidth - maxWidth) / 2;
      let d_h = (prevDepth - maxDepth) / 2;
      x += random(-w_h, w_h);
      z += random(-d_h, d_h);

      this.add(new Body({ width: maxWidth, depth: maxDepth, height }, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 0, 0)));
      let this_ = this;
      if (f == 0) this.add(new Door({}, new THREE.Vector3(x, y, z + maxDepth / 2), new THREE.Vector3(0, 0, 0)));
      else {
        this.setWindow(maxWidth, function (m) {
          this_.add(new Window({}, new THREE.Vector3(x + m, y + 0.25, z + maxDepth / 2), new THREE.Vector3(0, 0, 0)));
        });

      }
      this.setWindow(maxWidth, function (m) {
        this_.add(new Window({}, new THREE.Vector3(x + m, y + 0.25, z - maxDepth / 2), new THREE.Vector3(0, 0, 0)));
      });
      this.setWindow(maxDepth, function (m) {
        this_.add(new Window({}, new THREE.Vector3(x + maxWidth / 2, y + 0.25, z + m), new THREE.Vector3(0, Math.PI / 2, 0)));
        this_.add(new Window({}, new THREE.Vector3(x - maxWidth / 2, y + 0.25, z + m), new THREE.Vector3(0, Math.PI / 2, 0)));
      });

      y += height;
    }

    this.add(new Roof({ width: maxWidth, depth: maxDepth }, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 0, 0)));
  }

  setWindow(length, callback) {
    let gap = 0.5;
    let number = Math.floor(length / gap);
    let x = -gap * (number - 1) * 0.5;
    for (let i = 0; i < number; i++) {
      callback(x);
      x += gap;
    }
  }
}

class Map_ {
  constructor(gap) {
    this.gap = gap;
  }

  generate(col, row) {
    let col_half = this.gap * col / 2;
    let row_half = this.gap * row / 2;
    for (let z = -row_half; z <= row_half; z += this.gap) {
      for (let x = -col_half; x <= col_half; x += this.gap) {
        let b = new Building(new THREE.Vector3(x, -1, z));
        b.generate();
      }
    }
  }

  clear() {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  }
}

