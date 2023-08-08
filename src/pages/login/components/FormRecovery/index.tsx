import { useCallback, useRef, useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { Icons } from "@/lib/icons";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import FormTitle from "../TitleForm";
import { User } from "@/pages/api/users/User";

import { useAuth } from "@/hooks/auth";
import { useToast } from "@/hooks/toast";

import getValidationErrors from "@/utils/getValidationErrors";

import { Container, ContainerInput } from "./styles";

export default function FormLogin() {
  const formRef = useRef<FormHandles>(null);
  const [disabled, setDisabled] = useState(true);
  console.log("disabled: ", disabled);
  const { signIn: login } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();

  const validateSchema = () => {
    formRef.current?.setErrors({});
    const message = "Campo obrigatório";
    const schema = Yup.object().shape({
      email: Yup.string().required(message).email("Digite um email válido"),
      password: Yup.string().required(message),
    });
    return { schema };
  };

  const handleSubmit = useCallback(
    async (dataEmail: { email: string }) => {
      try {
        const { schema } = validateSchema();

        await schema.validate(dataEmail, { abortEarly: false });

        const { data } = await api.get<{ user: User }>(
          `users/${dataEmail.email}`
        );

        if (data?.user?.id) await router.push(`/reset-password`);

        addToast({
          type: "success",
          title: "Usuário identificado com sucesso",
          description: "Usuário.",
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description:
            err.message ||
            "Ocorreu um erro ao fazer login, cheque as credenciais.",
        });
      }
    },
    [addToast, login, router]
  );

  const onChangeInput = (e: { target: { value: string } }) =>
    setDisabled(e.target?.value.length === 0);

  return (
    <Container>
      <FormTitle
        title="Recuperar senha"
        complement="."
        infoForUser="Informe o email do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir sua senha."
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <ContainerInput>
          <Input
            name="email"
            onChange={onChangeInput}
            icon={Icons.At}
            placeholder="Informe seu email"
          />
        </ContainerInput>
        <Button disabled={disabled} type="submit">
          enviar link
        </Button>
      </Form>
    </Container>
  );
}
