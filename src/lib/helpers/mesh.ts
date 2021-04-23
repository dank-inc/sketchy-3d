import * as THREE from 'three'

export const useMesh = <M extends THREE.Material>(
  geo: THREE.BufferGeometry,
  material: M,
) => new THREE.Mesh<THREE.BufferGeometry, M>(geo, material)

export const useShaderMesh = (
  geo: THREE.BufferGeometry,
  material: THREE.ShaderMaterial,
) => new THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>(geo, material)
