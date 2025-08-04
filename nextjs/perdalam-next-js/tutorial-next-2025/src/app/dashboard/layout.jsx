import React from "react";

const DashboardLayout = ({ children, analytics, socials, users, login }) => {
  const isLogin = true;
  return (
    <div>
      <div>{children}</div>
      {isLogin ? (
        <div className="flex gap-2">
          <div className="flex flex-col">
            <div>{socials}</div>
            <div>{users}</div>
          </div>
          <div className="flex flex-1">{analytics}</div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
};

export default DashboardLayout;
