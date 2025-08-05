import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { ProfileData } from "models/Profile";
import { FC } from "react";

// Estilos para un único perfil
const singleProfileCardStyles = StyleSheet.create({
  page: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  backgroundCard: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    zIndex: 0,
    borderRadius: 12,
  },
  profileCard: {
    flex: 1,
    padding: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#007BFF",
  },
  profileName: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  profileRole: {
    fontSize: 20,
    color: "#666",
    marginBottom: 15,
  },
  profileDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 1.5,
    color: "#444",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 20,
  },
  profileContact: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
    marginTop: 5,
  },
});

// Estilos base para múltiples perfiles
const multiProfileCardBaseStyles = StyleSheet.create({
  page: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    // Eliminado: flexDirection: "row"
  },
  cardContainer: {
    flexDirection: "row", // AHORA en el contenedor de las tarjetas
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 10,
    flex: 1,
  },
  backgroundCard: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    zIndex: 0,
    borderRadius: 8,
  },
  profileCard: {
    flexGrow: 1,
    flexBasis: "250px",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "transparent",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#007BFF",
  },
  profileName: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  profileRole: {
    fontSize: 8,
    color: "#888",
    textAlign: "center",
  },
  profileShortDescription: {
    fontSize: 6,
    color: "#444",
    textAlign: "center",
    marginBottom: 3,
  },
  profileContact: {
    fontSize: 6,
    color: "#888",
    textAlign: "center",
  },
});

type ProfilesPDFProps = {
  profile: ProfileData;
  quantity: number;
  background?: string;
  textColor?: string;
};

export const ProfilesPDF: FC<ProfilesPDFProps> = ({ profile, quantity, background, textColor }) => {
  if (!profile || quantity === 0) return null;

  if (quantity === 1) {
    return (
      <Document>
        <Page size="A4" style={singleProfileCardStyles.page}>
          <View style={singleProfileCardStyles.profileCard}>
            {background && <Image src={background} style={singleProfileCardStyles.backgroundCard} />}
            {profile.foto && (
              <Image
                style={singleProfileCardStyles.profileImage}
                src={profile.foto}
              />
            )}
            <Text
              style={{ ...singleProfileCardStyles.profileName, color: textColor || singleProfileCardStyles.profileName.color }}
            >
              {profile.nombre}
            </Text>
            <Text
              style={{ ...singleProfileCardStyles.profileRole, color: textColor || singleProfileCardStyles.profileRole.color }}
            >
              {profile.rol}
            </Text>
            {profile.descripcion && (
              <Text
                style={{ ...singleProfileCardStyles.profileDescription, color: textColor || singleProfileCardStyles.profileDescription.color }}
              >
                {profile.descripcion}
              </Text>
            )}
            {profile.telefono && (
              <Text
                style={{ ...singleProfileCardStyles.profileContact, color: textColor || singleProfileCardStyles.profileContact.color }}
              >
                Teléfono: {profile.telefono}
              </Text>
            )}
            {profile.contacto && (
              <Text
                style={{ ...singleProfileCardStyles.profileContact, color: textColor || singleProfileCardStyles.profileContact.color }}
              >
                Email: {profile.contacto.replace("mailto:", "")}
              </Text>
            )}
          </View>
        </Page>
      </Document>
    );
  }

  // Lógica para determinar la base flexible de las tarjetas
  const getCardFlexBasis = (count: number) => {
    if (count <= 2) return "45%";
    if (count <= 3) return "30%";
    if (count <= 4) return "23%";
    return "19%";
  };

  const dynamicFlexBasis = getCardFlexBasis(quantity);

  return (
    <Document>
      <Page
        size="A4"
        orientation="landscape"
        style={multiProfileCardBaseStyles.page}
      >
        <View style={multiProfileCardBaseStyles.cardContainer}>
          {Array.from({ length: quantity }, (_, index: number) => (
            <View
              key={index}
              style={{
                ...multiProfileCardBaseStyles.profileCard,
                flexBasis: dynamicFlexBasis,
              }}
            >
              {background && <Image src={background} style={multiProfileCardBaseStyles.backgroundCard} />}
              {profile.foto && (
                <Image
                  style={multiProfileCardBaseStyles.profileImage}
                  src={profile.foto}
                />
              )}
              <Text
                style={{ ...multiProfileCardBaseStyles.profileName, color: textColor || multiProfileCardBaseStyles.profileName.color }}
              >
                {profile.nombre}
              </Text>
              <Text
                style={{ ...multiProfileCardBaseStyles.profileRole, color: textColor || multiProfileCardBaseStyles.profileRole.color }}
              >
                {profile.rol}
              </Text>
              {profile.descripcion && (
                  <Text
                    style={{ ...multiProfileCardBaseStyles.profileShortDescription, color: textColor || multiProfileCardBaseStyles.profileShortDescription.color }}
                  >
                      {profile.descripcion}
                  </Text>
              )}
              {profile.telefono && (
                <Text
                  style={{ ...multiProfileCardBaseStyles.profileContact, color: textColor || multiProfileCardBaseStyles.profileContact.color }}
                >
                  Tel: {profile.telefono}
                </Text>
              )}
              {profile.contacto && (
                <Text
                  style={{ ...multiProfileCardBaseStyles.profileContact, color: textColor || multiProfileCardBaseStyles.profileContact.color }}
                >
                  Email: {profile.contacto.replace("mailto:", "")}
                </Text>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ProfilesPDF;