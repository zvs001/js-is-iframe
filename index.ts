function isInIFrame(): boolean {
  return window.self !== window.top
}

export { isInIFrame }
export default isInIFrame
