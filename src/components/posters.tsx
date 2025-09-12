import { Carousel_002 } from "@/components/ui/skiper-ui/skiper48";

// Using the carousel component with custom images
const Posters = () => {
    const images = [
        {
            src: "/images/posters/1.png",
            alt: "Description 1",
        },
        {
            src: "/images/posters/2.png",
            alt: "Description 2",
        },
        {
            src: "/images/posters/3.png",
            alt: "Description 3"
        },
        {
            src: "/images/posters/4.png",
            alt: "Description 3"
        },
        {
            src: "/images/posters/5.jpg",
            alt: "Description 3"
        },

        {
            src: "/images/posters/6.jpg",
            alt: "Description 1",
        },
        {
            src: "/images/posters/2.png",
            alt: "Description 2",
        },
        {
            src: "/images/posters/3.png",
            alt: "Description 3"
        }

    ];

    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <Carousel_002
                images={images}
                loop={true}
                spaceBetween={40}
                showNavigation={true}
                autoplay={true}
            />
        </div>
    );
};

export default Posters;
