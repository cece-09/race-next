// * Define Types
export interface IGalleryView {
  textProp: string;
}

// * Define Styles
const STYLE_gallery = "";

// * Component
export const GalleryView = ({ textProp }: IGalleryView) => {
  return <div className={`${STYLE_gallery}`}>{textProp}</div>;
};
