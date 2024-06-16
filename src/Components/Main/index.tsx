import React, { ReactNode } from "react";

interface MeuComponenteProps {
  children: ReactNode;
}

export const HeaderGroup: React.FC<MeuComponenteProps> = ({ children }) => {
  return (
    <div className="bg-header bg-top bg-contain lg:bg-cover lg:bg-top lg:bg-repeat bg-no-repeat">
      {children}
    </div>
  );
};
