import { Sketch, Sketchy3DParams, Sketchy3DConfig } from './types'
import * as THREE from 'three'
import { useCamera } from './helpers/cam'
import { sin, cos, lerp } from '@dank-inc/sketchy/lib/maff'

export const createParams = (config: Sketchy3DConfig): Sketchy3DParams => {
  // Split up creating canvas element and creating params

  const id = config.containerId || 'root'
  const rootElement = config.element || document.getElementById(id)

  if (!rootElement)
    throw new Error(
      `No Root Element Found! supply an 'element: HTMLElement' or 'id: string'`,
    )

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('webgl')

  canvas.width = config.dimensions?.[0] || rootElement.clientWidth
  canvas.height = config.dimensions?.[1] || rootElement.clientHeight

  if (!context) throw new Error(`cannot initialize canvas`)

  const { width, height } = context.canvas

  const scene = new THREE.Scene()
  const camera = useCamera('perspective', width / height)
  camera.position.y = 1.5
  camera.position.z = -6
  camera.lookAt(new THREE.Vector3())
  scene.add(camera)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(width, height)
  rootElement.appendChild(renderer.domElement)

  if (config.background) {
    const [color, alpha = 1] = config.background
    renderer.setClearColor(color, alpha)
  } else {
    renderer.setClearColor(0x000000, 0)
  }

  return {
    container: rootElement,
    renderer,
    scene,
    camera,
    // composer: new EffectsComposer(),

    clock: new THREE.Clock(true),
    width: canvas.width,
    height: canvas.height,
    animated: !!config.animate,
    context,

    time: config.timeOffset || 0,
    dt: 0,
    startTime: performance.now(),

    TAU: Math.PI * 2,
    PI: Math.PI,
    abs: Math.abs,

    t: () => 0,

    sin,
    cos,
    lerp,
  }
}

export const start3dSketch = (sketch: Sketch, params: Sketchy3DParams) => {
  const frame = sketch(params)
  let ot = +new Date()

  function animate() {
    const now = +new Date()
    const dt = (now - ot) / 1000
    params.time += dt
    ot = now

    frame({
      ...params,
      dt,
    })
    requestAnimationFrame(animate)
  }

  animate()
}

// Type wrapper
export const create3dSketch = (sketch: Sketch) => sketch
