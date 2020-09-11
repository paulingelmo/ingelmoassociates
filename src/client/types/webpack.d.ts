declare module '*.sass' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module 'express-history-api-fallback'
