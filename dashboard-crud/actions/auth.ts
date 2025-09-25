"use server";

export async function login(formData: FormData) {
  
  const email = formData.get("email");

  console.log("Email", email);
}
