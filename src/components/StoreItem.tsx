import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string,

}

export function StoreItem({id, name, price, imgUrl}:StoreItemProps){
  const quantity = 0;
  return (
    <>
        <div>
      <img className="top " src={imgUrl}
      height="200px"
      style={{ objectFit: "cover"}}/>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="m-1 pb-2">{name}</span>
          <span className="">${price}</span>
        </div>
      </div>
    </>


  )

}