import './style.scss';
import IMAGE from './react.png';
import LOGO from './pngwing.svg';

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React Logo" width={300} height={300} />
      <img src={LOGO} alt="React Logo" />
    </>
  );
};
