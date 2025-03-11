const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar os posts." });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post não encontrado." });
        }
        res.json(post);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar o post." });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, likes } = req.body;
        const newPost = await postModel.createPost(title, likes);
        res.status(201).json(newPost);
    } catch (error) {
     console.log(error);
        if (error.code === "23505") { // Código de erro do PostgreSQL para chave única violada
            return res.status(400).json({ message: "Titulo em uso!!." });
        }
        res.status(404).json({ message: "Erro ao criar o Post." });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, likes } = req.body;
        const updatedPost = await postModel.postUser(req.params.id, title, likes);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post não encontrado não encontrado." });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar o Post." });
    }
};

const deletePost = async (req, res) => {
    try {
        const message = await postModel.deletePost(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: "Erro ao deletar o Post!!." });
    }
};

module.exports = {getAllPosts, getPost, createPost, updatePost, deletePost };


