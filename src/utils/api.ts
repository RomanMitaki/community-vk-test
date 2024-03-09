import { TGetGroupsResponse } from "./types";

export async function getGroups() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch(`./groups.json`);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`,
      );
    }
    const res: TGetGroupsResponse = await response.json();

    if (!res || res.result === 0 || res.data === undefined) {
      throw new Error("Invalid data format");
    }
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
