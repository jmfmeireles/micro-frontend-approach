import React from 'react';
import { History } from 'history';
const StoreApp = React.lazy(() => import('StoreApp/App'));

export default function StoreAppMFE(props: {
  parentPath: string;
  history: History;
}) {
  return (
    <React.Suspense fallback="Loading App...">
      <StoreApp parentPath={props.parentPath} history={props.history} />
    </React.Suspense>
  );
}
