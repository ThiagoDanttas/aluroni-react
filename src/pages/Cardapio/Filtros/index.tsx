import filtros from "./filtros.json";
import style from "./Filtros.module.scss";
type IOption = typeof filtros[0];

export default function Filtros(): JSX.Element {
  function selecionarFiltro(option: IOption) {}

  return (
    <div className={style.filtros}>
      {filtros.map((option) => (
        <button
          className={style.filtros__filtro}
          key={option.id}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
