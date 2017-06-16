import wakt from 'wakt'
import styleable from 'styleable'

import css from './stack.css'

const Container = props =>
  <div
    className={props.css.container}
    style={{ backgroundColor: props.color }}
  />

export default styleable(css)(props =>
  <div className={props.css.stack}>
    <Container css={props.css} color="red" />
    <Container css={props.css} color="yellow" />
    <Container css={props.css} color="blue" />
    <Container css={props.css} color="red" />
    <Container css={props.css} color="red" />
    <Container css={props.css} color="red" />
  </div>
)
