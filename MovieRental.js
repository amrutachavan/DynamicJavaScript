	
//variable to store the input data array
var inputDataArray = getInputData();

/*checkBrowser function checks for browser compatibilty*/
function checkBrowser(){
	
	if(document.getElementById){
		browserType = 'gecko';
	} else{
		//Open a new window and ask user to download new browser
		var win=window.open('','Download Browser','height=600, width=800,resizable=yes,scrollbars=yes,toolbar=yes');
		win.document.write('<h1 align="center">Browser type not supported</h1>'+
			'<h3 align="center">Please download and use one of the following</h3>');
		win.document.write('<div align="center">'+'<a href="https://www.mozilla.org/en-US/firefox/new/"><img src="images/firefox-converted.png" style="padding:10px"></a>'+'<div>');
		win.document.write('<div align="center">'+'<a href="https://www.google.com/chrome/browser/desktop/index.html?utm_source=bing&utm_medium=sem&utm_campaign=1001342|ChromeWin10|US|en|Hybrid|Text|BKWS~Exact&brand=CHBF"><img src="images/google-chrome-logo.gif" style="padding:10px"></a>'+'<div>');
		win.document.write('<div align="center">'+'<a href="https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads"><img src="images/Internetexplorer_logo.png" style="padding:10px"></a>'+'<div>');
	}
	loadBackgroundImages();
	loadSearchTypeList(inputDataArray,0);
	changeBackgroundImage(1);
}
		
var path="images/";
var newImage=new Array();

//function to load image source in an array
function loadBackgroundImages() {
	for( var i=1; i<22; i++){
			newImage[i]=new Image();
			newImage[i].src=path+i+".png";
		}
}

//changeBackgroundImage function changes the background after interval of 10000ms
function changeBackgroundImage(i) {
	if(i>20){
		i=1;
	}
	var fileName=newImage[i].src;
	document.getElementById("containerDiv").style.background= "url('images/"+ i +".png') no-repeat center ";
	setTimeout(function(){changeBackgroundImage(++i);},10000);	
}

//loadSearchTypeList creates the select options dynamically
function loadSearchTypeList(inputDataArray,selectedOption) {

	//create new select menu if element array exsists 
	if(inputDataArray[selectedOption]!= undefined) {
		//get the container div
		var containerParentDiv = document.getElementById('containerDiv');
		var parentDiv ;
		//if div already exists then dont create new div
		if(!document.getElementById('inLineDiv1')) {
			parentDiv = document.createElement('div');
			parentDiv.className='inlineElem';
			parentDiv.id = 'inLineDiv1';
			containerParentDiv.appendChild(parentDiv);
		} else {
			parentDiv = document.getElementById('inLineDiv1');
		}
		
		//create div for the select option
		var divID1 = document.createElement('div');
		divID1.className='selectDiv';
		divID1.id = 'divID'+selectedOption;
		parentDiv.appendChild(divID1);

		//Add question label 
		var queLabel = document.createElement('Label');
		var qText = document.createTextNode(inputDataArray[selectedOption][0]);
		queLabel.appendChild(qText);
		queLabel.className = 'queLabel';
		
		//Add slect div for the question asked
		var searchType1 = document.createElement('Select');
		searchType1.className = 'selectionStyle';
		searchType1.id = 'searchType'+selectedOption;
		
		//add onchange method for select menu
		searchType1.setAttribute("onchange","loadNextList(this,'divID1')");
		divID1.appendChild(queLabel);
		divID1.appendChild(searchType1);
		//add options to the select menu
		addOptions(searchType1,inputDataArray[selectedOption]);
	} else {
		//if there is no array for the selcted value then call show order function
		showOrder(selectedOption);
	}
}

//function to add and remove list acording to slections
function loadNextList(selectedItem) {

	//If current slected element is not last element then delete other child elements till current elem is last
	if(selectedItem.parentNode!=selectedItem.parentNode.parentNode.lastChild) {
		while(selectedItem.parentNode!=selectedItem.parentNode.parentNode.lastChild) {
			selectedItem.parentNode.parentNode.removeChild(selectedItem.parentNode.parentNode.lastChild);
			//console.log(selectedItem.parentNode.childNodes.length);
		}
	}
	var selectedSearch = selectedItem.options[selectedItem.selectedIndex].value;
	//call loadSearchTpe method to create the select element
	loadSearchTypeList(inputDataArray,selectedSearch);
}

//addOptions function is used to add options to the select menu
function addOptions(selectListD,selectedSearch) {
	
	//add first default option to the list
	var searchTypeOpt = document.createElement('option');
	searchTypeOpt.text = "~~Select~~";
	searchTypeOpt.value = "~~Select~~";
	searchTypeOpt.setAttribute("selected", "selected");
	searchTypeOpt.setAttribute("disabled", true);
	selectListD.appendChild(searchTypeOpt);

	//iterate over the array element and add options to select menu
	for(var i = 1; i < selectedSearch.length; i++) {
		var searchTypeOpt = document.createElement('option');
		searchTypeOpt.text = selectedSearch[i];
		searchTypeOpt.value = selectedSearch[i];
		selectListD.appendChild(searchTypeOpt);
	}
}
		
