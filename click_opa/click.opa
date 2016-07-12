Server.start(Server.http,
	{
		title: "Click me",
		page: function(){
			<button onclick={function(_) { #thankyou = "Thank You" }}>Click me!</>
			<div id="thankyou"/>
		}
	})
