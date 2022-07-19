import { Navbar } from "../components/Navbar";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json"


export function Store () {
  return (
    <>

  <h1>Store</h1>
  <div className="flex-row m-2 max-w-xs grid-cols-3">
    {storeItems.map(item => (
      <div key={item.id}className="flex-col">
        <StoreItem {...item}/>
        </div>
    ))}
  </div>
    </>
  )
}