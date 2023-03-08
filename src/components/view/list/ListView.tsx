// * Define Types
export interface IListView {
  textProp: string;
}

// * Define Styles
const STYLE_BASE = "";

// * Component
export const ListView = ({ textProp }: IListView) => {
  return <div className={`${STYLE_BASE}`}>{textProp}</div>;
};
