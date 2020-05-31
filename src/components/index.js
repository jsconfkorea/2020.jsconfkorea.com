const container = document.getElementById('__next')
const canvas = document.getElementById('three')

let colors = [0xefc325, 0x00e168, 0xefc325, 0xf5ba67, 0xff7235, 0x033c4a, 0x375869]

let materials = []
for (let i = 0; i < colors.length; i++) {
  materials.push(new THREE.MeshBasicMaterial({ color: colors[i] }))
}

function random(a, b) {
  if (b) return Math.random() * (b - a) + a
  else return Math.random() * a
}

let SCREEN_WIDTH = container.offsetWidth
let SCREEN_HEIGHT = container.offsetHeight
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT
let frustumSize = 7

let scene = new THREE.Scene()
let camera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2,
  (frustumSize * aspect) / 2,
  frustumSize / 2,
  frustumSize / -2,
  -50,
  50,
)

let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvas })

camera.position.y = 3
let frameCount = 0
let speed = 0.005

let isSingle = true
let isStart = false
let animate = function () {
  if (container.offsetHeight != 0 && !isStart) {
    setScreen()
    isStart = true
  }

  // if (isSingle && frameCount % 300 == 1) {
  //   resetMap()
  //   // if (resetTypo) resetTypo()
  // }
  requestAnimationFrame(animate)
  camera.position.x = Math.cos(frameCount * speed) * 5
  camera.position.z = Math.sin(frameCount * speed) * 5
  camera.lookAt(scene.position)
  renderer.setClearColor(0x000000, 0)
  renderer.render(scene, camera)

  frameCount++
}

function setScreen() {
  SCREEN_WIDTH = container.offsetWidth
  SCREEN_HEIGHT = container.offsetHeight
  aspect = SCREEN_WIDTH / SCREEN_HEIGHT
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
  camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    -50,
    50,
  )
  camera.position.y = 3
}
let map = new Map_(2.5)
resetMap()
function resetMap() {
  map.clear()
  map.generate(0, 0)
}

animate()
