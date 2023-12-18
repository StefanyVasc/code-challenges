import { useState } from "react"
import "./AccordionItem.css"

interface AccordionItemProps {
  content: string
  title: string
  id: number
}

export function AccordionItem({ id, content, title }: AccordionItemProps) {
  const [checked, setChecked] = useState(false)

  const isFirstItemChecked = id === 1 ? !checked : checked

  return (
    <section>
      <div className="tab">
        <input
          onChange={() => setChecked(!checked)}
          type="checkbox"
          name="accordion"
          id={`${id}`}
          defaultChecked={isFirstItemChecked}
        />
        <label htmlFor={`${id}`} className="tabLabel">
          {title}
        </label>
        <div className="tabContent">
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}
