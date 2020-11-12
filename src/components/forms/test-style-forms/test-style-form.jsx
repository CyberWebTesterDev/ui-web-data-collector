import React from "react";
import "./test-styles.css";
import { Container, Row, Col } from "react-grid-system";

export const TestStyleComponent = () => {
  return (
    <React.Fragment>
      <div className="main-parent-block">
        <label class="head-label"> Иванова Ивана Ивановна </label>
        <div className="image-container">
          <img src="https://sun9-66.userapi.com/impg/c854520/v854520719/1c370c/1CUV9wVg9O0.jpg?size=400x0&quality=90&sign=9f45614d052d94390db9e43e51f84063&c_uniq_tag=ocVEBPoZs5e432O6hb6nkxNBISNNyqBkwfkRStdmdpE&ava=1" />
        </div>

        <div className="property-child-block">
          <div className="label-div">ID</div>
          <div className="value-div">
            <a href="https://vk.com/id345481974" target="_blank">
              345481974
            </a>
          </div>
        </div>

        <div className="property-child-block">
          <div className="label-div">Отношения</div>
          <div className="value-div">Не в отношениях</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Наличие ребенка</div>
          <div className="value-div">Нет</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество друзей</div>
          <div className="value-div">50</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество подписчиков</div>
          <div className="value-div">70</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство</div>
          <div className="value-div">Свойство</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="child-block-3">Остальная информация 2</div>
      </div>

      <div className="main-parent-block">
        Петрова Даша Ивановна
        <div className="property-child-block">
          <div className="label-div">Отношения</div>
          <div className="value-div">Встречается</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Наличие ребенка</div>
          <div className="value-div">Нет</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество друзей</div>
          <div className="value-div">100</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество подписчиков</div>
          <div className="value-div">150</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство</div>
          <div className="value-div">Свойство</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="child-block-3">Остальная информация 2</div>
      </div>
    </React.Fragment>
  );
};

export const TestStyleComponentSmallBlocks = () => {
  return (
    <React.Fragment>
      <div className="main-parent-block-tight">
        Петрова Даша Ивановна
        <div className="property-child-block">
          <div className="label-div">Отношения</div>
          <div className="value-div">Встречается</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Наличие ребенка</div>
          <div className="value-div">Нет</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество друзей</div>
          <div className="value-div">100</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество подписчиков</div>
          <div className="value-div">150</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство</div>
          <div className="value-div">Свойство</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="child-block-3">Остальная информация 2</div>
      </div>
      <div className="main-parent-block-tight">
        Петрова Даша Ивановна
        <div className="property-child-block">
          <div className="label-div">Отношения</div>
          <div className="value-div">Встречается</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Наличие ребенка</div>
          <div className="value-div">Нет</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество друзей</div>
          <div className="value-div">100</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество подписчиков</div>
          <div className="value-div">150</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство</div>
          <div className="value-div">Свойство</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="child-block-3">Остальная информация 2</div>
      </div>
      <div className="main-parent-block-tight">
        Петрова Даша Ивановна
        <div className="property-child-block">
          <div className="label-div">Отношения</div>
          <div className="value-div">Встречается</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Наличие ребенка</div>
          <div className="value-div">Нет</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество друзей</div>
          <div className="value-div">100</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Количество подписчиков</div>
          <div className="value-div">150</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство</div>
          <div className="value-div">Свойство</div>
        </div>
        <div className="property-child-block">
          <div className="label-div">Свойство 2</div>
          <div className="value-div">Свойство 2</div>
        </div>
        <div className="child-block-3">Остальная информация 2</div>
      </div>
    </React.Fragment>
  );
};
