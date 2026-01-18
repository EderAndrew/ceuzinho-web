import { Signin } from "@/types/signin";

type SigninResponse = {
    message: string;
};

export const signin = async(payload: Signin): Promise<SigninResponse> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/signin`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        }
    )

    const data = await resp.json()

    if (!resp.ok) {
        throw new Error(data?.message || "Erro ao autenticar");
      }
    console.log(data)
    return data
}