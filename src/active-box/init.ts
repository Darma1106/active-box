import {BoxState} from './types'
export function updatePosition(target: HTMLDivElement | any, dx: number, dy: number): void {
  // keep the dragged position in the data-x/data-y attributes
  const x: number = (parseFloat(target.getAttribute('data-x') || '') || 0) + dx
  const y: number = (parseFloat(target.getAttribute('data-y') || '') || 0) + dy

  // translate the element
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x.toString())
  target.setAttribute('data-y', y.toString())
}

export function updateSize(target: HTMLDivElement | any, width: number, height: number) {
  target.style.width = `${width}px`
  target.style.height = `${height}px`
}

export function getBoxStatus(target: HTMLDivElement | any): BoxState {
  return {
    x: parseFloat(target.getAttribute('data-x') || '') || 0,
    y: parseFloat(target.getAttribute('data-y') || '') || 0,
    width: parseFloat(target.style.width),
    height: parseFloat(target.style.height)
  }
}
