import MyButton from "@components/UI/MyButton";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface AboutUserProps {
  autor: string;
  nameRep: string;
  linkRep: string;
  createDate: string;
  updateDate: string;
  language: string;
}

const AboutUser: FC<AboutUserProps> = ({
  autor,
  nameRep,
  linkRep,
  createDate,
  updateDate,
  language,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Автор: {autor}</h1>
        <p>Название репозитория: {nameRep}</p>
        <a href={linkRep}>Ссылка на репозиторий</a>
        <p>Дата создания: {createDate}</p>
        <p>Дата последнего исзменения: {updateDate}</p>

        <p>Основной язык: {language}</p>
      </div>
      <MyButton onClick={() => navigate(-1)}>Назад</MyButton>
    </div>
  );
};

export default AboutUser;
