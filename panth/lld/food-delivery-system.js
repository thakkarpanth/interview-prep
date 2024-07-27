// swiggy / zomato design 

/*
user places order 
    -> tell restaurant to prepare food 
    -> assign a rider to pick food and deliver 
*/

/*
    divide system into 2 parts 
    food -> displaying menu of nearby restuarants , available or not 
    delivery -> assigning rider to deliver
    connecting point between 2 system is order. 
*/

/*
    there will be order manager which will generate order id 
    it will tell delivery system that this is order id delivery it from A to B 
    it will tell food system that this is order id prepare this food in this much quantity
*/

/*
    Food Manager 
    prepareFood(order_id, restaurant_id, { dish: quantity } )

    Restaurant Manager has restuarant
    takes restaurant id and gives back restaurant object 
    update inventory 
    restaurant has menu , menu has dish , dish has dish add on 
*/

/*
    Delivery Manager 
    Delivery MetaData (user location , delivery location , order id ) 
    Delivery Partner Matching Strategy -> based on location , rating based.

*/

/*
 Order Manager , Food Manager , Delivery Manager 
 Food Manager -> Restaurant Manager -> Restuarant -> Menu -> Dish -> Dish Addons
 Delivery Manager -> elDDD
*/


//  ----------------------------------------------------------------- 

/*
    onboard restaurant 

    onboard client 
    
    inventory management (food is available with restaurant) 
    
    order management system 
         order table - id, List<Items>
         item table - description, quantity 
         1) placeOrder (Order order) 
         2) status (orderId) 
         3) getPricing (orderId)
         

    delivery management system 
    
    payment system
    
    notification
*/
