/*
This javascript file deals with local storage and cookies
*/

/**
	getUserFirtNFromLocalStorage function gets the user First name from local storage, it returns false if value not found in local storage
	userFname is stored as first name in local storage
*/
function getUserFirtNFromLocalStorage() {
	
	if( localStorage.getItem('userFname')){
		return(localStorage.getItem('userFname'));
	} else{
		return(false);
	}
}


/**
	getUserLastNFromLocalStorage function gets the user Last name from local storage, it returns false if value not found in local storage.
	userLname is stored as last name in local storage
*/
function getUserLastNFromLocalStorage() {
	
	if( localStorage.getItem('userLname')){
		return(localStorage.getItem('userLname'));
	} else{
		return(false);
	}
}


/**
	getUserAddressFromLocalStorage function gets the user address from local storage, it returns false if value not found in local storage.
	address is stored as address in local storage
*/
function getUserAddressFromLocalStorage() {
	
	if( localStorage.getItem('address')){
		return(localStorage.getItem('address'));
	} else{
		return(false);
	}
}


/**
	setUserLocalStorage function sets the userFname, userLname and address values to local storage
*/
function setUserLocalStorage(userFname,userLname,address) {
	localStorage.setItem('userFname',userFname);
	localStorage.setItem('userLname',userLname);
	localStorage.setItem('address',address);
}


/**
	getUserFirstNFromCookies function gets the first name from cookies. A default string is returned if cookie not found
*/
function getUserFirstNFromCookies(){
	if(GetCookie('Fname') == null ){
		return "Enter First Name";
	} else {
		var Fname = GetCookie('Fname');
		return Fname;
	}

}


/**
	getUserLastNFromCookies function gets the last name from cookies. A default string is returned if cookie not found
*/
function getUserLastNFromCookies(){
	if(GetCookie('Lname') == null ){
		return "Enter Last Name";
	} else {
		var Lname = GetCookie('Lname');
		return Lname;
	}

}


/**
	getUserAddressCookies function gets the user address from cookies. A default string is returned if cookie not found
*/
function getUserAddressCookies(){
	if(GetCookie('Address') == null ){
		return "Enter Address";
	} else {
		var Address = GetCookie('Address');
		return Address;
	}
}


/**
	setUserCookies function stores the user fname,lname,Address to cookies.
*/
function setUserCookies(Fname,Lname,Address) {
	//alert("SetCookie called" + Fname +Lname+Address);
	SetCookie('Fname',Fname);
	SetCookie('Lname',Lname);
	SetCookie('Address',Address);
}
