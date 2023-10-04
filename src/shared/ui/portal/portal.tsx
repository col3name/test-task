import React from "react";
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode,
  wrapperId?: string,
}

const Portal: React.FC<PortalProps> = ({
  children,
  wrapperId = 'modal-root'
}) => {
  // @ts-ignore
  return createPortal(children, document.getElementById(wrapperId));
}
export default Portal;