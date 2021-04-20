import * as THREE from "three";
// import { EffectsComposer } from "postprocessing";
import { SketchConfig, SketchParams } from "@dank-inc/sketchy";

export type Frame = (params: Sketchy3DParams) => void;
export type Sketch = (params: Sketchy3DParams) => Frame;

export type Sketchy3DConfig = SketchConfig & {
  background?: [color: number, alpha?: number];
};

export type Sketchy3DParams = SketchParams & {
  // Context
  context: WebGLRenderingContext;

  // THREE
  scene: THREE.Scene;
  camera: THREE.Camera;
  // composer: EffectsComposer;
  renderer: THREE.Renderer;
  clock: THREE.Clock;

  // helporz
};
