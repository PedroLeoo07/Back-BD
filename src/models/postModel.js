const pool = require("../config/database");

const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
};

const createPost = async (title, likes) => {
    const result = await pool.query(
        "INSERT INTO posts (title, likes) VALUES ($1, $2) RETURNING *",
        [title, likes]
    );
    return result.rows[0];
};

const updatePost = async (id, title, likes) => {
    const result = await pool.query(
        "UPDATE posts SET title = $1, likes = $2 WHERE id = $3 RETURNING *",
        [title, likes, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Post não encontrado." };
    }

    return { message: "Post deletado com sucesso." };
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
