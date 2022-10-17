import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

// Use overlay list only for element that doesn't "flicker". Otherwise, if the element "flickers," the csui do not know to unmount the component...
export const getOverlayAnchorList = () => document.querySelectorAll("td.yX.xY")

// document.querySelectorAll("div.aKz")

const PlasmoMountMultiple = ({ anchor }) => {
  return <button>Overlay Button for {anchor.element.innerText}</button>
}

export default PlasmoMountMultiple
