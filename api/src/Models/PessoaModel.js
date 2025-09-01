import e from "express";
import mongoose from "mongoose";

const PessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    PoKemon: { type: String, required: true }
});
const PessoaModel = mongoose.model('Pessoa', PessoaSchema);  
module.exports = { PessoaModel };ReadableByteStreamController