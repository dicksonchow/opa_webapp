function start(url){
	match (url) {
		case {path: ["bold" | text] ...}:
			Resource.page("Bold", <b>Bold</>)
		case {path: ["italic" | text] ...}:
			Resource.page("Italic", <i>Italic</>)
		case {~path ...}:
			Resource.page("Regular", <p>Regular</>)
	}
}

Server.start(Server.http, {dispatch: start});
