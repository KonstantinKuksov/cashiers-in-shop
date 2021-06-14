## casiers-in-shop

### Node.js vacancy Test task

<hr>

#### Database structure visualization

<https://app.diagrams.net/#G1E15tOJBsDdLohRg-wp09nA36diKXhwXA>

#### Database dump files for more complex app testing

You can use this dump files with test database on your computer. Db - PostgreSQL.
<https://drive.google.com/drive/folders/14gH1LgG09vLRkH95LpxJssU4KWmWn9s-?usp=sharing>

#### Links to API endpoints

Target functions don't call in app.ts by default. They call only into routes. Click on these links for quick test of app working capacity.
If you use another port please change the default velue (5000).

<http://localhost:5000/cashiers/get/1> - get one cashier with id=1

<http://localhost:5000/cashiers/get> - get list of all cashiers

<http://localhost:5000/cashiers/get?gender=male&is_working_now=true> - get cashiers with filter from query string

<http://localhost:5000/cashiers/target1> - get result of getTargetCashiers1 function

<http://localhost:5000/cashiers/target2> - get result of getTargetCashiers2 function
