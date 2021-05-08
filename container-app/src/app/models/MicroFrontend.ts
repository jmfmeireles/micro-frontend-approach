export interface MicroFrontend {
  key: string;
  logo: string;
  component: React.ComponentType<MicroFrontendProps>;
}

export interface MicroFrontendProps {
  parentPath: string;
  history: any;
}
