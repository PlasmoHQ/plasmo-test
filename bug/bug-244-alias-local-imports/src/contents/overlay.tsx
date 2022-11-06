import { Button } from "@Components/button"
import { Checkbox } from "@Components/checkbox"
import { Input } from "@Components/input"

function SiteOverlay() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <Checkbox />
      <Button />
      <Input />
    </div>
  )
}

export default SiteOverlay
