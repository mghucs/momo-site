export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    // use id and get info from database

    const item = {
        id: 3,
        image: "Image url from CDN",
        name: "Shower Safety Chair",
        price: 3,
        description: ["Sliding Shower Transfer Bench: Shower chair slides left and right along the frame to assist users in getting in and out of the tub",
            "Easy to Use: Simply place the shower and tub transfer bench in the shower area; versatile shower seat is reversible to accommodate both left and right entry into tub",
            "    Safety Features: The bathub transfer bench includes a safety belt, removable soap dish, and a safety net to catch dropped personal items and prevent bending",
            "Specifications: 18.5 inches in depth x 22.5 inches in width x 21-25 inches in height; overall length: 42 inches; maximum recommended weight: 300 lbs"
        ]
    }

    return (
        <div className="grid grid-flow-col grid-cols-3 gap-4">

            <div className="col-span-1">
                {item.image}
            </div>

            <div className="grid col-span-2">
                <h1 className="text-4xl w">{item.name}</h1>
                <div className="text-3xl">${item.price}</div>
                <ul className="list-disc ml-3">
                    {
                        item.description.map((bullet, index) => (
                            <li
                                className="space-y-4 text-gray-600"
                                key={index}>
                                {bullet}
                            </li>))}
                </ul>
            </div>
        </div>)
}