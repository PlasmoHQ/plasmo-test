import { Button } from "~components/button"
import { Checkbox } from "~components/checkbox"
import { Input } from "~components/input"

function IndexPopup() {
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

export default IndexPopup
