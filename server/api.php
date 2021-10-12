<?php
	/**
	 * this is the main class that has all the methods/functions needed to run the api that i have created for the recipes
	 */
	class myapi 
	{	
		//I have set the database credentials in the class to make testing errors and error handeling, making changes more convenient for developers or debuging
		// change the database from test to the actual one
		private $servername = "localhost";
		//private $database = "ob273_ci609_test";
		private $database = "ob273_ci609_ass";
		private $username = "ob273_user1";
		private $password = "thisisapain";
		//status code set to 200, so if an error occurs it is changed in the correct area
		private $statuscode = 200;
		//My database connection variable so i can call it in any method that requires access
		private $myDatabase = null;

		//this is the construct method that is used to make the first connection with the database
		function __construct()
		{
			$this->myDatabase = new mysqli($this->servername, $this->username, $this->password, $this->database);
			if ($this->myDatabase->connect_error){
				echo "Connection failed: " . $this->myDatabase->connect_error;
				$this->statuscode = 500;
			}
		}

		//this is the destruct method that is used to close the connection to the database
		function __destruct()
		{
			$this->myDatabase->close();
		}

		//This method is used to see if the user is getting data from the database with a GET request or setting data to the database using a POST request, it is also used to sanitise the inputs given from the user before being handed off to the set and get methods.
		//real_escape_string is not used as the prepare function does checking and handeling for the sql query
		public function handleRequest(){
			$method = $_SERVER['REQUEST_METHOD'];
			//If the request is a GET for getting data out of the databse
			if ($method == 'GET'){
				$name = $_GET['name'];
				if (isset($name)) {
					if((strlen($name) > 0 && strlen($name) <= 64)){
						$this->getData($name);
					} else {
						//If the imput is invalid for length or type
						$this->statuscode =400;
					}
				} else {
					//If the required parameter has not been given
					$this->statuscode = 400;
				}
				//If the request is a POST for setting data to the databse
			} elseif ($method == 'POST'){//post method closed
				$name = $_POST['name'];
				$ingredients = $_POST['ingredients'];
				$portion = intval($_POST['portion']);
				$preparation_time = intval($_POST['preparation_time']);
				$cooking_time = intval($_POST['cooking_time']);
				$instructions = $_POST['instructions'];
				$images = $_POST['images'];//can be null
				$other = $_POST['other'];//can be null
				/*if used to make sure the data is the correct type and length*/
				if(isset($name) && isset($ingredients) && is_int($portion) && isset($portion) && is_int($preparation_time) && isset($preparation_time) && is_int($cooking_time) && isset($cooking_time)&& isset($instructions)){
					/*if used to sterilize the data*/
					if ((strlen($name) > 0 && strlen($name) <=64) && 
						(strlen($ingredients) > 0 && strlen($ingredients) <= 5000) && 
						(strlen((string)$portion) > 0 && strlen((string)$portion) <=11) && 
						(strlen((string)$preparation_time) > 0 && strlen((string)$preparation_time) <=11) && 
						(strlen((string)$cooking_time) > 0 && strlen((string)$cooking_time) <=11) && 
						(strlen($instructions) > 0 ) && 
						((strlen($images) > 0) || !is_null($images)) && 
						((strlen($other) > 0) || !is_null($other))){
						$this->setData($name,$ingredients,$portion,$preparation_time,$cooking_time,$instructions,$images,$other);
					} else {
						//If one or more imput(s) is invalid for length or type
						$this->statuscode= 400;
						//used to see which issues i was having with the post method
						//echo "invalid input";
					}
				} else {
					//If one or more parameter(s) have not been given
					$this->statuscode= 400;
					//used to see which issues i was having with the post method
					//echo "parameter not set";
				}
			} else {
				//If the request is not a GET or POST or PUT
				$this->statuscode = 400;
			}
			//Used to show the appropriate http status code
			http_response_code($this->statuscode);
		}

		//This method is used to get the data from the database as the name suggests, the opropriate data values are retrived via the SELECT query and inputed into an array which is then converted into json
		//Prepare used as it is more secure and it is optimise a statement for repeated execution compared to query
		private function getData($name){
			$result = $this->myDatabase->prepare("SELECT name,ingredients,portion,preparation_time,cooking_time,instructions,images,other FROM recipe WHERE name LIKE '%".$name."%'");
			$result->bind_Param('s', $name);
			$result->execute();
			$result =$result->get_result();
			if($result){
				if($result->num_rows > 0){
					$recipe = array();
					for ($i=0; $i < $result->num_rows; $i++) { 
						$row = $result->fetch_assoc();
						array_push($recipe, $row);
					}
					$recipeObj = new stdClass();
					$recipeObj->recipe = $recipe;
					header('content-type: application/json');
					echo json_encode($recipeObj); 
				} else {
					/*if nothing is found*/
                	$this->statuscode = 204;
            	}
			} else {
            //If the SQL failed
            $this->statuscode = 400;
        	} 
		}

		//This is used to set data to the database as the name suggests, the opropriate data values are set via the INSERT query and the id value is inputed in a object which is then converted into json
		//Prepare used as it is more secure and it is optimise a statement for repeated execution compared to query
		private function setData($name,$ingredients,$portion,$preparation_time,$cooking_time,$instructions,$images,$other){
			$stmt = $this->myDatabase->prepare("INSERT INTO recipe (name,ingredients,portion,preparation_time,cooking_time,instructions,images,other) "
			. "VALUES (?,?,?,?,?,?,?,?)");
			$stmt->bind_Param('ssssssss', $name,$ingredients,$portion,$preparation_time,$cooking_time,$instructions,$images,$other);
			$stmt->execute();
			$idObj = new stdClass();
			$idObj->id = $stmt->insert_id;
			$this->statuscode = 201;
			http_response_code(201);
			echo json_encode($idObj);
		}
	}
	//Used to start the script
	$api = new myapi();
	$api->handleRequest();
?>