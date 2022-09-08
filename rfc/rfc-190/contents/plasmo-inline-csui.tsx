import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

export const mountShadowHost = (shadowHost: HTMLDivElement) => {
  const docking = document.querySelector(
    "#\\:4 > div > div.nH.aqK > div.Cq.aqL > div > div > div:nth-child(5)"
  )
  docking.insertAdjacentElement("afterend", shadowHost)
}

const PlasmoInline = () => {
  return <button>Custom button</button>
}

export default PlasmoInline
