import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

const PlasmoMountMultiple = () => {
  return <button>Mount Multiple button</button>
}

export default PlasmoMountMultiple
