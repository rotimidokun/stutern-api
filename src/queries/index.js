
import client from '../database/index.js';

//get users function
export const getUsers = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM users ORDER BY id ASC');

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

//get indivisual user function
export const getUser = async (req, res) => {
  const id = +req.params.id;
  try {
    const response = await client.query(`SELECT * FROM users WHERE id = ${id}`);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
}

//create user function
export const createUser = async (req, res) => {

  const { id, name, email } = req.body;
  console.log(req.body);
  try {
    const response = await client.query("INSERT INTO users (id, name, email) VALUES ($1, $2, $3) RETURNING * ", [id, name, email]);

    if (response) {
      console.log("Data successfuly added");
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
}

//update user
export const updateUser = async (req, res) => {
  const id = +req.params.id;
  const { name, email} = req.body;
  console.log(req.params.id);
  try {
    const response = await client.query("UPDATE users SET name =$2, email =$3 WHERE id = $1 RETURNING * ", [id, name, email]);

    if (response) {
      console.log("Data updated successfully");
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
}

//delete user
export const deleteUser = async (req, res) => {
  const id = +req.params.id;
  try {
    const response = await client.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);

    if (response) {
      console.log("Data deleted successfully");
      return res.status(200).json({ status: 'success', data: "User with the id " + id + " has been deleted successfully" });
    }
  } catch (err) {
    console.log(err);
  }
}

