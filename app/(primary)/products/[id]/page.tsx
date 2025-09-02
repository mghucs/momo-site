// import { Broadcum } from '@/common/components/layouts/Broadcrum'
// import Footer from '@/common/components/layouts/Footer'
// import HeaderBottom from '@/common/components/layouts/HeaderBottom'
// import HeaderTop from '@/common/components/layouts/HeaderTop'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const ProductDetail = async ({ params }: { params: Promise<{id: string }>}) => {

    const { id } = await params;
    return (
        <main className="bg-white">
            {/* <HeaderTop />
            <HeaderBottom /> */}
            {/* <Broadcum /> */}
            <ProductDetails id={id} />
            {/* <Footer /> */}
        </main>
    )
}

export default ProductDetail