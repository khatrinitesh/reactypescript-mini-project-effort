import React,{useState} from 'react'

interface IProduct {
    name: string
    image: string
    price: number
 }

const initialProducts:IProduct[] =[ { name: 'keyboard',
   image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
   price: 200
 },
 { 
   name: 'headphones',
   image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
   price: 300
 },
 { 
   name: 'mouse',
   image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
   price: 100
 }
]

export default function CustomApp() {

    const [products, setProducts] = useState(initialProducts)
    const [isProductBought, setIsProductBought] = useState(false)
    const [productBought, setProductBought] = useState({name:'', image: '', price: 0})

    const handlePurchase = (product:IProduct) => {
        setProductBought(product)
        setIsProductBought(true)
      }
  return (
    <div>
         <h1>Tiny Store</h1>
         {(isProductBought) ? 
      (<div>
        <h1> You purchased a {productBought.name} for ${productBought.price}</h1>
      </div>) : 
      (
      <div className={'App-container'}>
        {
      products.map(product =>  {
        return (
        
          <div className={'App-item'}>
            <div className={'Product-name-container'}>
                <h3> {product.name}</h3> 
                <button className={'App-button'} 
                   onClick={
                  () => handlePurchase(product)
                  }>
                  buy</button>
            </div>
            <div><img src={product.image} 
                alt={product.name} /></div>
            <div className={'Price-item'}>
              price ${product.price}
            </div>
        
          </div>       
        )
        
        })
        
      }
       </div>  
      )}  
    </div>
  )
}


