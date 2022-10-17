import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

export const getInlineAnchorList = () => document.querySelectorAll("td.yX.xY")

const PlasmoMountMultiple = () => {
  return <button>Inline Button</button>
}

export default PlasmoMountMultiple
