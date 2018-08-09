# Lab Name
Donor Milk Transparency and Traceability

# Short Description
This lab hold the code base for a blockchain build focused on solving market problems identified in the donor milk ecosystem.

There is currently a major donor milk shortage. This has particular impact in the Neonatal Intensive Care Unit (NICU) where formula can have fatal impact on premature baby's intestines, leaving human milk to be the only viable option. At a global scale donor milk fraud, lack of traceability, and availability are known issues. While there are smaller entities engaging in the space, there is no large-scale breast milk providers and there is opportunity to expand participation from donors and accessibility for babies in need.

Business case for this use case can be found here: https://wiki.hyperledger.org/groups/healthcare/donor_milk_transparency_and_traceability

# Scope of Lab

The scope of the lab is to develop a proof of concept (POC) for a blockchain-based solution in the known challenges in the donor milk ecosystem. As the Hyperledger Project aims to "build community by gathering people sharing a common interest in developing blockchain related software," this lab aligns with that goal. We have brought together a group of industry subject matter experts who are looking to collaboratively build out requirements and code to solve true market problems. Engaging the Hyperledger developer community will also provide a way to engage the business and technical sides of the Hyperledger community on a single effort.

# Initial Committers

Dr. Angela Courtney - [acourtney2015](https://github.com/acourtney2015)

Marissa Iannarone - [MariLeigh](https://github.com/MariLeigh)

# Sponsor

Nate DiNiro - Healthcare Working Group Chair
email: nate@youbase.io

Instructions for the Breast-Milk- Network Definition created in Playground. Feel free to cruise around the network to test functionality and determine additions in functionality that would improve the network. 
This business network defines:

**Participants**
`Trader` 

**Assets**
`Milk` 

**Transactions**
`Trades` 

The basic functionality is as follows:
A) Donated milk is given a barcode number and weighed in ounces (oz). Both the barcode number and the weight is recorded by the Trader whom donated. This trader now becomes the owner of the milk.

Milk is traded or moved through the system through a series of trades changing the ownership of the milk and tracking its movement in the system.

To try it out: Click the **Test** tab

1. Create one or two new `Traders`.Click `Create New Participant`.  Assign a `Trader Name`, `Inputter` is person typing in the information (I am sure there is a better name for that, but in the interest of time...let's just roll with inputter. I can change later when better suggestion is given) and assign the `Organization` the Trader works for be it a charity or a hospital etc.

2. Create a new `Asset` (Milk donation) assign a unique barcode number. All information is placed inside the quotation marks "..." you will see for each item.
	How to start:  Inside the **Test** tab---> click on `Milk` under `Asset` tab---> at the top right you will see `Create New Asset`. Here you can fill out the information that is in the drop down that pops up. 
	- You can change the barcode number (or you can use the one that autopopulates. This number is used when you want to move the milk to a new owner. You will see it purpetually listed under assets in case you need to look it up). To see all milk donations in the systems network just click on `Milk` under `Assets`. Here you can view the properties under description to choose a milk sample you may want to `Trade`.
    - Give a `description` of the new milk (such as the mom who donated it as name or number; you can add details such as high protein levels, elevated immunoglubulins or any gathered data on the milk sample;best for premies etc). 
    - Add the weight of the new milk in ounces (oz) inside `quantity`. 
    - Assign an `owner` to the new milk (This is the trader-either one already in the system you can name it named Trader1 and Trader2 or a new Trader name you created previously. The `Trader` must be in the system in order to assign new `Assets` to them)

3. `Trade` the milk from one `Trader` to another using `Transactions`. You must change the `Milk Barcode` to the correct barcode of the milk you are moving inside transactions and you must change the name of the Trader after the hash # to the correct new owner Trader's name .
View the traced `Transactions` (which are the movements of the milk throughought the network) by clicking `All Transactions`----> and `Viewing the Trade Records`


 Example Trader form:
 ```
 {
 
  "$class": "org.example.mynetwork.Trader",
  
  "tradeId": "Trader1",
  
  "firstNameInputer": "Jim",
  
  "OrganizationName": "MyFavoriteCharity"
  
}
```

Example New milk donation under asset:
```
{

  "$class": "org.example.mynetwork.Milk",
  
  "tradingBarCodeSymbol": "3511",
  
  "description": "High quality.high protein content (11.2mg/dl). Elevated immunoglubulins (12.5). good for premature and poor weight gain infants",
  
  "mainExchange": "MilkExchange",
  
  "quantityOZ": 16.0,
  
  "owner": "resource:org.example.mynetwork.Trader#Trader1"
  
}
```
Try making your second Trader a hospital like this--->Create new participant. change the fields to:
```
{

  "$class": "org.example.mynetwork.Trader",
  
  "tradeId": "Trader2",
  
  "firstNameInputer": "Sam",
  
  "OrganizationName": "Great Hospital NicU"
  
}
```
Have fun moving the milk from one owner to another and seeing the timestamps of the movement and hash confirmations given inside the network by `All Transactions`----> and `Viewing the Trade Records`. 

