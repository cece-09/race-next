export interface IBaseTemplate {
  textProp: string;
}

const BaseTemplate = ({ textProp }: IBaseTemplate) => {
  return <div>{textProp}</div>;
};

export default BaseTemplate;
