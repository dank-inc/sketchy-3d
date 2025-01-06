import { Camera, PerspectiveCamera, OrthographicCamera } from 'three'

export const useCamera = (type: 'perspective' | 'ortho', ratio = 1): Camera => {
  return type === 'perspective'
    ? new PerspectiveCamera(55, ratio, 0.01, 1000)
    : new OrthographicCamera(-1, 1, 1, -1)
}

export const usePerspectiveCamera = (ratio = 1): PerspectiveCamera => {
  return new PerspectiveCamera(55, ratio, 0.01, 1000)
}

export type OrthographicCameraBounds = [number, number, number, number]

export const useOrthographicCamera = (
  bounds: OrthographicCameraBounds = [-1, 1, 1, -1],
): OrthographicCamera => {
  return new OrthographicCamera(...bounds)
}
