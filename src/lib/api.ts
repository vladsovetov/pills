const API_BASE_URL = "http://54.157.105.113";

export async function fetchPills(date: string) {
  const response = await fetch(`${API_BASE_URL}/api/pills/get/${date}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
