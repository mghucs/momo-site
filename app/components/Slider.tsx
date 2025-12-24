"use client";
import { Frame } from "./carousel/types";
import NRCCarousel from "./carousel/NRCCarousel";
import { FrameRenderedComponentPropsWithIndex } from "./carousel/types";
import clsx from "clsx";

export default function Slider() {
    const frames: Frame[] = [
        {
            desktop: {
                image: {
                    src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
                    width: 1792,
                    height: 600,
                    alt: "frog band",
                },
            },
            mobile: {
                image: {
                    src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
                    width: 640,
                    height: 800,
                    alt: "frog band",
                },
            },
        },
        {
            desktop: {
                image: {
                    src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
                    width: 1792,
                    height: 600,
                    alt: "waterfall",
                },
            },
            mobile: {
                image: {
                    src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
                    width: 640,
                    height: 800,
                    alt: "waterfall",
                },
            },
        },
        // {
        //     desktop: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/1goYV4rX04rRB1UjyEvrl5/3f1c5e43a410bf16f7b6d88a046963ef/space-desktop.png",
        //             width: 1792,
        //             height: 600,
        //             alt: "space",
        //         },
        //     },
        //     mobile: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/3M8NaXkRrPnHuuPohy4O0I/5baab66e340b7d40beef496014b82968/space-mobile.png",
        //             width: 640,
        //             height: 800,
        //             alt: "space",
        //         },
        //     },
        // },
        // {
        //     desktop: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/4FXdWBJ23JAx9x7cpM4bgy/0a420b0f5121f407025f626af0e7c1f9/urban-desktop.png",
        //             width: 1792,
        //             height: 600,
        //             alt: "urban",
        //         },
        //     },
        //     mobile: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/10xIMlsPTg0nPseAdGezdK/0138a095a8145392ccd9d34fb5c3e2a6/urban-mobile.png",
        //             width: 640,
        //             height: 800,
        //             alt: "urban",
        //         },
        //     },
        // },
        // {
        //     desktop: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/6FqTDslwGnDkwWW4SrtBJW/d06937d60528b96d1e6d0c013e79e472/tropical-desktop.png",
        //             width: 1792,
        //             height: 600,
        //             alt: "tropical",
        //         },
        //     },
        //     mobile: {
        //         image: {
        //             src: "https://images.ctfassets.net/j4gvxrppq5bi/2Wk5USyMsJHvSFkDtWW9xX/6129bb30c1c276d526bb689e65823e37/tropical-mobile.png",
        //             width: 640,
        //             height: 800,
        //             alt: "tropical",
        //         },
        //     },
        // },
    ];
    return <NRCCarousel frames={frames} breakpoint="md" noAutoPlay={false}
        controlsComponent={(props: FrameRenderedComponentPropsWithIndex) =>
            <>
                <button onClick={props.incrementCarousel} className="absolute right-2 bottom-1/2 bg-white rounded-sm px-2">
                    {">"}
                </button>
                <button onClick={props.decrementCarousel} className="absolute left-2 bottom-1/2 bg-white rounded-sm px-2">
                    {"<"}
                </button>
                <div className="flex space-x-2 justify-center">
                    {Array(2)
                        .fill(undefined)
                        .map((_, i) => (
                            <button className={clsx({ "text-red-700": props.currentIndex === i })} key={i} onClick={() => props.jumpTo(i)}>
                                {i + 1}
                            </button>
                        ))}
                </div>
            </>
        }>
    </NRCCarousel >

}
