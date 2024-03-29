import { FC } from "react";
import gitStore from "@store/gitStore";
import { formatDate } from "@utils/formatDate";
import Avatar from "@components/UI/Avatar";
import AboutUser from "@modules/AboutUser";
import { observer } from "mobx-react-lite";

const DetailPage: FC = observer(() => {
  const { activeRepository } = gitStore;

  if (activeRepository === null) {
    return <div>Репозиторий не найден</div>;
  }

  return (
    <main className="wrapper">
      <Avatar
        href={activeRepository.owner.avatar_url}
        title={activeRepository.name}
      />

      <AboutUser
        autor={activeRepository.owner.login}
        nameRep={activeRepository.name}
        linkRep={activeRepository.svn_url}
        createDate={formatDate(activeRepository.created_at)}
        updateDate={formatDate(activeRepository.updated_at)}
        language={activeRepository.language}
      />
    </main>
  );
});

export default DetailPage;
