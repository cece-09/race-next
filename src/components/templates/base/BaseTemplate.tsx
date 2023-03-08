// * Define Types
export interface IBaseTemplate {
  textProp: string;
}

// * Define Styles
const STYLE_BASE = "";

// * Component
export const BaseTemplate = ({ textProp }: IBaseTemplate) => {
  return <div className={`${STYLE_BASE}`}>{textProp}</div>;
};
