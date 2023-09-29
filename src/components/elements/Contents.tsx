import React, { PropsWithChildren } from "react";

const Contents: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-y-7">
    {children}
  </div>
);

export default Contents;
