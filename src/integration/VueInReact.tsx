import React, { useEffect, useRef } from 'react';
import { createApp, Component } from 'vue';

interface VueInReactProps {
  component: Component;
  props?: Record<string, any>;
}

// Wrapper to embed Vue components in React (Adapter pattern)
const VueInReact: React.FC<VueInReactProps> = ({ component, props = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vueAppRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !vueAppRef.current) {
      // Create Vue app instance
      vueAppRef.current = createApp(component, props);
      vueAppRef.current.mount(containerRef.current);
    }

    return () => {
      // Cleanup Vue app on unmount
      if (vueAppRef.current) {
        vueAppRef.current.unmount();
        vueAppRef.current = null;
      }
    };
  }, [component]);

  // Update props when they change
  useEffect(() => {
    if (vueAppRef.current && vueAppRef.current._instance) {
      Object.assign(vueAppRef.current._instance.props, props);
    }
  }, [props]);

  return <div ref={containerRef} />;
};

export default VueInReact;
