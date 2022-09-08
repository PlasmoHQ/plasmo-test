import { useStorage } from "@plasmohq/storage"
// import type { PlasmoContentScript } from "plasmo"

// export const config: PlasmoContentScript = {
//   matches: ["https://www.plasmo.com/*"] 
// }

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)


const injectMountPoint = ()=>{
  const mountPoint = document.createElement('div')

  mountPoint.setAttribute('id','plasmo-mount-point')
  document.body.appendChild(mountPoint)
}

export const getRootContainer = () => {
  return document.querySelector("#plasmo-mount-point")
}

window.addEventListener('load',injectMountPoint)

const PlasmoOverlay = () => {
  const [openCount] = useStorage<number>({key:"open-count",area: 'local'})
  const [checked] = useStorage<boolean>("checked")
  const [serialNumber] = useStorage<string>("serial-number")

  return (
    <span
      style={{
        padding: 12,position: 'fixed', left: '20px',top:'20px', backgroundColor: 'orange'
      }}>
      <h1>HELLO WORLD ROOT CONTAINER</h1>
      <input type={"checkbox"} readOnly checked={checked} />
      <p>
        Open: {openCount}
        <i>#{serialNumber}</i>
      </p>
    </span>
  )
}

export default PlasmoOverlay
