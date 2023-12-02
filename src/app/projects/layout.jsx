import SecoundHeader from "@/components/SecoundHeader"


function layout({children}) {
  return (
    <div>
      <SecoundHeader currentPath={'Projects'}/>
      {children}
    </div>
  )
}

export default layout

