const Product = require('../Models/productModel');
const express = require('express');

module.exports.createProduct = async (req, res) => { 
  try {
    const newProduct = new Product({...req.body});
    await newProduct.save();
    res.status(200).json({message: "Product ajouté avec succès!" }); 
  } catch(error) {
    res.status(500).json({message: "Erreur lors de l'ajout"});
    console.log(error);
  }
}

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch(error) {
    res.status(500).json({message: "Erreur lors de la récupération des produits"});
    console.log(error);
  }
}


module.exports.deleteProduct = async (req, res) => { 
  try {
    const productId = req.params.id; // Récupérez l'ID du produit à supprimer depuis les paramètres de la requête
    
    const deletedProduct = await Product.findByIdAndDelete(productId); // Recherchez et supprimez le produit en utilisant son ID
    
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produit introuvable" }); // Si aucun produit n'est trouvé avec cet ID, renvoyez une réponse 404
    }

    res.status(200).json({ message: "Produit supprimé avec succès" }); // Si le produit est supprimé avec succès, renvoyez une réponse 200 avec un message de succès
  } catch(error) {
    res.status(500).json({ message: "Erreur lors de la suppression du produit" }); // En cas d'erreur, renvoyez une réponse 500 avec un message d'erreur
    console.log(error); // Enregistrez l'erreur dans la console pour le débogage
  }
}


module.exports.updateProduct = async (req, res) => { 
  try {
    const productId = req.params.id; // Récupérez l'ID du produit à mettre à jour depuis les paramètres de la requête
    const updateFields = req.body; // Récupérez les champs à mettre à jour depuis le corps de la requête

    const updatedProduct = await Product.findByIdAndUpdate(productId, updateFields, { new: true }); // Recherchez et mettez à jour le produit en utilisant son ID

    if (!updatedProduct) {
      return res.status(404).json({ message: "Produit introuvable" }); // Si aucun produit n'est trouvé avec cet ID, renvoyez une réponse 404
    }

    res.status(200).json({ message: "Produit mis à jour avec succès", product: updatedProduct }); // Si le produit est mis à jour avec succès, renvoyez une réponse 200 avec un message de succès et le produit mis à jour
  } catch(error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du produit" }); // En cas d'erreur, renvoyez une réponse 500 avec un message d'erreur
    console.log(error); // Enregistrez l'erreur dans la console pour le débogage
  }
}