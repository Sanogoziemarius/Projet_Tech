const client="Awa"
const produit="Ordinateur"
const prix_unitaire=250000
const quantite=2
const livraison=5000
const taux_TVA=18/100
const montant_produit=prix_unitaire*quantite
const montant_TVA=montant_produit*taux_TVA
const montant_TTC=montant_TVA+montant_produit
const montant_total=montant_TTC+livraison
const prix_mTTC=montant_TTC/2
const remise_fixe=10000
const montant_total_remise=montant_total-remise_fixe
console.log("===== REÇU DE COMMANDE =====")
console.log("Client:", client)
console.log("Produit:",produit)
console.log("Prix unitaire:",prix_unitaire,"FCFA")
console.log("Quantité:",quantite)
console.log(" ")
console.log("Montant des produits:",montant_produit,"FCFA")
console.log("TVA(18%):",montant_TVA,"FCFA")
console.log("Montant TTC:", montant_TTC,"FCFA")
console.log("Livraison:",livraison,"FCFA")
console.log("TOTAL A PAYER:",montant_total-remise_fixe,"FCFA")
console.log("")