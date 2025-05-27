import { BASE_URL } from "@/static/const";
import {
  RequestSignInCredential,
  RequestSignUpCredential,
  ResponseAuth,
} from "@/types/api/auth";
import axios from "axios";

export async function signInWithCredential(req: RequestSignInCredential) {
  try {
    const response = await axios.post(`${BASE_URL}auth/local`, {
      identifier: req.email,
      password: req.password,
    });

    return response.data as ResponseAuth;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.error) {
        throw error.response.data.error.message;
      }
    }
    throw error;
  }
}

export async function signUpWithCredential(data: RequestSignUpCredential) {
  try {
    const response: ResponseAuth = await axios.post(
      `${BASE_URL}auth/local/register`,
      {
        username: data.username,
        email: data.email,
        password: data.password,
      }
    );

    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.error) {
        throw error.response.data.error.message;
      }
    }
    throw error;
  }
}
