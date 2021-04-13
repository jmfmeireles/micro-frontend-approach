import React, { useEffect } from 'react';
import { MicroFrontend as MicroFrontendModel } from '../../../models/MicroFrontend';
import { History } from 'history';

function MicroFrontend(props: {
  microFrontend: MicroFrontendModel;
  history: History;
  isVisible: boolean;
}) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${props.microFrontend.key}`;

    const renderMicroFrontend = () => {
      window[`render${props.microFrontend.key}`](
        `${props.microFrontend.key}-container`,
        props.history,
      );
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${props.microFrontend.host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${props.microFrontend.host}${manifest.files['main.js']}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${props.microFrontend.key}`] &&
        window[`unmount${props.microFrontend.key}`](
          `${props.microFrontend.key}-container`,
        );
    };
  });

  return (
    <main
      id={`${props.microFrontend.key}-container`}
      hidden={!props.isVisible}
    />
  );
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
