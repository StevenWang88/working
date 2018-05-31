// import aContainer from 'bundle-loader?lazy!./containers/A'
//这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
import React from 'react'
import Bundle from './bundle'

// const A = (props) => (
//   <Bundle load={aContainer}>
//     {(Container) => <Container {...props}/>}
//   </Bundle>
// )

export default (component) => (props) => {
  return (
    <Bundle load={component}>
      {
        (Component) => Component ? <Component {...props} /> : false
      }
    </Bundle>
  )
}
