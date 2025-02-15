import React from "react";
import {
  Hero,
  About,
  HowItWorks,
  TopProducts,
  ContactUs,
  Testimonials,
  ProductsGrid,
  FindUs,
  ImageAndDescription,
  Description,
  Nutrients,
  ContactForm,
} from "../slices";

const SliceZone = (props) => {
  const { slices } = props;
  const sliceComponents = {
    hero: Hero,
    about: About,
    howitworks: HowItWorks,
    top_products: TopProducts,
    contactus: ContactUs,
    testimonials: Testimonials,
    productsgrid: ProductsGrid,
    find_us: FindUs,
    imageanddescription: ImageAndDescription,
    description: Description,
    nutrients: Nutrients,
    contact_form: ContactForm,
  };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];

    if (SliceComponent)
      return (
        <SliceComponent
          slice={slice}
          index={index}
          key={`slice-${index}`}
          {...props}
        />
      );

    return null;
  });
};

export default SliceZone;
