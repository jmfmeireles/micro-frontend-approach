import React from 'react';
import { History } from 'history';
const NewsApp = React.lazy(() => import('NewsApp/App'));

export default function NewsAppMFE(props: {
  parentPath: string;
  history: History;
}) {
  console.log('loading');
  console.log(props.parentPath);
  return (
    <React.Suspense fallback="Loading App...">
      <NewsApp parentPath={props.parentPath} history={props.history} />
    </React.Suspense>
  );
}
