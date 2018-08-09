//Commodity=Milk
/**
 * This function changes property owner based on the new owner property on in coming Trade transaction. Then persists the modified Commodity back into the asset registry which stores Commodity instances
 */
/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeCommodity(trade) {
    trade.commodity.owner = trade.newOwner;
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Milk');
    await assetRegistry.update(trade.commodity);
  	
}