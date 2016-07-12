Server.start(Server.http,
	{
		title: "Calculating Price",
		page: function() {
			customer = "Dickson";
			price = 12.99;
			tax = price * 0.16;
			total = price + tax;
			<p>Customer {customer} has to pay {total}</>
		}
	})
