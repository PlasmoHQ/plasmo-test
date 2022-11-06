import { Button } from "@Components/button"
import { Checkbox } from "@Components/checkbox"
import { Header } from "@Components/header"
import { Input } from "@Components/input"

function IndexPopup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <Header />
      <Checkbox />
      <Button />
      <Input />
    </div>
  )
}

export default IndexPopup
