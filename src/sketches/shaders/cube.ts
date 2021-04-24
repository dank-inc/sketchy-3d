import glslify from 'glslify'

export const vert = glslify`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
}
`

export const frag = glslify`
varying vec2 vUv;

void main() {
  vec3 fragColor = vec3(vUv.x);

  gl_FragColor = vec4(fragColor, 0.1);
}
`
