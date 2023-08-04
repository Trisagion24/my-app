import React, { useContext } from "react";
import { Context } from "../context/context";
import {
  SuperMoon,
  Cloudy,
  Sunny,
  Snowy,
  Stormy,
  Thunderstorm,
  Mists,
} from "../helpers/animationsBlocks";

const Icons = React.memo(() => {
  const contextData = useContext(Context);
  // Извлекаем данные о текущей погоде из контекста
  const { data } = contextData.state ? contextData.state : contextData.localState;

  const { main, icon } = data.weather[0];

  // Массив иконок для ночного времени суток
  const nightIcon = ["01n", "02n", "03n", "04n"];

  // Массив категорий атмосферных явлений
  const atmosphereMain = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ];

  // Возвращаем соответствующую анимацию в зависимости от значений main и icon
  if (nightIcon.includes(icon)) {
    return <SuperMoon />;
  } else if (atmosphereMain.includes(main)) {
    return <Mists />;
  } else {
    switch (main) {
      case "Clear":
        return <Sunny />;
      case "Clouds":
        return <Cloudy />;
      case "Snow":
        return <Snowy />;
      case "Rain":
        return <Stormy />;
      case "Thunderstorm":
        return <Thunderstorm />;
      case "Drizzle":
        return <Stormy />;
      default:
        return <Cloudy />;
    }
  }
});

export default Icons;
