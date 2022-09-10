import type { PlasmoContentScript } from "plasmo"
import { createRoot } from "react-dom/client"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

const getDocking = () => document.querySelector("h2 > div.aYF > span")

const mountState = {
  observer: null as MutationObserver,
  docking: null as Element,
  hostSet: new Set<Element>(),
  shadowHost: null as Element
}

export const mountShadowHost = (shadowHost: Element) => {
  // <- need to monitor the shadow host instead actually!
  mountState.docking.insertAdjacentElement("beforebegin", shadowHost)
  mountState.shadowHost = shadowHost
}

const isMounted = (el: Element) =>
  el?.getRootNode({ composed: true }) === document

export const render = (createRootContainer, MountContainer) => {
  const _render = async () => {
    const rootContainer = (await createRootContainer()) as HTMLDivElement
    const root = createRoot(rootContainer)
    root.render(<MountContainer />)
  }

  mountState.observer = new MutationObserver(() => {
    if (!isMounted(mountState.shadowHost)) {
      const docking = getDocking()
      if (!docking) {
        return
      }

      mountState.docking = docking
      _render()
    }
  })

  mountState.observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

const EmailComposeInline = () => {
  return <button>Custom button Composing</button>
}

export default EmailComposeInline
