import type { PlasmoContentScript } from "plasmo"
import { createRoot } from "react-dom/client"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

const getDocking = () => document.querySelector("h2 > div.aYF > span")

const mountState = {
  observer: null as MutationObserver,
  docking: null as Element,
  dockingContainer: null as Element
}

export const mountShadowHost = (shadowHost: Element) => {
  mountState.docking.insertAdjacentElement("beforebegin", shadowHost)
}

export const render = (createRootContainer, MountContainer) => {
  const _render = async () => {
    const rootContainer = (await createRootContainer()) as HTMLDivElement
    const root = createRoot(rootContainer)
    root.render(<MountContainer />)

    mountState.dockingContainer = rootContainer

    mountState.observer.observe(rootContainer.parentNode, {
      childList: true
    })
  }

  mountState.observer = new MutationObserver((mutations) => {
    if (!!mountState.docking) {
      const isItemsRemoved = mutations.some((m) => m.removedNodes.length > 0)

      if (!isItemsRemoved) {
        return
      }

      for (const { removedNodes } of mutations) {
        for (const node of removedNodes) {
          console.log(node)

          if (
            node.isEqualNode(mountState.dockingContainer) ||
            node.contains(mountState.dockingContainer)
          ) {
            mountState.docking = null
            mountState.dockingContainer = null
            mountState.observer.observe(document.body, {
              childList: true
            })
            return
          }
        }
      }
    } else {
      const isItemsAdded = mutations.some((m) => m.addedNodes.length > 0)
      if (!isItemsAdded) {
        return
      }

      const docking = getDocking()
      if (!docking) {
        return
      }

      mountState.docking = docking
      mountState.observer.disconnect()
      _render()
    }
  })

  mountState.observer.observe(document.body, {
    childList: true
  })
}

const EmailComposeInline = () => {
  return <button>Custom button Composing</button>
}

export default EmailComposeInline
