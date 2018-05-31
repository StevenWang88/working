import LazyLoad from './lazyLoad'
import React from 'react'
export default (component) => (locals) => {
    return (
        <LazyLoad load={component}>
           {
               (Component) => Component ? <Component {...locals} /> : false
           }
        </LazyLoad>
    )
}
