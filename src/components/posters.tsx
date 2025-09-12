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
        }

    ];

    return (
        <Carousel_002
            images={images}
            loop={true}
            autoplay={true}
            spaceBetween={10}
            showNavigation={true}
        />
    );
};

export default Posters;
