import { useState } from "react";
import Button from "./Button";
import { filterableData } from "../data/FilterableData";
import { Image } from "./Image";
import { Text } from "./Text.tsx";


const ImageFilter = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const buttonCaptions = ['Occurence', 'Abundance'];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    }

    return (
        <section className="section-container">
            <div className="button-container">
                {
                    buttonCaptions.map((filter) => (
                        <Button
                            key={filter}
                            onClick={() => handleFilterClick(filter)}
                            type="button"
                            className={`button ${activeFilter === filter ? "button-active" : ""}`}>
                            {filter === 'all' ? 'Show all' : filter}
                        </Button>
                    ))
                }
            </div>
            <main className="grid-container">
                {
                    filterableData.map((item, index) => (
                        <div
                            key={index}
                            className={`card ${activeFilter === 'all' || activeFilter === item.name ? 'block' : 'hidden'}`}>
                            <Image
                                className="card-image"
                                image={item.src}
                                alt={item.name}
                                objectCover="object-cover"
                            />
                            <div className="card-content">
                                <Text as="h5" className="card-title">
                                    {item.title}
                                </Text>
                                <Text as="p" className="card-text">
                                    {item.text}
                                </Text>
                            </div>
                        </div>
                    ))
                }
            </main>
        </section>
    );
}

export default ImageFilter;