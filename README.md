I didn't get to finish it because I got power issues they were working on the line.
Only login user is left to finish, I would add token and then in frontend set that Token as Cookie.
If I have token user will be able to see Front page and cart (That is now possible without token because it's not finished).
I hope everything works, I have done a little testing, but this needs to be tested better, as I said, power went off. 

Improvements:
1. On the cart page I would add No products part (I added that myself).
2. I would add pagination for Front page for optimization
3. I would show discount on Front page so the user have clearer image for which product is on discount


For backend installation process
1. navigate to backend folder
2. set up the env file with your database credentials
3. run composer install
4. run npm install 
5. php artisan migrate
6. php artisan db:seed
7. php artisan serve

For frontend installation process
1. navigate to frontend folder
2. run npm install
3. run npm start


User credentials would be
email: johndoe@example.com
password: password123