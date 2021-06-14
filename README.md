# casiers-in-shop

## Node.js vacancy Test task

<hr>

### Database structure visualization

<https://drive.google.com/file/d/1E15tOJBsDdLohRg-wp09nA36diKXhwXA/view?usp=sharing>

If you don't see this diagram you can sroll down and you will see the screenshot in the bottom of this file.

<hr>

### Database dump files for more complex app testing

You can use this dump files with test database on your computer. Db - PostgreSQL.
<https://drive.google.com/drive/folders/14gH1LgG09vLRkH95LpxJssU4KWmWn9s-?usp=sharing>

<hr>

### Links to API endpoints

Target functions don't call in app.ts by default. They call only into routes. Click on these links for quick test of app working capacity.
If you use another port please change the default value (5000).

<http://localhost:5000/cashiers/get/1> - get one cashier with id=1

<http://localhost:5000/cashiers/get> - get list of all cashiers

<http://localhost:5000/cashiers/get?gender=male&is_working_now=true> - get cashiers with filter from query string

<http://localhost:5000/cashiers/target1> - get result of getTargetCashiers1 function

<http://localhost:5000/cashiers/target2> - get result of getTargetCashiers2 function

<hr>

### Screenshots
Database content:

![Database structure](https://s1.hostingkartinok.com/uploads/images/2021/06/308a71201e36aecf5a8ed87c7304187d.png)


Get one cashier:

![Get one cashier](https://s1.hostingkartinok.com/uploads/images/2021/06/e0573165f2212ea25b92e47f9d582ba2.png)


Get list of all cashiers:

![Get list of all cashiers](https://s1.hostingkartinok.com/uploads/images/2021/06/8199243a15f1bbd6f27cf7e73ec142fd.png)


Get filtered list of all cashiers:

![Get filtered list of all cashiers](https://s1.hostingkartinok.com/uploads/images/2021/06/e1eb6df56ef0378510cb7df04fc28371.png)


getTargetCashiers1 function:

![getTargetCashiers1_1 function](https://s1.hostingkartinok.com/uploads/images/2021/06/9dcffd4bc5793086bf0fe18fcb5a8416.png)
![getTargetCashiers1_2 function](https://s1.hostingkartinok.com/uploads/images/2021/06/3a6fb32b7beeaf502c264689cfeebdc5.png)


getTargetCashiers2 function:

![getTargetCashiers2 function](https://s1.hostingkartinok.com/uploads/images/2021/06/6509fba72b8c8bd5b479c992f984426e.png)


Database vizualization:

![Database vizualization](https://s1.hostingkartinok.com/uploads/images/2021/06/2d5daaa0a577c06ab6e764327397d7dc.png)
