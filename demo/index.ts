import {
  create3dSketch,
  createParams,
  useAmbient,
  load3dSketch,
  useLight,
} from '../src/lib'

console.log('hello')

const params = createParams({
  containerId: 'root',
  // dimensions: [600, 600],
  animate: true,
})

const sketch = create3dSketch(({ scene, camera, renderer }) => {
  scene.add(useAmbient())
  scene.add(useLight(0xffffff, 0.4, [-1, 1, -1]))

  return ({ time, dt }) => {
    renderer.render(scene, camera)
  }
})

load3dSketch(sketch, params)
