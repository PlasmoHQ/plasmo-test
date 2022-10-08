import { Button, Checkbox, Input } from "@Components"

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
