import imgCapa from "../assets/capa.jpg"
import imgCapa3 from "../assets/capa3.png"
export function Home() {
  return (
    <>
      <h1>Rock Music</h1>
      <img src={imgCapa}  className="img-fluid mb-4" alt="foto loja"></img>
      <img src={imgCapa3}  className="img-fluid mb-4" alt="foto loja"></img>

    </>

  )
}