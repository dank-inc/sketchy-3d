import { BufferGeometry, Material, Mesh, ShaderMaterial } from 'three'

export const useMesh = <M extends Material>(geo: BufferGeometry, material: M) =>
  new Mesh<BufferGeometry, M>(geo, material)

export const useShaderMesh = (geo: BufferGeometry, material: ShaderMaterial) =>
  new Mesh<BufferGeometry, ShaderMaterial>(geo, material)
