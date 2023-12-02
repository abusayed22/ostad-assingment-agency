import SecoundHeader from "@/components/SecoundHeader"


function layout({children}) {
  return (
    <div>
        <SecoundHeader currentPath={'Team'}/>
      {children}
    </div>
  )
}

export default layout
