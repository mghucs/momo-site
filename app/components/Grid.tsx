import Image from 'next/image'

export default function Grid() {
    const items = [{
        id: 1,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 2,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 3,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 4,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 5,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 6,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 7,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 8,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 9,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    {
        id: 10,
        name: 'Althletic Braces & Supports',
        alt: 'Althletic Braces',
        image: "/Althletic-braces-and-supports-Button.png",
        width: 512,
        height: 512,
    },
    ]
    return (
        <div className="grid grid-cols-5 gap-4">
            {items.map(item => (
                <div key={item.id} className="...">
                    <Image src={item.image} width={item.width}
                        height={item.height} alt={item.alt}>
                    </Image>
                    <p
                        className="bg-opacity-40 flex items-center justify-center text-center">
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    )
}