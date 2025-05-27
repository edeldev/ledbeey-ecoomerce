export interface RequestSignInCredential {
  email: string;
  password: string;
}

export interface RequestSignUpCredential {
  username: string;
  email: string;
  password: string;
}

export interface ResponseAuth {
  user: {
    email: string;
    username: string;
    blocked: boolean;
    id: string;
  };
  jwt: string;
}
