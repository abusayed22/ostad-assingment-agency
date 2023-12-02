import SecoundHeader from "@/components/SecoundHeader"


function layout({children}) {
  return (
    <div>
      <SecoundHeader currentPath={'Service'}/>
      {children}
    </div>
  )
}

export default layout