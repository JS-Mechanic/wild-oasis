import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const {mutate: login, isLoading: isLoggingIn} = useMutation({
		mutationFn: ({email, password}) => loginApi({email, password}),
		onSuccess: user => {
			queryClient.setQueryData(["user"], user.user);
			toast.success("You are successfully logged in");
			navigate("/dashboard");
		},
		onError: e => {
			toast.error(e.message);
		},
	});
	return {login, isLoggingIn};
}
