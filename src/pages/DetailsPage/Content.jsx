import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import Product from './Components/Product'

function Content() {
    // url den parametrenin çekilmesi
    const param = useParams()
    // data arr oluşturulması
    const [singleData , setSingleData] = useState()
    // loading componenti tanımlama
    const [loading,setLoading] = useState(false)

    // datanın fetch ile çekilmesi
    useEffect(() => {
        setLoading(true)
        const response = async () => {
            const data = await fetch(`https://dummyjson.com/products/${param.id}`)
                .then(res => res.json())
                .then(dt => setSingleData(dt));
            setLoading(false)
        }
        response()
    },[])

    console.log(singleData)
  return (
    <div>
        {
            // loading varmı kontrolü
            loading?
                <Loading />
            :
            // data sağlıklımı kontrolü
                singleData?
                // data varsa
                <Product dt={singleData} />
                    :
                // data yoksa
                <strong>ürün bulunamadı</strong>
        }
    </div>
  )
}

export default Content