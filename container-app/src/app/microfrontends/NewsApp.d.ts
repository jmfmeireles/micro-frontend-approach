import { MicroFrontendProps } from '../models/MicroFrontend';

declare module 'NewsApp' {
  const App: React.ComponentType<MicroFrontendProps>;

  export default App;
}
