import React, { PropsWithChildren, useEffect, useState } from "react";

const NoSSR: React.FC<PropsWithChildren> = ({ children }) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  if (!canRender) {
    return null;
  }

  return <>{children}</>;
};

export default NoSSR;
