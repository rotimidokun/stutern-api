import client from '../database/index.js';

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
