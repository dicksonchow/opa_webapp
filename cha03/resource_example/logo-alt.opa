Server.start(
	Server.http,
	[{
		resources: @static_resource_directory("resources")
	},
	{
		title: "Logo alt",
		page: function(){
			<img src="resources/imgs/opa-logo.png" alt="Opa"/>
			<hr/>
			<h1>This is a demo of a very simple Opa app.</>
		}
	}]
	)
