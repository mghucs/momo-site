import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductsType } from '@/components/types'

const PRODUCTS : ProductsType = {
    1: {
        id: 1,
        name: "Canon camera",
        price: 89,
        image: "/assets/img/camera-1.png",
        category: "Cameras",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.",
        rating: 4.5,
        featured: true
    },
    2: {
        id: 2,
        name: "Wireless headphones",
        price: 39,
        image: "https://source.unsplash.com/188x173?wireless-headphones",
        category: "Accessories",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.",
        rating: 3.5,
        featured: false
    },
    3: {
        id: 3,
        name: "Smartwatch",
        price: 199,
        image: "https://source.unsplash.com/188x173?watch",
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.",
        rating: 5,
        featured: false
    },
    4: {
        id: 4,
        name: "Gaming Mouse",
        price: 79,
        image: "https://source.unsplash.com/188x173?mouse",
        category: "Mouse",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.",
        rating: 4.5,
        featured: false
    },
    5:{
        id: 5,
        name: "Tablet",
        price: 499,
        image: "https://source.unsplash.com/188x173?tablet",
        category: "Tablets",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.",
        rating: 3.5,
        featured: false
    },
}
 
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
  
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     res.status(200).json( id );
//   }
// }


// type ResponseData = {
//   message: string | undefined
// }
// export async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const { id } = req.query;
//   res.status(200).json({ message: (id? id[0] : undefined) })
// }

export async function GET(req: Request, 
  { params }: { params: Promise<{ id: string }> }){
    const { id } = await params;
    return new Response(JSON.stringify({ message: PRODUCTS[id as unknown as number] }),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}

// export { handler as GET }