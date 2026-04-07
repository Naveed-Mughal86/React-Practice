const API_URL = "http://localhost:3000/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (title) => {

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

};

export const deleteTask = async (id) => {

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

};