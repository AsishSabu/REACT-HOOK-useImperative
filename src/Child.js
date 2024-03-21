import React,{useRef,forwardRef,useImperativeHandle} from 'react'

const Child=forwardRef((props,ref)=>{
  const childRef=useRef()

  useImperativeHandle(ref,()=>({
    focus(){
      childRef.current.focus()
    },
    blur(){
      childRef.current.blur()
    }
  }))
 

  return(
    <div>
     <input ref={childRef}/>
    </div>
  )
})
export default Child