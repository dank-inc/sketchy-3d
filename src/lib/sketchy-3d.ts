import { Sketch, Sketchy3DParams, Sketchy3DConfig } from "./types";
import * as THREE from "three";
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
  const context = canvas.getContext("webgl");

  if (config.dimensions) {
    const [width, height] = config.dimensions;
    canvas.width = width || rootElement.clientWidth;
    canvas.height = height || rootElement.clientHeight;
  }

  if (!context) throw new Error(`cannot initialize canvas`);

  const scene = new THREE.Scene();
  // const camera = useCamera("perspective");
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = -5;
  camera.lookAt(new THREE.Vector3());

  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();

  const { width, height } = context.canvas;
  renderer.setSize(width, height);
  rootElement.appendChild(renderer.domElement);

  if (config.background) {
    const [color, alpha = 1] = config.background;
    renderer.setClearColor(color, alpha);
  }

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

export const load3dSketch = (sketch: Sketch, params: Sketchy3DParams) => {
  const frame = sketch(params);

  function animate() {
    params.time += 0.01;

    frame(params);
    requestAnimationFrame(animate);
  }

  animate();
};

// Type wrapper
export const create3dSketch = (sketch: Sketch) => sketch;
