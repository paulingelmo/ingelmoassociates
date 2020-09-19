export const debounce = (fn: (...params: any[]) => void) => {
  let frameID: number

  return (...params: any[]) => {
    if (frameID) {
      cancelAnimationFrame(frameID)
    }

    frameID = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}
