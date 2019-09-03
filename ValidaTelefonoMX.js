function businessPhoneOnChange() {
	var telephone = Xrm.Page.data.entity.attributes.get("mobilephone");
	// Regular expression with Telephone format
	var regExp= /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
	if (telephone) {
		var phoneNumber = telephone.getValue();
		if (phoneNumber.search(regExp) == -1) {
			Xrm.Utility.alertDialog("Telefono invalido",function(){return;});
			Xrm.Page.getAttribute ("mobilephone").setValue("");
		}
	}
}