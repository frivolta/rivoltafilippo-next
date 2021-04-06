import * as React from "react"
import { TimelineWrapper, TimelineItem } from "./style"

type TimelineItem = {
  title: string
  active: boolean
}
type TimelineProps = {
  timelineItems: TimelineItem[]
}

const Timeline: React.FunctionComponent<TimelineProps> = ({
  timelineItems,
}) => (
  <TimelineWrapper>
    {timelineItems.map(({ title, active }, key) => (
      <TimelineItem key={key} className={active ? "active" : "disabled"}>
        {title}
      </TimelineItem>
    ))}
  </TimelineWrapper>
)

export default Timeline
