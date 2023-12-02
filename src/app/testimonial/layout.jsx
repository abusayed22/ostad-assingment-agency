import SecoundHeader from "@/components/SecoundHeader"


function layout({children}) {
  return (
    <div>
      <SecoundHeader currentPath={'Testimonial'}/>
      {children}
    </div>
  )
}

export default layout
