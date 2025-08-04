import { useRouter } from "next/router";
import { FC } from "react";
import { Profiles } from "screens/Profiles";

const ProfilesPage: FC = () => {
  const router = useRouter();
  const query = router.query;
  const idProfile = query.id as string;

  return <Profiles idProfile={idProfile}/>
};

export default ProfilesPage;
