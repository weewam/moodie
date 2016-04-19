// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
moodieApp.factory('Discover', function ($resource,$cookieStore) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details
//DinnerModel Object constructor
 
 var load = function(Genres) {
                     
        genres = {
                     "Action" : 28,
                     "Adventure" : 12,
                     "Animation" : 16,
                     "Comedy" : 35,
                     "Crime": 80,
                     "Documentary": 99,
                     "Drama": 18,
                     "Family": 10751,
                     "Fantasy": 14,
                     "History": 36,
                     "Horror": 27,
                     "Music": 10402,
                     "Music": 9648,
                     "Romance": 10749,
                     "Science Fiction": 878,
                     "Thriller": 53,
                     "War": 10752,
                     "Western": 37
                    };
                     
                     for (var i = 0; i < Genres.length; i++){
                        for(var u in genres){
                            if(Genres[i]== u){
                                Genres[i]=genres[u];
                            }
                        }
                     }
                     
                     
        var req = {
            method: 'GET',
            url: 'http://api.themoviedb.org/3/movie/?api_key=b0a5b20c668da9800946e85508c3c44f&with_genres=' + Genres,
            skipAuthorization: true
        }

        $http(req).then(function(response){
            console.log(new Discover(response.data))
        });
    }

    load($routeParams.MovieID);



	this.transformMenu1 = function(){	
		for(i in this.idMenu){
			this.Dish.get({id:this.idMenu[i]}, function(data){
			menu.push(data);
   			},function(data){
   			});
		}
	}
	this.transformMenu1();

	this.transformMenu2 = function(){
		this.idMenu = [];
		for(u in menu){
			this.idMenu.push(menu[u].RecipeID);

		}
		$cookieStore.put('menu',this.idMenu);
	}


	this.filterDishes = function(dishlist) {
		this.fDishes = dishlist;
		//this.notifyObservers();

	}
	
	this.getFilteredDishes = function() {
		return this.fDishes;
	}


	this.setDish = function(data) {
		this.dish = data;
	}

	this.getTheDish = function(){
		return this.dish.RecipeID;
	}

	this.getTheDishData = function(){
		return this.dish;
	}

	
	this.setPendingDish = function(Recipe){
		var Pcost = 0;
		for (ing in Recipe.Ingredients){
			Pcost += Recipe.Ingredients[ing].Quantity;
		}
		return this.pending = Math.round(Pcost);
		//this.notifyObservers();
	}


	this.setPendingZero = function(){
		this.pending = 0.00;
		//this.notifyObservers();
	}

	this.getPendingCost = function(){
		return this.pending;
	}

	this.setNumberOfGuests = function(num) {
		this.guest = num;
		$cookieStore.put('guests',this.guest);
	}

	// should return 
	this.getNumberOfGuests = function() {
		return this.guest;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		for(t in menu){
			if(menu[t].type == type){
				return menu[t];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		ingredientslist =[];
		for (k in menu){
			for (ing in menu[k].ingredients){
			ingredientslist.push(menu[k].ingredients[ing]);
			}
		}
	return ingredientslist;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		this.menuprice = 0;
		for(i in menu){
			for(ing in menu[i].Ingredients){
				this.menuprice += menu[i].Ingredients[ing].Quantity*this.guest
			}
		}
		this.menuprice = Math.round(this.menuprice);
		return this.menuprice;
	}

	this.getDishPrice = function(data){
        var dishcost = 0;
		for (ing in data.Ingredients){
			dishcost += data.Ingredients[ing].Quantity*this.guest;
		}
		return dishcost = Math.round(dishcost);

	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(data) {
   		
		for(k in menu){
			if(menu[k].Category == data.Category){
				menu[k] = data;
				this.transformMenu2();
				return;
				}
			}

		menu.push(data);
		this.transformMenu2();


	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for (a in menu){
			if(menu[a].RecipeID == id){
				menu.splice(a, 1);
				this.transformMenu2();
			}
			
		}
	}





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
