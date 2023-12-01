import Image from "next/image"

Image

export const Food = (props) => {
    const { img, storeName, foodName} = props
    
    return (
      <article className='food'>
        <Image src={img} alt={foodName} />
        <h2>{foodName}</h2>
        <h4>{storeName}</h4>
      </article>
    )
  }
  