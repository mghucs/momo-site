import Image from 'next/image'
//  URGENT CARE SUPPLIES
// 1) Medical Administration
// 2) Disposable Supplies
// 3) Cleaners & Sanitizers
// 4) Physical Therapy Supplies
// 5) Dental Clinic Supplies
// HOME HEALTH CARE
// 1) Bathroom Safety & Aids
// 2) Mobility
// 3) Health Monitoring


export default function Grid() {
    const items = [{
        id: 1,
        name: 'Medical Administration',
        alt: 'Medical Administration',
        image: "/imgs/medical_admin.png",
        width: 512,
        height: 512,
    },
    {
        id: 2,
        name: 'Disposable Supplies',
        alt: 'Disposable Supplies',
        image: "/imgs/disposable.png",
        width: 512,
        height: 512,
    },
    {
        id: 3,
        name: 'Cleaners & Sanitizers',
        alt: 'Cleaners & Sanitizers',
        image: "/imgs/sanitizers.png",
        width: 512,
        height: 512,
    },
    {
        id: 4,
        name: 'Physical Therapy Supplies',
        alt: 'Physical Therapy Supplies',
        image: "/imgs/physio.png",
        width: 512,
        height: 512,
    },
    {
        id: 5,
        name: 'Dental Clinic Supplies',
        alt: 'Dental Clinic Supplies',
        image: "/imgs/dental.png",
        width: 512,
        height: 512,
    },
    {
        id: 6,
        name: 'Bathroom Safety & Aids',
        alt: 'Bathroom Safety & Aids',
        image: "/imgs/bathroom.png",
        width: 512,
        height: 512,
    },
    {
        id: 7,
        name: 'Mobility',
        alt: 'Mobility',
        image: "/imgs/mobility.png",
        width: 512,
        height: 512,
    },
    {
        id: 8,
        name: 'Health Monitoring',
        alt: 'Health Monitoring',
        image: "/imgs/health_monitor.png",
        width: 512,
        height: 512,
    },
    ]
    return (
        <div className="grid grid-cols-4 gap-3">
            {items.map(item => (
                <div key={item.id}>
                    <Image className="row-span-3" src={item.image} width={item.width}
                        height={item.height} alt={item.alt}>
                    </Image>
                    {/* <div className="text-center row-span-1">
                        {item.name}
                    </div> */}
                    <p
                        className="bg-opacity-40 flex items-center justify-center text-center">
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    )
}