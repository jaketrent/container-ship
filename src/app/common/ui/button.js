import wakt from 'wakt'
import styleable from 'styleable'

import css from './button.css'

const rmSystemProps = props => {
  const { css, className, children, ...rest } = props
  return rest
}

export default styleable(css)(props =>
  <button className={props.css.button} {...rmSystemProps(props)}>
    {props.children}
  </button>
)
