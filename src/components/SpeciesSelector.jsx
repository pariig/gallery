import React from "react";
import Select from "react-select";

const speciesOptions = [
    { value: "Salmon", label: "Salmon" },
    { value: "Bass", label: "Bass" },
    { value: "Trout", label: "Trout" },
    { value: "Catfish", label: "Catfish" },
];

const SpeciesSelector = ({ selectedSpecies, setSelectedSpecies }) => {
    const handleRemoveSpecies = (species) => {
        setSelectedSpecies(
            selectedSpecies.filter((item) => item.value !== species.value)
        );
    };

    return (
        <div className="filter-section">
            <label>Species</label>
            <Select
                options={speciesOptions}
                isMulti
                value={selectedSpecies}
                onChange={setSelectedSpecies}
                className="species-select"
                styles={{
                    menu: (base) => ({ ...base, backgroundColor: "#3a3a4d" }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#0d2b5d" : "#3a3a4d",
                        color: "#fff",
                    }),
                }}
            />
            <div className="selected-species">
                {selectedSpecies.map((species) => (
                    <span key={species.value} className="species-tag" onClick={() => handleRemoveSpecies(species)}>
                        {species.label} ✕
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SpeciesSelector;
