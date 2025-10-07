"use client";

import { createContext } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};

const UserContext = createContext<Partial<User>>({});

export default UserContext;
