import type { PlasmoContentScript, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector(
    "#\\:4 > div > div.nH.aqK > div.Cq.aqL > div > div > div:nth-child(5)"
  )

const PlasmoInline = () => {
  return <button>Custom button</button>
}

export default PlasmoInline
