import type {
  PlasmoContentScript,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://mail.google.com/*"]
}

export const getShadowHostId = () => "rfc-190-example-id"

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("h2 > div.aYF > span")

// Optional custom mounting, can omit:
export const mountShadowHost: PlasmoMountShadowHost = ({
  anchor,
  shadowHost // <- need to monitor the shadow host instead actually!
}) => {
  anchor.element.insertAdjacentElement("beforebegin", shadowHost)
}

const EmailComposeInline = () => {
  return <button>Custom button Composing</button>
}

export default EmailComposeInline
