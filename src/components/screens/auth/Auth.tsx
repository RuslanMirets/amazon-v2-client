import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import Meta from "@/components/ui/Meta";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/input/Field";
import { IEmailPassword } from "@/store/user/user.interface";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useAuthRedirect } from "./useAuthRedirect";
import { validEmail } from "./valid-email";

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const { login, register } = useActions();

	const [type, setType] = useState<"login" | "register">("login");

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IEmailPassword>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
		if (type === "login") login(data);
		else register(data);

		reset();
	};

	return (
		<Meta title="Auth">
			<section className="flex h-screen">
				<form
					className="rounded-lg bg-white shadow-sm p-8 m-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading className="capitalize text-center mb-4">{type}</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<>
							{" "}
							<Field
								{...formRegister("email", {
									required: "Email is required",
									pattern: {
										value: validEmail,
										message: "Please enter a valid email address",
									},
								})}
								placeholder="Email"
								error={errors.email?.message}
							/>
							<Field
								{...formRegister("password", {
									required: "Password is required",
									minLength: {
										value: 6,
										message: "Min length should more 6 symbols",
									},
								})}
								type="password"
								placeholder="Password"
								error={errors.password?.message}
							/>
							<Button className="w-full" type="submit" variant="orange">
								Lets go!
							</Button>
							<div className="flex justify-center mt-3">
								<button
									className="inline-block opacity-20  capitalize text-sm"
									type="button"
									onClick={() =>
										setType(type === "login" ? "register" : "login")
									}
								>
									{type === "login" ? "register" : "login"}
								</button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
