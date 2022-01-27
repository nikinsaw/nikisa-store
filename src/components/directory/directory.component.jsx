import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "Watches",
          //Photo by Vitaly Vlasov from Pexels
          imageUrl:
            "https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          linkUrl: "watches",
        },
        {
          id: 2,
          title: "Bags",
          //Photo by Vitaly Vlasov from Pexels
          imageUrl:
            "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          linkUrl: "",
        },
        {
          id: 3,
          title: "Caps",
          //Photo by Joshua T from Pexels
          imageUrl:
            "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          linkUrl: "",
        },
        {
          id: 4,
          title: "Women",
          //Photo by Marcelo Chagas from Pexels
          imageUrl:
            "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          size: "large",
          linkUrl: "",
        },
        {
          id: 5,
          title: "Men",
          //Photo by AJAYKUMAR NARWADE from Pexels
          imageUrl:
            "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
