import React from 'react'

export default function BreakedText({
  text,
  rule
}: {
  text: string,
  rule: RegExp
}) {
  const textArray = text.split(rule).map((item, index) => (
    <React.Fragment key={index}>
      {item.match(rule) ? <br /> : item}
    </React.Fragment>
  ))

  return textArray
}
