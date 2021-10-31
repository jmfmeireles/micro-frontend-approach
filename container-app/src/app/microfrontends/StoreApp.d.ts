import { MicroFrontendProps } from '../models/MicroFrontend';

declare module 'StoreApp/App' {
  const App: React.ComponentType<MicroFrontendProps>;

  export default App;
}
