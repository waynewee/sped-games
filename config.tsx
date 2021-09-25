const production = process.env.NODE_ENV === "production";

let API_URL;

if (production) {
  API_URL = "";
} else {
  API_URL = "http://localhost:8080";
}

export const config = {
  API_URL,
};
