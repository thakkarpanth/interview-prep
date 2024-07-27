/*
    Functional Requirements 
        Hotel 
            Onboarding 
            Update 
            Bookings 
        
        User 
            Search 
            Book 
            Check bookings 

        Analytics 
*/

/*
    Non Functional Requirements 
        Low Latency 
        High Availability 
        Highly Consistent 
*/

/*
    - Hotel service -> my sql database -> user can add hotels / rooms 
    - as soon as hotel is added we push that event in kafka as well 
    - search consumer picks this data and pushes it in es cluster to support fuzzy search 
      on es cluster sits search service 
    - booking service which books hotels. Uses my sql cluster. talks to payment service 
    - booking service my sql only has live data meaning pending state bookings , all the 
      cancelled and completed bookings are shifted to cassandra 
    - notification service to handle invoice and all once booking is completed 
    - booking maanagement service which is useful for both hotel and user to see their 
      pending bookings via my sql cluster and completed via cassandra 
*/

/*
HOTEL SERVICE 
    API 
        POST /hotels 
        GET /hotel/id 
        PUT /hotel/id 
        PUT /hotels/id/rooms/id

    DB 
    hotel [ id , name, images, locality_id, description, is_active ]
    facilities [id, name]
    rooms [id, hotel_id, is_active, display_name, price, quantity ]
    hotel_facilities [id, hotel_id, facility_id] 
    rooms_facilities [id, room_id, facility_id]
    locality [id, city_id, state_id, country_id, zipcode, is_active]
*/

/*
BOOKING SERVICE 

    API 
        POST /book 
        { user_id, room_id, quantity, start, end }

    DB 
    available_rooms [id, room_id, available_quantity, initial_quantity ] 
    booking [booking_id, room_id, user_id, start, end, quantity, invoice, status]

*/
