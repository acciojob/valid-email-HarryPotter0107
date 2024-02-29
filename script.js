function validEmail(str) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(str.match(emailRegex)){
	return true;
}else{
	return false;
}
} 

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));