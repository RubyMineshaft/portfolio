import React from 'react'

export default function MenuItem({label, target, menuActive, setMenuActive}) {
  return (
    <li onClick={() => setMenuActive(!menuActive)}>
      <a href={target}>{label}</a>
    </li>
  )
}
