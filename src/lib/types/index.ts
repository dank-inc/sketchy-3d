import THREE from 'three'
import { SketchConfig } from '@dank-inc/sketchy'
import { Lerpr, Scaler, SinCosFn } from '@dank-inc/sketchy/lib/maff'

export type Frame = (params: Sketchy3DParams) => void
export type Sketch = (params: Sketchy3DParams) => Frame

export type Sketchy3DConfig = SketchConfig & {
  background?: [color: number, alpha?: number]
}

export type Sketchy3DParams = {
  // Context
  context: WebGLRenderingContext
  width: number
  height: number
  animated: boolean
  time: number
  dt: number
  startTime: number
  TAU: number
  PI: number
  abs: Math['abs']

  t: Scaler
  sin: SinCosFn
  cos: SinCosFn
  lerp: Lerpr

  // THREE
  scene: THREE.Scene
  camera: THREE.Camera
  // composer: EffectsComposer;
  renderer: THREE.Renderer
  clock: THREE.Clock

  // helporz
}
