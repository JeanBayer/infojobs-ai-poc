import FormSignin from "@/components/FormSignin/FormSignin";

function Page() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-40 font-bold text-3xl text-center mb-6">
          Iniciar Sesion
        </h1>
        <FormSignin />
      </div>
    </div>
  );
}

export default Page;
