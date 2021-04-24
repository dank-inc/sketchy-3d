import { createParams, load3dSketch } from './lib'
import cube from './sketches/cube'
import outrunmountains from './sketches/outrunmountains'
import spaceport from './sketches/spaceport'

const params = createParams({
  containerId: 'root',
  // dimensions: [600, 600],
  animate: true,
})

load3dSketch(cube, params)
