"use client";
import { useEffect } from "react";
import { Frame } from "./carousel/types";
import NRCCarousel from "./carousel/NRCCarousel";
import { NRCCarouselProps } from "./carousel/types";

// export default function Slider() {
//     useEffect(() => {
//         const init = async () => {
//             const { Carousel, initTWE } = await import("tw-elements");
//             initTWE({ Carousel });
//         };
//         init();
//     }, []);
//     return (
//         <div
//             id="carouselExampleControls"
//             className="relative"
//             data-twe-carousel-init
//             data-twe-ride="carousel">
//             {/* Carousel items */}
//             <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//                 {/* First item */}
//                 <div
//                     className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     data-twe-carousel-item
//                     data-twe-carousel-active>
//                     <img
//                         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
//                         className="block w-full"
//                         alt="Wild Landscape" />
//                 </div>
//                 {/* Second item */}
//                 <div
//                     className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     data-twe-carousel-item>
//                     <img
//                         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
//                         className="block w-full"
//                         alt="Camera" />
//                 </div>

//                 {/* Third item */}
//                 <div
//                     className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     data-twe-carousel-item>
//                     <img
//                         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
//                         className="block w-full"
//                         alt="Exotic Fruits" />
//                 </div>
//             </div>
//             {/* Carousel controls - prev item */}
//             {/* <button
//                 className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//                 type="button"
//                 data-twe-target="#carouselExampleControls"
//                 data-twe-slide="prev">
//                 <span className="inline-block h-8 w-8">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-6 w-6">
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 19.5L8.25 12l7.5-7.5" />
//                     </svg>
//                 </span>
//                 <span
//                     className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//                 >Previous</span>
//             </button> */}
//             {/* Carousel controls - next item */}
//             {/* <button
//                 className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//                 type="button"
//                 data-twe-target="#carouselExampleControls"
//                 data-twe-slide="next">
//                 <span className="inline-block h-8 w-8">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-6 w-6">
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </span>
//                 <span
//                     className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//                 >Next</span>
//             </button> */}
//         </div>
//     );
// }


export default function Slider() {
    let frames: Frame[] = [
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
    ]

    // let props: NRCCarouselProps =;
    // props.frames = frames;

    return <NRCCarousel frames={frames} breakpoint="md"
                />;
}



// export const NRCCarouselStage = (props: Partial<NRCCarouselProps>): JSX.Element => {
//     return <NRCCarousel {...(props as NRCCarouselProps)} />;
// };