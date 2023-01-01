import Home from "./home";

export default function CustomApp() {

    const data = {
        customerName:"nitesh khatri",
    }
  return (
    <>
        <Home userName={data}/>
    </>
  )
}
