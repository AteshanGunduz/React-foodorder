// const firstFood = {
//   foodName: 'Salata',
//   storeName: "Let's Salad",
//   img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
// }
// const secondFood = {
//   foodName: 'Ekmek',
//   storeName: 'KaraFırın',
//   img: 'https://media.istockphoto.com/id/1373135952/tr/foto%C4%9Fraf/keto-bread-cooking-different-types-of-nut-flour-almond-hazelnut-cashew-and-baking.webp?b=1&s=170667a&w=0&k=20&c=GmZn9K3udl4watM8OzZYVkPYDFZ-yo3dS0SSnvyYbmA=',
// }



"use client"

import { foods } from "@/components/foods"
import { Food } from "@/components/Food"


const FoodOrder = () => {

  return (
  <>
  <h1>Order List</h1>
  <section className='foodOrder'>
    {foods.map((food)=>{
      return (
        <Food {...food} key={food.id} />
        )
    })}
  </section>
  </>
  )
}


export default FoodOrder
