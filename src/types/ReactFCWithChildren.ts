import React from "react";

export type ReactChildren = { children: React.ReactNode };

export type ReactFCWithChildren<T = {}> = React.FC<ReactChildren & T>;
