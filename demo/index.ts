import {
  create3dSketch,
  createParams,
  load3dSketch,
  useLight,
  useMesh,
  useStandardMaterial,
  useBox,
} from '../src/lib'

const params = createParams({
  element: document.getElementById('root')!,
  // dimensions: [600, 600],
  animate: true,
  // background: [0xffffff, 0],
})

const sketch = create3dSketch(
  ({ scene, camera, renderer, PI, TAU, context }) => {
    // scene.add(useAmbient())
    console.log(context.canvas)
    const light = useLight(0xffffff, 1, [1, 1, 1])
    scene.add(light)

    const box = useMesh(useBox([1, 1, 1]), useStandardMaterial(0x00ff00))
    box.position.set(0, 0, 0)
    box.rotation.y = TAU * 0.05
    scene.add(box)

    light.lookAt(box.position)

    return ({ time, dt }) => {
      // box.rotation.y += dt * 0.5
      // box.position.y = 1 + Math.sin(time) * 1

      light.lookAt(box.position)
      renderer.render(scene, camera)
    }
  },
)

load3dSketch(sketch, params)
