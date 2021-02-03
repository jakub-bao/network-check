import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const NetworkCheck = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
