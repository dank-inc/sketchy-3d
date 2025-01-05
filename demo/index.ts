import {
  create3dSketch,
  createParams,
  useLight,
  useMesh,
  useStandardMaterial,
  useBox,
  useAmbient,
  start3dSketch,
} from '@/lib'

import { SuperMouse } from '@dank-inc/super-mouse'

const params = createParams({
  element: document.getElementById('root')!,
  // dimensions: [600, 600],
  animate: true,
  data: {
    clicked: false,
  },
  // background: [0xffffff, 0],
})

const sketch = create3dSketch(
  ({ scene, camera, renderer, PI, TAU, container, sin, cos, data }) => {
    const ambient = useAmbient(0xffffff, 0)
    scene.add(ambient)

    const mouse = new SuperMouse({ element: container, scrollScale: 0.001 })
    const light = useLight(0xffffff, 1, [1, 1, 1])
    scene.add(light)

    const box = useMesh(useBox([1, 1, 1]), useStandardMaterial(0xffff00))
    box.position.set(0, 0, 0)
    box.rotation.y = TAU * 0.05
    scene.add(box)

    light.lookAt(box.position)

    mouse.onScroll = ({ deltaY }) => {
      box.rotation.y -= deltaY
    }

    data.clicked = false

    return ({ time, dt }) => {
      // box.rotation.y += dt * 0.5
      // box.position.y = 1 + Math.sin(time) * 1

      box.rotation.y += mouse.scrollInertia * 0.0001

      if (mouse.scrollInertia >= 0) {
        light.color.set(0xffffff)
        light.intensity = 1 + mouse.scrollInertia * 0.01
        ambient.intensity = 0 + mouse.scrollInertia * 0.0001
        box.scale.set(
          1 + mouse.scrollInertia * 0.002,
          1, // + mouse.scrollInertia * 0.001,
          1 + mouse.scrollInertia * 0.002,
        )
      } else {
        light.color.set(0xff0000)
        box.scale.y = 1 + mouse.scrollInertia * 0.001
        ambient.intensity = sin(time, 1, 0.2, 0.5)
      }

      light.lookAt(box.position)
      mouse.update()
      renderer.render(scene, camera)
    }
  },
)

start3dSketch(sketch, params)
