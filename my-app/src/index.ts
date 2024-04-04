
export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext):Promise<Response> {
		console.log(request.body)
		console.log(request.headers)
		if(request.method==="GET")
		{
			return Response.json({
				message:"you send a get request"
			});
		}
		if(request.method==="POST")
		{
			return Response.json({
				message:"you send a post request"
			});
		}
		else{
			return Response.json({
				message:"you did not send a request"
			});
		}
	},
};