//showOrder function is used to add selected movie to order list
function showOrder(selectedItem){

	var selectionArray = document.getElementsByTagName('Select');
	var selectedItemName="";
	var cartList; 
	var cartDiv = document.getElementById('containerDiv');
	//get the slected options 
	for(var i = 0 ; i<selectionArray.length; i++) {
		selectedItemName = selectedItemName+" >> "+selectionArray[i].options[selectionArray[i].selectedIndex].text;
	}
	
	//if cartList already exists then dont create new list
	if(!document.getElementById('cartList')) {
		cartList = document.createElement('ul');
		cartList.className = 'cartList';
		cartList.id = 'cartList';
		cartDiv.appendChild(cartList);
		var cartItemDefault = document.createElement('lh');   
		//addd default li item to the list
		cartItemDefault.appendChild(document.createTextNode("~~~Items Added To Cart~~~"));
		cartItemDefault.className = 'cartItemDefault';
		cartList.appendChild(cartItemDefault);
	} else {
		cartList = document.getElementById('cartList');
	}
	
	//add new li item depending on user choice
	var cartItem = document.createElement('li');   
	cartItem.appendChild(document.createTextNode(selectedItemName));
	cartList.appendChild(cartItem);
	
	//call method that will load user details
	fillUserShippingDetails();
}

//fillUserShippingDetails function is used to display the user first name, user last name, user address.
function fillUserShippingDetails(){
	//if div already exists then dont create it else add new div
	if(!document.getElementById('modalDiv')){
		var bodyElem = document.getElementById('the_body');
		var modalDiv = document.createElement('div');
		modalDiv.className = 'modalDiv';
		modalDiv.id = 'modalDiv';
		var shipDiv = document.createElement('div');
		var shipLabel = document.createElement('Label');
		shipLabel.id = 'shipLabel';
		var shipLabelText = document.createTextNode("~ ~ Enter Shipping Details ~ ~");
		shipLabel.className = 'queLabel';
		shipLabel.appendChild(shipLabelText);
		shipDiv.appendChild(shipLabel);
		modalDiv.appendChild(shipDiv);

		//create new label for first name
		var firstNLabel = document.createElement('Label');
		var firstNLabelText = document.createTextNode("First Name");
		firstNLabel.className = 'queLabel';
		firstNLabel.appendChild(firstNLabelText);
		
		//create new input field to accept user first name
		var fnameInput = document.createElement('input');
		fnameInput.type = "text";
		fnameInput.id = 'fname';
		fnameInput.className = 'detailsElem';

		//get user first name from local storage, if not found in local storage check in cookies
		if(getUserFirtNFromLocalStorage()==false){
			fnameInput.value =getUserFirstNFromCookies();
		} else{
			fnameInput.value = getUserFirtNFromLocalStorage();
		}
		modalDiv.appendChild(firstNLabel);
		modalDiv.appendChild(fnameInput);
	
		//Create new label for last name
		var lastNLabel = document.createElement('Label');
		var lastNLabelText = document.createTextNode("Last Name");
		lastNLabel.className = 'queLabel';
		lastNLabel.appendChild(lastNLabelText);
		
		//create new input field to accept user last name
		var lnameInput = document.createElement('input');
		modalDiv.appendChild(lastNLabel);
		modalDiv.appendChild(lnameInput);
		lnameInput.type = "text";    
		lnameInput.id = 'lname';
		lnameInput.className = 'detailsElem';
		//get user last name from local storage, if not found in local storage check in cookies
		if(getUserLastNFromLocalStorage()==false){
			lnameInput.value =getUserLastNFromCookies();
		} else{
			lnameInput.value=getUserLastNFromLocalStorage();
		}
		
		//create label for address	   
		var addressLabel = document.createElement('Label');
		var addressNLabelText = document.createTextNode("Address");
		addressLabel.className = 'queLabel';
		addressLabel.appendChild(addressNLabelText);
		
		//create new input field to accept user address
		var addressInput = document.createElement('input');
		addressInput.type = "text"; 

		//get user address from local storage, if not found in local storage check in cookies 
		if(getUserAddressFromLocalStorage()==false){
			addressInput.value =getUserAddressCookies();
		} else{
			addressInput.value  = getUserAddressFromLocalStorage();
		}
		addressInput.id = 'address';
		addressInput.className = 'detailsElem';
		modalDiv.appendChild(addressLabel);
		modalDiv.appendChild(addressInput); 
		
		//add confirm button and show user final message	
		var confirmBtn = document.createElement('Button');
		var confirmBText = document.createTextNode("Submit");
		confirmBtn.appendChild(confirmBText);
		confirmBtn.setAttribute("onclick",'saveToStorage(document.getElementById("fname").value,document.getElementById("lname").value,document.getElementById("address").value)');
		modalDiv.appendChild(confirmBtn);
		confirmBtn.className = 'btnStyle';
		bodyElem.appendChild(modalDiv);
	}

}
		
//saveToStorage is used to save user details to local storage and cookies.
function saveToStorage(fname,lname,address) {
	
	//store user details in local storage
	setUserLocalStorage(fname,lname,address);

	//store details in cookies
	setUserCookies(fname,lname,address);

	//get count of elements in cartlist 
	var ordertotal = document.getElementById('cartList').childNodes.length-1 ;
	var lis = document.getElementById('cartList');
	
	//clear the cart of selected items
	for(var i=0;i<ordertotal; i++) {
   		lis.removeChild(lis.childNodes[1]);
	}
	
	//Show confirmation window to the user
	var left = (screen.width/2)-(550);
	var top = (screen.height/2)-(100);
	var win2=window.open('','Transaction successful','height=150, width=1100,resizable=no,scrollbars=no,toolbar=yes, top='+top+', left='+left);
	win2.document.write('<h1 align="center" style="color:#993300;font-family:"Courier New", Courier, monospace;font-size:30px;font-weight:bold;padding-left:10px;padding-right:10px;">'+fname+' '+lname+' your order of '+ordertotal+' Movie CD is on the way to '+address+'</h1>');
	win2.document.write('<h1 align="center"><button onclick="self.close()"style="width: 200px;height: 30px; font-family:Courier New, Courier, monospace; color:#cc0000;font-size: 20px;font-weight:bold;">Close</button></h1>');
	win2.focus();
}