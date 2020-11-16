import React from "react";
import "./Categories.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Dropdown, Row } from "react-bootstrap";

const categories = [
  "Mobile Phones",
  "Cars",
  "Motorcycles",
  "Houses",
  "TV-Video-Audio",
  "Tablets",
  "Land & Plots",
];

const categoriesList = [
  {
    Vahicles: [
      "Tractors & Trailers",
      "Boats",
      "Other Vehicles",
      "Rickshaw & Chingchi",
      "Buses, Vans & Trucks",
      "Spare Parts",
      "Cars Accessories",
      "Cars on Installments",
      "Cars",
    ],
  },
  { Mobiles: ["Mobile Phones", "Accessories", "Tablets"] },
];

const Categories = () => {
  return (
    <>
      <div className="categories">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <div className="categories__btn">
              <h3 className="categories__btnAll">All Categories</h3>
              <KeyboardArrowDownIcon className="categories__btnIcon" />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Row>
              {categoriesList.map((category) => (
                <div>
                  <h4>{Object.keys(category)[0]}</h4>
                  {Object.values(category)[0].map((sub) => (
                    <Dropdown.Item
                      className="categories__category"
                      href="#/action-1"
                    >
                      {sub}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Row>
          </Dropdown.Menu>
        </Dropdown>
        {categories.map((category) => (
          <h5 className="categories__category">{category}</h5>
        ))}
      </div>
    </>
  );
};

export default Categories;
