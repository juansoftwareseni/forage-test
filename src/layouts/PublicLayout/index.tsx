import { extractToken } from "@/utils/extractToken";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
const url = "/" as unknown as Location;

const PublicLayout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const isLoggedIn = extractToken();
    if (isLoggedIn) {
      window.location = url;
    }
  }, []);
  return (
    <div className="bg-bg1 min-h-screen">
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
