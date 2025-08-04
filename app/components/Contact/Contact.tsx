import { mostrarToast } from "components/ToastProvider";
import { CONTACT_TEMPLATE, ENTERPRISE_EMAIL } from "constants/general";
import { useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useSendEmail } from "services/Home/HomeHooks";
import { REGEX } from "../../constants/regex";
import { Button } from "../Button";
import {
  BlockContact,
  ContactRoot,
  Form,
  FormButton,
  FormHelperText,
  FormRow,
  Grid,
  Paragraph,
  Section,
  Title,
  ToolFormGroup,
  ToolFormInputText,
  ToolFormInputTextArea,
} from "./Contact.styles";

export const Contact = () => {
  const { sendEmail, isLoading: isLoadingSendEmail } = useSendEmail();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");
  const errorEmail = useMemo(() => {
    if (email.length > 0 && !REGEX.email.test(email)) {
      return true;
    }
    return false;
  }, [email]);
  const errorPhone = useMemo(() => {
    if (telefono.length > 0 && (telefono.length > 9 || telefono.length < 9)) {
      return true;
    }
    return false;
  }, [telefono]);
  const disableSaveButton = useMemo(() => {
    if (
      nombre.length == 0 ||
      apellidos.length == 0 ||
      email.length == 0 ||
      telefono.length == 0 ||
      consulta.length == 0 ||
      errorEmail ||
      errorPhone
    ) {
      return true;
    }
    return false;
  }, [nombre, apellidos, email, telefono, consulta, errorEmail, errorPhone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail({
      from: email,
      fromName: `${nombre} ${apellidos}`,
      to: ENTERPRISE_EMAIL,
      subject: `Solicitud contacto: ${nombre} ${apellidos}`,
      templateName: CONTACT_TEMPLATE,
      metadata: {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        consulta: consulta,
      },
    })
      .then((response) => {
        if (response.status === "success") {
          mostrarToast("success", "Correo enviado");
        }
        clearForm();
      })
      .catch((error) => {
        mostrarToast(
          "error",
          "Ha ocurrido un error por favor intenta más tarde"
        );
      });
  };

  const registerPhone = (value: string) => {
    const validPhonedRegex = REGEX.onlyNumber;
    if (validPhonedRegex.test(value)) {
      setTelefono(value);
    }
  };

  const registerName = (value: string) => {
    const validNameRegex = REGEX.name;
    if (validNameRegex.test(value)) {
      setNombre(value);
    }
  };

  const registerLastName = (value: string) => {
    const validNameRegex = REGEX.name;
    if (validNameRegex.test(value)) {
      setApellidos(value);
    }
  };

  const clearForm = () => {
    setNombre("");
    setApellidos("");
    setEmail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <ContactRoot>
      <Section>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <BlockContact>
            <Title size={24}>Deja tus datos y nos comunicaremos contigo</Title>
            <Paragraph>Todos los campos son obligatorios</Paragraph>

            <Form>
              <FormRow className="gap-2">
                <ToolFormGroup>
                  <ToolFormInputText
                    placeholder="Nombre*"
                    value={nombre}
                    type="text"
                    name="nombre"
                    width="100%"
                    maxLength={100}
                    onChange={(event) => registerName(event.target.value)}
                  />
                </ToolFormGroup>

                <ToolFormGroup className="padding-top-mobile-20">
                  <ToolFormInputText
                    placeholder="Apellidos*"
                    value={apellidos}
                    type="text"
                    name="apellidos"
                    width="100%"
                    maxLength={100}
                    onChange={(event) => registerLastName(event.target.value)}
                  />
                </ToolFormGroup>
              </FormRow>

              <FormRow className="gap-2 padding-top-10">
                <ToolFormGroup>
                  <ToolFormInputText
                    placeholder="Email*"
                    value={email}
                    type="text"
                    name="email"
                    width="100%"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errorEmail && (
                    <FormHelperText>El email es incorrecto.</FormHelperText>
                  )}
                </ToolFormGroup>

                <ToolFormGroup className="padding-top-mobile-20">
                  <ToolFormInputText
                    placeholder="Teléfono*"
                    maxLength={9}
                    value={telefono}
                    type="text"
                    name="telefono"
                    width="100%"
                    onChange={(event) => registerPhone(event.target.value)}
                  />
                  {errorPhone && (
                    <FormHelperText>
                      El teléfono celular es incorrecto.
                    </FormHelperText>
                  )}
                </ToolFormGroup>
              </FormRow>

              <FormRow className="gap-1 padding-top-10">
                <ToolFormGroup>
                  <ToolFormInputTextArea
                    placeholder="Consulta*"
                    value={consulta}
                    name="consulta"
                    onChange={(event) => setConsulta(event.target.value)}
                  />
                </ToolFormGroup>
              </FormRow>
              <FormButton>
                <Button
                  onClick={(e) => handleSubmit(e)}
                  disabled={disableSaveButton || isLoadingSendEmail}
                  className={isLoadingSendEmail ? "loading-indicator" : ""}
                >
                  ENVIAR
                </Button>
              </FormButton>
            </Form>
          </BlockContact>
        </Grid>
      </Section>
    </ContactRoot>
  );
};
