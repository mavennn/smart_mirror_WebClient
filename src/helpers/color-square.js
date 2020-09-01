export default function getColorCode(color) {
  switch (color) {
    case "Коричневый":
      return "brown";
    case "серебристый":
      return "silver";
    case "Белый":
      return "white";
    case "золотистый":
      return "gold";
    case "Фиолетовый":
      return "purple";
    case "Голубой":
      return "light-blue";
    case "Бежевый":
      return "beige";
    case "Черный":
      return "black";
    case "Синий":
      return "blue";
    case "Розовый":
      return "pink";
    case "Серый":
      return "grey";
    case "Оранжевый":
      return "orange";
    case "Красный":
      return "red";
    case "Зеленый":
      return "green";
    case "Желтый":
      return "yellow";
    case "Без цвета":
      return null;
    default:
      return null;
  }
}
