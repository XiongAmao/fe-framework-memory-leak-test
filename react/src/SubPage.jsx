import React, { useEffect } from 'react'

const init = () => {
  const list = []
  for (let i = 0; i < 100000; i++) {
    list.push({
      label: 'Item ' + i,
      value: i
    })
  }
  return list
}

export default () => {
  const [list, setList] = React.useState(init())
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(list)
    }, 3000)
    return () => {
      // 对比这里
      clearTimeout(timer)
    }
  }, [])
  return <div>sub component</div>
}
