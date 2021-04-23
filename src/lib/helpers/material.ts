import * as THREE from 'three'

export const useMaterial = (
  type: 'standard' | 'basic',
  color: number | string = 0xffffff,
) => {
  switch (type) {
    case 'standard':
      return new THREE.MeshStandardMaterial({
        color,
        flatShading: true,
      })
    case 'basic':
      return new THREE.MeshBasicMaterial({
        color,
      })
    default:
      break
  }
}

type Uniform = [key: string, value: number | THREE.Color]

const mapUniforms = (uniforms?: Uniform[]) => {
  if (!uniforms) return
  const result: Record<string, { value: number | THREE.Color | string }> = {}
  for (const [key, value] of uniforms) {
    result[key] = { value }
  }
  return result
}

type ShaderParams = {
  vert: string
  frag: string
}

export const useShader = (
  { frag, vert }: ShaderParams,
  uniforms?: Uniform[],
): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    fragmentShader: frag,
    vertexShader: vert,
    uniforms: mapUniforms(uniforms),
  })
}
