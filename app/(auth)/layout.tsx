import React from "react";

export default function ({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b p-1 test-center">
        This is Page Normal
      </div>
      {children}
    </>
  );
}
