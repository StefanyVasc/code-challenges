import IconStar from "../assets/IconStar"
import { data } from "../utils/data"
import "./Accordion.css"
import { AccordionItem } from "./AccordionItem"

export function Accordion() {
  return (
    <main>
      <div className="banner" />

      <div className="accordionContainer">
        <header className="accordionHeader">
          <IconStar />
          <p>FAQs</p>
        </header>
        <ul className="accordionList">
          {data.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              content={item.content}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
