import { useState, useEffect } from 'react'
import { gateway as MoltinGateway } from '@moltin/sdk'

const moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  application: 'nextjs-moltin-now-2-example'
})

export default function() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const { data } = await moltin.Products.All()

      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h1>Moltin products</h1>

      {!!products && products.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  )
}
