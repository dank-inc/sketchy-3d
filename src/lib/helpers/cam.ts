import { PerspectiveCamera, OrthographicCamera } from 'three'

export const useCamera = (
  type: 'perspective' | 'ortho',
  ratio = 1,
): THREE.Camera => {
  return type === 'perspective'
    ? new PerspectiveCamera(55, ratio, 0.01, 1000)
    : new OrthographicCamera(-1, 1, 1, -1)
}
