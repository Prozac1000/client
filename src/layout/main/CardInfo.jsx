import React, { Component } from "react";
import { getCard } from "../../services/cardService";
import PageHeader from "../common/pageHeader";

class CardInfo extends Component {
  state = {
    card: {},
    errors: {},
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCard(this.props.id);
      this.setState({ card: data, isMounted: true });
    } catch (error) {
      this.setState({ errors: error.message });
    }
  }

  render() {
    const { card, isMounted } = this.state;
    if (!isMounted) return null;
    // if (!isMounted) return  <Loader/>

    const {
      title,
      subTitle,
      description,
      image: { url, alt },
      address,
      phone,
      likes,
      bizNumber,
      createdAt,
    } = card;

    return (
      <React.Fragment>
        <PageHeader title={title} subTitle={subTitle} />
        <div className="container">
          <div>
            <img
              style={{ maxWidth: "400px" }}
              src={url}
              className="card-img"
              alt={alt}
            ></img>
            <p>
              <strong>Description: </strong>
              {description}
            </p>

            <p>
              <strong>Address: </strong>
              {address}
            </p>

            <p>
              <strong>Phone: </strong>
              {phone}
            </p>

            <p>
              <strong>Likes: </strong>
              {likes.length}
            </p>

            <p>
              <strong>Business Number: </strong>
              {bizNumber}
            </p>

            <p>
              <strong>Created At: </strong>
              {createdAt}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardInfo;
// import React, { Component } from "react";
// import { getCard } from "../../services/cardService";
// import PageHeader from "../common/pageHeader";

// class CardInfo extends Component {
//   state = {
//     card: {
//       address: "",
//       bizNumber: "",
//       createdAt: "",
//       description: "",
//       image: { url: "", alt: "" },
//       likes: [],
//       phone: "",
//       title: "",
//     },
//     errors: {},
//   };

//   async componentDidMount() {
//     try {
//       const { data } = await getCard(this.props.id);
//       this.setState({ card: { ...data } });
//     } catch (error) {
//       this.setState({ errors: error.message });
//     }
//   }

//   render() {
//     const { card } = this.state;
//     return (
//       <React.Fragment>
//         <PageHeader
//           title={`Business Card Of: ${card.title}`}
//           subTitle={`Business description: ${card.description}`}
//         />
//         <div className="container">
//           <div>
//             <img
//               style={{ maxWidth: "400px" }}
//               src={card.image.url}
//               className="card-img"
//               alt={card.image.alt}
//             ></img>
//             <p>
//               <strong>Address: </strong>
//               {card.address}
//             </p>

//             <p>
//               <strong>Phone: </strong>
//               {card.phone}
//             </p>

//             <p>
//               <strong>Likes: </strong>
//               {card.likes}
//             </p>

//             <p>
//               <strong>Business Number: </strong>
//               {card.bizNumber}
//             </p>

//             <p>
//               <strong>Created At: </strong>
//               {card.createdAt}
//             </p>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default CardInfo;
