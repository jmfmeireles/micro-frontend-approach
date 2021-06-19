import { MicroFrontendProps } from '../models/MicroFrontend';

declare module 'NewsApp/App' {
  const App: React.ComponentType<MicroFrontendProps>;

  export default App;
}
