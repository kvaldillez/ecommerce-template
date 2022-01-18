import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import "./homepage.scss";
import MenuItem from "../../components/menu-item/menu-item.component";

const HomePage = () => {
    const sections = useSelector(selectDirectorySections);

    return (
        <div className="homepage">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

export default HomePage;