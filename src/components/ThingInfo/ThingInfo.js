import React from "react";
import api from "../../api";
import styles from "./ThingInfo.css";
import fixSize from "../../helpers/fix-size";
import findGetParameter from "../../helpers/findGetParametr";

class ThingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      historyItems: [],
      recommendations: [],
    };
  }

  async componentDidMount() {
    fixSize();

    const userId = localStorage.getItem("userId");

    // ищем баркод в get-параметрах
    let barcodeFromGetParameters = findGetParameter("barcode");

    // Это не очень красивое решение, но пока обойдемся этим
    // получаем информацию о вещи
    api.products
      .getByBarcode(barcodeFromGetParameters || "8966756")
      .then((product) => {
        if (product) {
          this.setState({ product });

          // Делаем запись о просмотре и получаем обновленный список истории
          api.history.write(userId, product.id).then((res) => {
            // получаем просмоотренные вещи
            api.history.getAll(userId).then((historyItems) => {
              this.setState({ historyItems });
            });
          });
        }
      });
  }

  handleAddToBasketClick(productId) {
    const userId = localStorage.getItem("userId");

    if (userId && productId) {
      api.basket.add(userId, productId).then((res) => alert("Добавлено"));

    }
  }

  handleBringThingClick() {
    console.log("handleBringThingClick");
  }

  handleProductClick(barcode) {
    if (barcode) {
      location.href = `/?barcode=${barcode}`;
    }
  }

  render() {
    const name = this.state.product != null ? this.state.product.name : "";
    const brand = this.state.product != null ? this.state.product.brand : "";
    const price = this.state.product != null ? this.state.product.price : "";
    const sizes =
      this.state.product != null
        ? this.state.product.sizes.map((s) => s.name)
        : [];
    const imagesUrls =
      this.state.product != null
        ? this.state.product.images.map((img) => img.url)
        : [];

    return (
      <React.Fragment>
        <div className={styles.main}>
          {/* Фотки */}
          <div className={styles.image_container}>
            <img src={imagesUrls[0]} className={styles.image} />
          </div>

          {/* Основная информация */}
          <div className={styles.info}>
            <div className={styles.info__name}>
              <h2>{name}</h2>
            </div>
            <div className={styles.info__brand}>
              <h3>{brand}</h3>
            </div>
            <div className={styles.info__price}>
              <h3>{price} руб</h3>
            </div>
          </div>
          <div className={styles.colors_and_sizes}>
            {/* Выберите цвет */}
            {/*<div className={styles.available_colors}>*/}
            {/*    <div className={styles.available_colors__title}>*/}
            {/*        <p>*/}
            {/*            <strong>Выберите цвет: </strong>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <ul className={styles.available_colors__list}>*/}
            {/*        {colors.map((color) => (*/}
            {/*            <li*/}
            {/*                id="colors_list_item"*/}
            {/*                key={color}*/}
            {/*                className={styles.available_colors__list_item}*/}
            {/*            >*/}
            {/*                <button*/}
            {/*                    className={styles.available_colors__button}*/}
            {/*                    style={{*/}
            {/*                        backgroundColor: getColorCode(color),*/}
            {/*                        border: getColorCode(color) === 'black' ? '0.5px solid greenyellow' : '0'*/}
            {/*                    }}*/}
            {/*                    onClick={() => changeColor(color)}*/}
            {/*                />*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/* Выберите размер */}
            <div className={styles.available_sizes}>
              <div className={styles.available_sizes__title}>
                <p>
                  <strong>Выберите размер: </strong>
                </p>
              </div>
              <ul className={styles.available_sizes__list}>
                {sizes.map((size) => (
                  <li
                    id="size_list_item"
                    key={size}
                    className={styles.available_sizes__list_item}
                  >
                    <button
                      id="size_button"
                      className={styles.available_sizes_button}
                      onClick={() => {}}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.user_buttons}>
            {/* Кнопка "Добавить в корзину" */}
            <button
              className={styles.user_button}
              onClick={() => this.handleAddToBasketClick(this.state.product.id)}
            >
              Добавить в корзину
            </button>

            {/* Кнопка "Принести" */}
            <button
              className={styles.user_button}
              onClick={() => this.handleBringThingClick()}
            >
              Принести
            </button>
          </div>
        </div>
        <div className={styles.footer}>
          {/* рекомендации */}
          <div className={styles.recs}>
            <div className={styles.recs__title}>
              <p> РЕКОМЕНДАЦИИ </p>
            </div>

            <ul className={styles.recs__list}>
              {this.state.recommendations.map((item) => (
                <li
                  key={item.id}
                  className={styles.recs__list_item}
                  onClick={() => this.handleProductClick(item.barcode)}
                >
                  <div className={styles.recs__list_item_image_container}>
                    <img
                      src={item.images[0].url}
                      className={styles.recs__list_item_image}
                    />
                  </div>
                  <div className={styles.recs__list_item_title}>
                    <p>{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Просмотренные */}
          <div className={styles.history}>
            <div className={styles.history__title}>
              <p>ПРОСМОТРЕННОЕ</p>
            </div>
            <ul className={styles.history__list}>
              {this.state.historyItems.map((item) => (
                <li
                  key={item.id}
                  className={styles.history__list_item}
                  onClick={() => this.handleProductClick(item.barcode)}
                >
                  <div className={styles.history__list_item_image_container}>
                    <img
                      src={item.images[0].url}
                      className={styles.history__list_item_image}
                    />
                  </div>
                  <div className={styles.history__list_item_title}>
                    <p>{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThingInfo;
