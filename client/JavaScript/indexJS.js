window.addEventListener("load", function(){
		/*this is the event listener that is used for the search bar for GET*/
		document.querySelector("#searchForm").addEventListener("submit", searchBar);
		/*this is the event listener that is used for the send bar for POST*/
		document.querySelector("#sendForm").addEventListener("submit", sendBar);
		/*this is the event listener that is used to toggle the input fields for the upload process*/
		document.querySelector("#showSendForm").addEventListener("submit", showSendBar);
	});

	function showSendBar(evt){
		/*prevents the browser form submitting so it can be checked*/
		evt.preventDefault();
		/*used for hidding the divs when the user promps to hide or show the upload fields*/
		document.querySelector("#sendArea").classList.toggle("hide");
		document.getElementById("sendForm").reset();
		document.querySelector("#sendResults").classList.add("hide");
		document.querySelector("#send_error").classList.add("hide");
		document.querySelector("#searchResults").classList.add("hide");
		document.getElementById("search_error").classList.add("hide");
		document.querySelector("#results").classList.add("hide");
		
		
	}
	/*this is the main function for getting data from the database to the single page application*/
	function searchBar(evt){
		/*prevents the browser form submitting so it can be checked*/
		evt.preventDefault();
		/*this is for when the user presses the buttin the old results are hidden*/
		document.querySelector("#results").classList.add("hide");
		document.querySelector("#searchResults").classList.add("hide");
		document.querySelector("#send_error").classList.add("hide");
		/*get value from the recipe search bar*/
		var search = document.querySelector("#search").value.trim();
		/*make the search compatiable for the API*/
		var searchFriendly = search.split(' ').join('+');
		/*gets field error message if the input is invalid*/
		var email_hint = document.querySelector("#email_error");
		/*used to test field values*/
		var search_ok = true;
		/*if the search value that is entered is not valid then a 
		hint/error message is dispayed to the user */
		if (search.length == 0){
			search_error.classList.remove("hide");
			search_ok = false;
		}else{
			search_error.classList.add("hide");
		}
		/*used to see if the search value is valid and able to be used*/
		if (search_ok == true) {
			/*used to hide the results when a new search value is entered*/
			document.querySelector("#results").classList.add("hide");
			/*used to hide the results message when a new search value is entered*/
			document.querySelector("#searchResults").classList.add("hide");
			/*used to show the loading gif when a new/search item has been entered*/
			document.querySelector("#loading").classList.remove("hide");
			/*this clears the results div content so the new search is the 
			first content in the results*/
			document.querySelector("#results").innerHTML = "";

		/*this is where the xmlhttprequest starts and then the search 
		url is created using the code below*/
		let xhr = new XMLHttpRequest();
		let url = "https://ob273.brighton.domains/ci609/assignment1/server/api.php?name="
		url = url + searchFriendly;
		xhr.addEventListener("load", function(){

		/*this piece is used to check if the the search is valid and able 
		to get back results and then the results are then looped using a 
		for loop, then default values are applied and then overwritten if 
		if the search result are valid and correct*/
		if (xhr.status == 200 && xhr.readyState == 4) {
			console.log(xhr.responseText);
			let i, result, results = JSON.parse(xhr.responseText);
			for(i = 0; i < results.recipe.length; i++){
				result = results.recipe[i];

				let name = "Not Given";
				if (result.name.length > 0){
					name = result.name
				}
				let ingredients = "Not Given";
				if (result.ingredients.length > 0){
					ingredients = result.ingredients
				}
				let portion = "Not Given";
				if (result.portion > 0){
					portion = result.portion
				}
				let preparation_time = "Not Given";
				if (result.preparation_time > 0){
					preparation_time = result.preparation_time
				}
				let cooking_time = "Not Given";
				if(result.cooking_time > 0){
					cooking_time = result.cooking_time;
				}
				let instructions = "Not Given";
				if (result.instructions.length > 0){
					instructions = result.instructions
				}
				let images = "Not Given";
				if (result.images > 0){
					images = result.images
					if(images == undefined){
						images = "Not Given";
					}
				}
				let other = "Not Given";
				if (result.other.length > 0){
					other = result.other
					if(other == undefined){
						other = "Not Given";
					}
				}

				/*when the data has been set then the laoding div is hidden*/
				document.querySelector("#loading").classList.add("hide");
				/*the results div is shown when the results are ready*/
				document.querySelector("#results").classList.remove("hide");
				/*the search results message is shown when the results are ready 
				to be displayed*/
				document.querySelector("#searchResults").classList.remove("hide");
				/*used to clear the search bar content to allow the user to enter
				new entrys*/
				document.querySelector("#search").value = "";

				/*creates a div for the results to be put inside and class
				for the contents to be styled*/
				let pDiv = document.createElement("div");
				pDiv.setAttribute("id", "resultDiv");
				pDiv.setAttribute("class", "looks");

				/*this is where the paragraph elements are made dynamically 
				with the corresponding attribute for the data of each 
				record present in the json file*/
				let pName = document.createElement("p");
				pName.setAttribute("id", "resultName");
				pName.textContent = "Name : " + name;
				pDiv.appendChild(pName);

				let pIngredients = document.createElement("p");
				pIngredients.setAttribute("id", "resultIngredients");
				pIngredients.innerText = 'Ingredients : ' + ' \n ' + ingredients;
				pIngredients.innerText = pIngredients.innerText.split(',').join(' \n ');
				pDiv.appendChild(pIngredients);

				let pPortion = document.createElement("p");
				pPortion.setAttribute("id", "resultPortion");
				pPortion.textContent = "Portion : " + portion + " people";
				pDiv.appendChild(pPortion);

				let pPreparation_time = document.createElement("p");
				pPreparation_time.setAttribute("id", "resultPreparation_time");
				pPreparation_time.textContent = "Preparation time : " + preparation_time + " minutes";
				pDiv.appendChild(pPreparation_time);

				let pCooking_time = document.createElement("p");
				pCooking_time.setAttribute("id", "resultCooking_time");
				pCooking_time.textContent = "Cooking time : " + cooking_time + " minutes";
				pDiv.appendChild(pCooking_time);

				let pInstructions = document.createElement("p");
				pInstructions.setAttribute("id", "resultInstructions");
				pInstructions.textContent = "Instructions : " + instructions;
				pDiv.appendChild(pInstructions);

				let pImages = document.createElement("img");
				//pImage.setAttribute("id", "resultImg");
				//pImage.setAttribute("src", image);
				//pImage.addEventListener("error", imgError);

				let pOther = document.createElement("p");
				pOther.setAttribute("id", "resultOther");
				pOther.textContent = "Other : " + other;
				pDiv.appendChild(pOther);
				
  				/*this allows the div that is made dynamically to be added
  				to the existing results div in the html file*/
				let mainDiv = document.querySelector("#results"); 
  				mainDiv.appendChild(pDiv); 

			}
			/*this is the code needed to allow the user to know if what 
			they have typed is not a value in the database
			i have to first creat a paragragh element in the results div 
			and then input the data that needs to be displayed and then it
			is appended to the div. */
			if (results.recipe.length == 0){
				let errorCheck = document.querySelector("#results");
				let msgError = document.createElement("p");
				let msgError2 = document.createElement("p");
				msgError.innerText = "Sorry, this doesn't match an existing recipe.";
				msgError2.innerText= "Please try a seperate search item."
				errorCheck.appendChild(msgError);
				errorCheck.appendChild(msgError2);
			}
		}else{
			/*if there is an error with the webpage a message will be displayed 
			showing the status error code to the user*/
			let errorCheck = document.querySelector("#results");
			let msgError = document.createElement("p");
			switch(xhr.status){
				case 204:
				msgError.textContent = "Sorry, no recipe found with this name, please try another recipe.";
				break;
				case 400:
				msgError.textContent = "Sorry, somthing doesn't seem right, please try again.";
				break;
				default:
				msgError.textContent = "Sorry, please try again."; 
			}
			errorCheck.appendChild(msgError);
			/*when the response has been set the appropriate divs are hidden and shown*/
			document.querySelector("#loading").classList.add("hide");
			document.querySelector("#results").classList.remove("hide");
			document.querySelector("#searchResults").classList.remove("hide");
			document.querySelector("#search").value = "";
		}
		
		});
		xhr.open("GET", url, true);
		xhr.send();
		}
	}
	/*this is the main function for setting data from the database to the single page application*/
	function sendBar(evt){
		/*if a uplaod was made before this part will remove the results if the input is incorerct the second time */
		document.querySelector("#sendResults").classList.add("hide");
		document.querySelector("#results").classList.add("hide");
		/*prevents the browser form submitting so it can be checked*/
		evt.preventDefault();
		/*used to test field values*/
		let recipe_ok = true;
		let check_ok = true;
		/*variables set to check if values are set and correct data type*/
		let nameCheck = document.querySelector("#name").value.trim();
		let ingredientsCheck = document.querySelector("#ingredients").value.trim();
		let portionCheck = parseInt(document.querySelector("#portion").value.trim());
		let preparation_timeCheck = parseInt(document.querySelector("#preparation_time").value.trim());
		let cooking_timeCheck = parseInt(document.querySelector("#cooking_time").value.trim());
		let instructionsCheck = document.querySelector("#instructions").value.trim();

		if ((nameCheck.length > 0) && (ingredientsCheck.length > 0) && 
			(Number.isInteger(portionCheck)) && 
			(Number.isInteger(preparation_timeCheck)) && 
			(Number.isInteger(cooking_timeCheck)) && 
			(instructionsCheck.length > 0)){
			//set the values for the body for the POST to send
			let name = 'name=' + encodeURIComponent(document.querySelector("#name").value.trim());
			let ingredients = 'ingredients=' + encodeURIComponent(document.querySelector("#ingredients").value.trim());
			let portion = 'portion=' + encodeURIComponent(document.querySelector("#portion").value.trim());
			let preparation_time = 'preparation_time=' + encodeURIComponent(document.querySelector("#preparation_time").value.trim());
			let cooking_time = 'cooking_time=' + encodeURIComponent(document.querySelector("#cooking_time").value.trim());
			let instructions = 'instructions=' + encodeURIComponent(document.querySelector("#instructions").value.trim());
			let images = 'images=' + encodeURIComponent(document.querySelector("#images").value.trim());
			let other = 'other=' + encodeURIComponent(document.querySelector("#other").value.trim());
			/*var used for global scope otherwise send cannot send undefined*/
			var givenRecipe = name+"&"+ingredients+"&"+portion+"&"+preparation_time+"&"+cooking_time+"&"+instructions+"&"+images+"&"+other;
		} else {
			/*if checks not ok then false is set*/
			check_ok = false;
		}
		/*gets field error message if the input is invalid*/
		let email_hint = document.querySelector("#email_error");
		/*if the input values that are entered are not valid then a 
		hint/error message is dispayed to the user */
		if (check_ok == false){
			send_error.classList.remove("hide");
			recipe_ok = false;
		}else {
			send_error.classList.add("hide");
		}
		/*used to see if the input values are valid and able to be sent*/
		if (recipe_ok == true) {
			/*used to hide the results when a new search value is entered*/
			document.querySelector("#results").classList.add("hide");
			/*used to hide the results message when a new search value is entered*/
			document.querySelector("#searchResults").classList.add("hide");
			/*used to show the loading gif when a new/search item has been entered*/
			document.querySelector("#loading").classList.remove("hide");
			/*this clears the results div content so the new search is the 
			first content in the results*/
			document.querySelector("#results").innerHTML = "";
		
		/*this is where the xmlhttprequest starts and then the POST 
		url is created using the code below*/
		let xhr = new XMLHttpRequest();
		let url = "https://ob273.brighton.domains/ci609/assignment1/server/api.php"
		xhr.addEventListener("load", function(){
		/*this section is used to check if the POST is valid and able 
		to send the body to the api and then the responses are then displayed and shown to the 
		user*/
		if (xhr.status == 201 && xhr.readyState == 4) {

			let id = xhr.responseText
			document.querySelector("#loading").classList.add("hide");
			document.querySelector("#results").classList.remove("hide");
			document.querySelector("#sendResults").classList.remove("hide");

			/*creates a div for the response to be put inside and class
			for the contents to be styled*/
			let pDiv = document.createElement("div");
			pDiv.setAttribute("id", "resultDiv");
			pDiv.setAttribute("class", "looks");

			/*this is where the paragraph elements are made dynamically 
			with the corresponding attribute for the data of each fiel for the recipe*/
			let pName = document.createElement("p");
			pName.setAttribute("id", "resultName");
			pName.textContent = "Name : " + document.querySelector("#name").value.trim();
			pDiv.appendChild(pName);

			let pIngredients = document.createElement("p");
			pIngredients.setAttribute("id", "resultIngredients");
			pIngredients.innerText = 'Ingredients : ' + ' \n ' + document.querySelector("#ingredients").value.trim();
			pIngredients.innerText = pIngredients.innerText.split(',').join(' \n ');
			pDiv.appendChild(pIngredients);

			let pPortion = document.createElement("p");
			pPortion.setAttribute("id", "resultPortion");
			pPortion.textContent = "Portion : " + document.querySelector("#portion").value.trim() + " people";
			pDiv.appendChild(pPortion);

			let pPreparation_time = document.createElement("p");
			pPreparation_time.setAttribute("id", "resultPreparation_time");
			pPreparation_time.textContent = "Preparation time : " + document.querySelector("#preparation_time").value.trim() + " minutes";
			pDiv.appendChild(pPreparation_time);

			let pCooking_time = document.createElement("p");
			pCooking_time.setAttribute("id", "resultCooking_time");
			pCooking_time.textContent = "Cooking time : " + document.querySelector("#cooking_time").value.trim() + " minutes";
			pDiv.appendChild(pCooking_time);

			let pInstructions = document.createElement("p");
			pInstructions.setAttribute("id", "resultInstructions");
			pInstructions.textContent = "Instructions : " + document.querySelector("#instructions").value.trim();
			pDiv.appendChild(pInstructions);

			let pImages = document.createElement("img");;

			let pOther = document.createElement("p");
			pOther.setAttribute("id", "resultOther");
			cOther = document.querySelector("#other").value.trim()
			/*to see if there was any additional information given or default is set*/
			if (cOther.length > 0) {
				pOther.textContent = "Other : " + document.querySelector("#other").value.trim();
			} else {
				pOther.textContent = "Other : NotGiven";
			}
			pDiv.appendChild(pOther);
			
			/*this allows the div that is made dynamically to be added
			to the existing results div in the html file*/
			let mainDiv = document.querySelector("#results"); 
			mainDiv.appendChild(pDiv); 
			/*reset the form so that user can enter more data without erasing the previous set*/
			document.getElementById("sendForm").reset();

		}else{
			/*if there is an error with the webpage a message will be displayed 
			showing the status error code to the user*/
			let errorCheck = document.querySelector("#results");
			let msgError = document.createElement("p");
			msgError.innerText = "Sorry, Somthing doesn't seem corerct, please try again.";
			errorCheck.appendChild(msgError);
			document.querySelector("#sendResults").classList.add("hide");
			document.querySelector("#loading").classList.add("hide");
			document.querySelector("#results").classList.remove("hide");
			document.getElementById("sendForm").reset();
		}
		
		});
		/*this is where the body of the POST is sent to the API*/
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(givenRecipe);
		}
	}