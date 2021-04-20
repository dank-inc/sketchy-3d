import { Sketch, Sketchy3DParams, Sketchy3DConfig } from "./types";
import THREE from "three";
import { useCamera } from "./helpers/cam";
import { sin, cos, lerp } from "@dank-inc/sketchy/lib/maff";
// import { EffectsComposer } from "postprocessing";

export const createParams = (config: Sketchy3DConfig): Sketchy3DParams => {
  // Split up creating canvas element and creating params

  const id = config.containerId || "root";
  const rootElement = config.element || document.getElementById(id);

  if (!rootElement)
    throw new Error(
      `No Root Element Found! supply an 'element: HTMLElement' or 'id: string'`
    );

  const canvas = document.createElement("canvas");
  rootElement.appendChild(canvas);
  const context = canvas.getContext("webgl");

  if (!context) throw new Error(`cannot initialize canvas`);

  const renderer = new THREE.WebGLRenderer({ context });

  if (config.background) {
    const [color, alpha = 1] = config.background;
    renderer.setClearColor(color, alpha);
  }

  const scene = new THREE.Scene();
  const camera = useCamera("perspective");
  scene.add(camera);

  return {
    renderer,
    scene,
    camera,
    // composer: new EffectsComposer(),

    clock: new THREE.Clock(true),
    width: canvas.width,
    height: canvas.height,
    animated: config.animate,
    context,

    time: config.timeOffset || 0,
    dt: 0,
    startTime: +new Date(),

    TAU: Math.PI * 2,
    PI: Math.PI,
    abs: Math.abs,

    t: () => 0,

    sin,
    cos,
    lerp,
  };
};

// Type wrapper
export const create3dSketch = (sketch: Sketch) => sketch;
